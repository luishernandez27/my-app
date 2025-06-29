import React from 'react'

export default function Dashboard() {
  const token = sessionStorage.getItem('token')
  let id = 'invitado'
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    id = payload.id
  } catch {}
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>¡Hola {id}!</p>
    </div>
  )
}
