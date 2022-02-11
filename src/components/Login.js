import { Credentials } from './Credentials'
import { Container } from 'react-bootstrap'
import React from 'react'
import './Login.css'

const spotify = Credentials();  

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${spotify.ClientId}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login({loginStatus}) {

    const message = `Hey,  before we jam,  make sure you log in to spotify!`

    return (
        <>
            {loginStatus &&
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "20vh"}}>
                <img src="/jam-icon.png" alt="jam icon" style={{ width:'500px', height: '400px'}}/>
                <div className='home-page-content'>
                    <h3 className="welcome">Hey,  before we jam,  make sure you log in to spotify!</h3>
                    <br />
                    <br />
                    <a className="btn btn-success btn-lg" href={AUTH_URL}>
                    Login with Spotify
                    </a>
                </div>                   
            </Container>       
            }
        </>
    )
}