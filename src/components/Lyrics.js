import { useEffect, useState } from 'react';

export default function Lyrics({ track }) {
    console.log(track)
    const [lyrics, setLyrics] = useState()
    const APIKEY = "ab5d67aef8ebdd2357245607bc14dec9"

    useEffect(() => {
        fetchTrackID()
    }, [track])
    const fetchTrackID = () => {
        console.log(track)
        fetch(`/track.search?apikey=${APIKEY}&q_track=${track}&q_artist=justin bieber&f_has_lyrics=1`)
        .then(res => res.json())
        .then(res => res.message.body.track_list[0].track.track_id)
        .then(trackID => fetchLyrics(trackID))
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const fetchLyrics = (trackID) => {
        fetch(`track.lyrics.get?apikey=${APIKEY}&track_id=${trackID}`)
        .then(res => res.json())
        .then(res => setLyrics(res.message.body.lyrics.lyrics_body))
        .catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <div className="lyrics-box">
          <p>{lyrics}</p>
        </div>
      );
}