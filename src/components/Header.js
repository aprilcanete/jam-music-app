import './Header.css'
import Login from './Login';
import SearchSong from './SearchSong';
import { useState } from 'react';

export default function Header() {

    const [showLogin, setShowLogin] = useState(false)

    const togglePop = () => {
        setShowLogin(!showLogin)
    }
    
    return (
        <>
            <header>
                <button onClick={togglePop} className='login-btn'>Login</button>
                <h1>  JAM  </h1>
                <SearchSong />
            </header>
            {showLogin && <Login toggle={togglePop}/>}
        </>
        
        
    )
}