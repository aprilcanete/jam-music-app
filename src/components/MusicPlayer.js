import './MusicPlayer.css'
import Lyrics from './Lyrics';

export default function MusicPlayer() {

    return (
        <div className="music-player-wrapper">
            <h3>Song Title - Artist</h3>
            <img src="https://via.placeholder.com/300x300" />
            <Lyrics />
            <button className="lyrics-box">show lyrics</button>
            <p>play/pause</p>
        </div>
    )
}