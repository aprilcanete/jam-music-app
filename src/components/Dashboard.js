import { useState, useEffect, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Credentials } from './Credentials'
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import useAuth from './useAuth'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import './Dashboard.css'

const spotify = Credentials();  

const spotifyApi = new SpotifyWebApi({
  clientId: spotify.ClientId,
})

export default function Dashboard({ code })  {
  const divRef = useRef(null);

  const accessToken = useAuth(code);
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3002/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <>
    <Container className="d-flex flex-column py-5">
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-1" id='lyrics-search-box' style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        <br />
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            <h4>{playingTrack?.title} {playingTrack ? 'Lyrics' : ''}</h4>
            <p style={{fontStyle: 'italic'}}>{playingTrack ? 'by' : ''} {playingTrack?.artist}</p>
            <img src="jam-icon-3.png" className="jam3"/>
            <img src="jam-icon-2.png" className="jam2"/>
            <p className="lyrics">{lyrics}</p>
          </div>
        )}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </Container>
    </>
  )
}