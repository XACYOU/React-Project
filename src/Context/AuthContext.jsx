import React, { createContext } from 'react'

export default function AuthContext() {

    const AuthContext = createContext();

    const AuthProvider = ({children}) => {

        let isLogged
        return (
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        )
    }
  return (
    <div>
      
    </div>
  )
}
