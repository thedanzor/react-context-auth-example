import React from 'react'

// Create our Auth Context
export const AuthContext = React.createContext()

// Create the wrapper to expose the context
const AuthContextProvider = ({ children, initialState = {}, showLoginDefault = false }) => {
  // This state object is for the account information
  const [state, setState] = React.useState(initialState)

  // This state object is so we can hide / show the login step
  const [showLogin, setShowLogin] = React.useState(showLoginDefault)

  // Return the context provider and expose our state and methods
  return <AuthContext.Provider value={{
    authState: state,
    setAuthState: setState,
    showLogin,
    setShowLogin
  }}>
    {children}
  </AuthContext.Provider>
}
export default AuthContextProvider
