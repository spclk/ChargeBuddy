import React from "react"

const AuthContext = React.createContext({
    authData: {
        isLoggedIn: false,
        user: null
    },
    setAuthData: () => {

    }

})

export default AuthContext;