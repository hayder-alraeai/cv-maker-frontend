
export const saveTokenInLocalStorage = (token) => {
      localStorage.setItem('token', token);
}
export const logoutHandler = async(isAuthenticatedDispatcher) => {
     try{
        localStorage.removeItem('token')
        isAuthenticatedDispatcher({type: 'notAuth'})
     }catch(error){
        alert(error)
     }
    
}