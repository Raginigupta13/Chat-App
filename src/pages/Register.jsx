import React from 'react'

const Register = () => {
    return (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            <form>
              <input required type="text" placeholder="Display Name" />
              <input required type="email" placeholder="Email" />
              <input required type="password" placeholder="Password" />
              <input required type="file" id="file" />
              <button>Sign up</button>
            </form>
            <p>
              You do have an account? Login
            </p>
          </div>
        </div>
      );
}

export default Register
