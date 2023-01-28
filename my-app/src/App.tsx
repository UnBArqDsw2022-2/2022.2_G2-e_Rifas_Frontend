import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastyProvider } from './context/ToastyContext'
import keycloak from './config/keycloak'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './helpers/privateRoute'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Navbar from './components/navbar/Navbar2'
import Layout from './components/Layout'
import Loading from './components/Loading'

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider
        authClient={keycloak}
        LoadingComponent={<Loading />}
      >
        <ToastyProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ToastyProvider>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App
