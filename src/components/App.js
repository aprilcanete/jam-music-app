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
      {showProfile && <ProfilePage />}
      <MusicPlayer />
      <Lyrics track={song}/>
      <h1>{song}</h1>
      <Footer />
    </div>
  );
}

export default App;
