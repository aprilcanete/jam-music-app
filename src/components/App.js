import './App.css';
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import ProfilePage from './ProfilePage'
import { useState } from 'react';
import Lyrics from './Lyrics'

function App() {

  const [song, setSong] = useState()
  const [showProfile, setShowProfile] = useState(false)

  const handleCallback = (song) => {
    setSong(song)
  }

  return (
    <div className="App">
      <Header songTitle={handleCallback} />
      <div className='content-wrapper'>
        <div className='playlist-wrapper'>
          <h4>Playlist</h4>
          <br />
          <p>song 1</p>
          <p>song 2</p>
          <p>song 3</p>
        </div>
        {showProfile && <ProfilePage />}
        <MusicPlayer trackTitle={song}/>
        <Lyrics track={song}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
