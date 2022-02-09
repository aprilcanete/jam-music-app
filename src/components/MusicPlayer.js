import './MusicPlayer.css'
import React, { useState, useEffect } from 'react';
import { Credentials } from './Credentials'
import axios from 'axios';


export default function MusicPlayer({ trackTitle }) {

    const spotify = Credentials();  
    const [token, setToken] = useState('');  
    const [trackDetail, setTrackDetail] = useState({ });
    

    useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
        headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    })
    .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);

        axios(`https://api.spotify.com/v1/search?q=${trackTitle}&type=track`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then (songResponse => {        
        setTrackDetail({
            artist: songResponse.data.tracks.items[0].artists[0].name,
            imageUrl: songResponse.data.tracks.items[0].album.images[1].url,
            trackId: songResponse.data.tracks.items[0].id,
            trackTitle: ''
        })
        });
        
    });

    }, [spotify.ClientId, spotify.ClientSecret, trackTitle]);

    return (
        <div className="music-player-wrapper">
            <h3>{trackTitle} - {trackDetail.artist}</h3>
            <img src={trackDetail.imageUrl} />
            <h2>{`<<   ||   >>`}</h2>
        </div>
    )
}