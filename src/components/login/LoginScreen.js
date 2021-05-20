import React from 'react'

const LoginScreen = ({history}) => {
    const handleLogin = () => {
        history.replace('/')
    }
    
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>Presioname</button>
        </div>
    )
}

export default LoginScreen

