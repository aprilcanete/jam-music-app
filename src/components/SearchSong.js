import { useState } from 'react'

export default function SearchSong() {

    const [song, setSong] = useState();

    const handleChange = event => {
        setSong(event.target.value)
    }

    const handleSearch = event => {
        event.preventDefault()

    }
    
    return (
        <div>
            <input 
                type="text" 
                className="search" 
                placeholder="song title..." 
                onChange={handleChange}
            />
            <button onClick={handleSearch} className="src-btn">search</button>
        </div>
    )
}