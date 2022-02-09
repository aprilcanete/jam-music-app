import './Header.css'
import Login from './Login';
import SearchSong from './SearchSong';
import { useState } from 'react';

export default function Header({ songTitle }) {

    const [showLogin, setShowLogin] = useState(false)
    const [song, setSong] = useState();

    const togglePop = () => {
        setShowLogin(!showLogin)
    }

    const handleChange = event => {
        setSong(event.target.value)
    }

    const handleSearch = event => {
        songTitle(song)
    }
    return (
        <>
            <header>
                <button onClick={togglePop} className='login-btn'>Login</button>
                <h1 className='logo'>JAM</h1>
            <div>
                <input 
                    type="text" 
                    className="search" 
                    placeholder="song title..." 
                    onChange={handleChange}
                />
                <button onClick={handleSearch} className="src-btn">search</button>
            </div>
            </header>
            {showLogin && <Login toggle={togglePop}/>}
        </>
        
        
    )
}