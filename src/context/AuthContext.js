import { createContext, useCallback, useState } from "react";
import API from "../services/api";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const authentication = useCallback(({username, password}) => {
         API.post("/login", {username,password}).then((response) => {
            setAuth(response.data);
            localStorage.setItem("@token:login", response.data.token);
        });

    }, []);

    return(

        <AuthContext.Provider value={{ authentication, auth}}>
            {children}
        </AuthContext.Provider>

    );

};

export {AuthContext, AuthProvider};