import { useKeycloak } from '@react-keycloak/web'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const PrivateRoute = ({ children }: { children: ReactJSXElement }) => {
  const { keycloak } = useKeycloak()

  const isLoggedIn = keycloak.authenticated

  return isLoggedIn ? children : null
}

export default PrivateRoute
