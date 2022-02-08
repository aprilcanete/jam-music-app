import './App.css';
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import ProfilePage from './ProfilePage'
import { useState } from 'react';

function App() {

  const [showProfile, setShowProfile] = useState(false)
  
  return (
    <div className="App">
      <Header />
      {showProfile && <ProfilePage />}
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
