import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function AuthSuccess() {
  const navigate = useNavigate()
  const { search } = useLocation() // "token"

  useEffect(() => {
    const params = new URLSearchParams(search)
    const token = params.get('token')
    if (token) {
      sessionStorage.setItem('token', token)
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }, [search, navigate])

  return <p>Logging you in…</p>
}
