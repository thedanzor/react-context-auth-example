import React, { useContext } from 'react'

// Auth context Prover
import AuthProvider, { AuthContext } from './auth'

// Components
import LoginComponent from './components/login'

// Component that can now use the Provider
// Now the ApplicationWrapper has access to context
const ApplicationWrapper = () => {
  const { showLogin, authState } = useContext(AuthContext)

  // We can have this component do authentication checks every X minutes
  // and log people back out, or do other validation stuff. 
  // E.G - on all post and get requests, verify the user is still logged in (if its very sensitive information)

  // We will show the login by default
  if (showLogin || !authState.user) {
    return <LoginComponent />
  }

  // Once logged in we can show the component
  return <>
    I am now rendering my application code, add more components here for your app
  </>
}

// Application container, to wrap our application in context providers.
function App() {
  return <AuthProvider initialState={{}} showLoginDefault={true}>
    <ApplicationWrapper />
  </AuthProvider>
}

export default App
