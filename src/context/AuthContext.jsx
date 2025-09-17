import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
     const [registerUsers, setRegisterUsers] = useState(() => {
    try {
      const saved = localStorage.getItem("registeredUsers");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
   const [loginUser, setLoginUser] = useState(() => {
    return !!JSON.parse(localStorage.getItem("loginUser")) || false;
});



   
useEffect(() => {
  localStorage.setItem("registeredUsers", JSON.stringify(registerUsers))
}, [registerUsers])

    // handle register form
    function handleRegisterForm(e){
        e.preventDefault()
          
         
        const fetchRegisterUser = {
            registername : e.target.registername.value,
            registeremail : e.target.registeremail.value,
            registerpassword : e.target.registerpassword.value
        }


        if(fetchRegisterUser.registerpassword.length < 8 ){
            alert('password can not be less then 8 ')
            return
        }


        //   const email = e.target.registeremail.value
        const existsEmail = registerUsers.find((user) => user.registeremail === fetchRegisterUser.registeremail )

        if(existsEmail){
            alert('email is already exists !')
            return 
        }
       


        setRegisterUsers(prev => [...prev , fetchRegisterUser])

        e.target.reset()

        
    }


    // handle login form
    function handleLoginForm(e){
        e.preventDefault()
        
        const fetchUserLogin = {

            loginemail : e.target.loginemail.value,
            loginpassword : e.target.loginpassword.value
        }
        
        const confirmLogin =  registerUsers.find((user) => user.registeremail === fetchUserLogin.loginemail && user.registerpassword === fetchUserLogin.loginpassword)
        
        if(confirmLogin){

            localStorage.setItem('loginUser' , JSON.stringify(confirmLogin))
            setLoginUser(true)
        }else{
            alert('invalid credentials !')
        }
        
    }
 

    return (
        <AuthContext.Provider value={{handleLoginForm , handleRegisterForm , loginUser}} >
            {children}
        </AuthContext.Provider>
    )

}