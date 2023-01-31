import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastyProvider } from './context/ToastyContext'
import keycloak from './config/keycloak'

import Home from './pages/Home'
import Buy from './pages/Buy'
import CriarCampanha from './pages/CriarCampanha'
import PrivateRoute from './helpers/privateRoute'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Layout from './components/Layout'
import Loading from './components/Loading'
import RifaValidation from './components/RifaValidation'

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
                <Route element={<PrivateRoute />}>
                  <Route path="rifa/validate" element={<RifaValidation />} />
                  <Route path="criar-campanha" element={<CriarCampanha />} />
                  <Route path="buy" element={<Buy />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ToastyProvider>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App
