import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8082/auth',
  realm: 'erifas',
  clientId: 'admin-cli',
})

export default keycloak
