import React from 'react'
import Navbar from '../components/navbar/Navbar2'
import { Outlet } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import Sidebar from './Sidebar'

const Layout = () => {
  const { keycloak } = useKeycloak()
  return (
    <>
      {keycloak.authenticated ? (
        <Sidebar children={<Outlet />} />
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  )
}

export default Layout
