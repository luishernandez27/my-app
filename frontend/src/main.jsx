import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login       from './pages/Login.jsx'
import AuthSuccess from './pages/AuthSuccess.jsx'
import Dashboard   from './pages/Dashboard.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Routes>
      <Route path="/"             element={<Navigate to="/login" replace />} />
      <Route path="/login"        element={<Login />} />
      <Route path="/auth/success" element={<AuthSuccess />} />
      <Route path="/dashboard"    element={<Dashboard />} />
      <Route path="*"             element={<Navigate to="/login" replace />} />
    </Routes>
  </HashRouter>
)
