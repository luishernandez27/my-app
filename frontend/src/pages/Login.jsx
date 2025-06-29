import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      {/* esto renderiza el botón */}
      <Link to="/api/auth/google">
        <button>Log in with Google</button>
      </Link>
    </div>
  )
}
