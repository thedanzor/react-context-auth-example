import React from 'react'

// Import the context
import { AuthContext } from '../../auth'

// Import view
import StyledButton from '../../views/login.js'

const Login = () => {
  const { setAuthState, setShowLogin } = React.useContext(AuthContext)

  const HandleLogin = () => {
    // Here there would be some fetch request or process for logging in,
    // we're just going to fake it.
    setAuthState({
      user: {
        name: 'scott',
        lastName: 'jones',
        email: 'sjones243@gmail.com'
      }
    })
    setShowLogin(false)
  }

  return <>
    <StyledButton onClick={HandleLogin}>
      CLICK ME TO LOGIN
    </StyledButton>
  </>
}
export default Login