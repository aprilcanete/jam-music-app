import './Header.css'
import { Container } from 'react-bootstrap'
import { Credentials } from './Credentials'

const spotify = Credentials();  

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${spotify.ClientId}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`


export default function Header({ loginStatus }) {

    return (
        <>
            <header>
                { loginStatus &&
                    <Container className="d-flex align-items-center" >
                        <a className="btn btn-success btn-lg" href={AUTH_URL}>
                        Login with Spotify
                        </a>
                    </Container>
                }
                <h1 className='logo'>JAM</h1>
            </header>
        </>
        
        
    )
}