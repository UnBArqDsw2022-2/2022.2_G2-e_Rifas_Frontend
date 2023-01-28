import Navbar from '../components/navbar'
import { useKeycloak, ReactKeycloakProvider } from '@react-keycloak/web'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../pages/Home'

const PrivateRoute = () => {
  const { keycloak, initialized } = useKeycloak()

  const isLoggedIn = keycloak.authenticated

  return isLoggedIn ? <Outlet /> : <Home />
}

export default PrivateRoute
