import './App.css';
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import ProfilePage from './ProfilePage'
import { useState } from 'react';
import Lyrics from './Lyrics'

function App() {

  const [song, setSong] = useState("")
  const [showProfile, setShowProfile] = useState(false)

  const handleCallback = (song) => {
    setSong(song)
  }
  const handleLyricToggleClick = () => {
    let lyrics = document.getElementsByClassName("lyrics-box")
    for(let i=0; i<lyrics.length; i++) {
      if(lyrics[i].style.display === "block") {
        lyrics[i].style.display = "none"
      } else {
        lyrics[i].style.display = "block"
      }
   }
  }

  return (
    <div className="App">
      <Header songTitle={handleCallback} />
      {showProfile && <ProfilePage />}
      <MusicPlayer trackTitle={song} toggleLyrics={handleLyricToggleClick} />
      <Lyrics track={song}/>
      <Footer />
    </div>
  );
}

export default App;
