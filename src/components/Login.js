
export default function Login({toggle}) {

    const handleClick = () => {
        toggle()
    }

    return (
        <div className="login-wrapper">
            <div className="login-content">
                <span className="close" onClick={handleClick}>&times;</span>
                <div class="form-floating mb-3">
                    <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="btn-form">login</button>
            </div> 
        </div>
    )
}