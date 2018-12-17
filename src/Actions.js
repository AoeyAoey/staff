export const checkLogin = (email,password) =>{
    // console.log(email)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email, password })
    }
    return (dispatch) => {
        dispatch({
            type:"LOGIN_LOADING"
        })
        fetch(`http://127.0.0.1:3001/api/auth/login`, requestOptions)
        .then(res =>{
            if(res.ok){
                return res
            }
            throw Error(res.status)
        })
        .then(result => result.json())
        .then(result =>{
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:result
            })
            //  console.log(result)
        })
        .catch(e => dispatch({
            type: 'LOGIN_FAIL',
            payload : e.message
            
        }))

    }
}

export const loadProfileToken = () =>{
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type':'application/json',
        'x-access-token':localStorage.getItem('access-token')
    }
    }
    return (dispatch) => {
        dispatch({
            type:"PROFILE_TOKEN_LOADING"
        })
        fetch(`http://127.0.0.1:3001/api/auth/me`, requestOptions)
        .then(res =>{
            if(res.ok){
                return res
            }
            throw Error(res.status)
        })
        .then(result => result.json())
        .then(result =>{
            dispatch({
                type:'PROFILE_TOKEN_SUCCESS',
                payload:result
            })
            //  console.log(result)
        })
        .catch(e => dispatch({
            type: 'PROFILE_TOKEN_FAIL',
            payload : e.message
            
        }))

    }
}

export const register = (information) =>{
    const date = {crateDate:new Date(),updateDate:new Date()}
    information = {...information,...date}
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify( information )
    }
    return (dispatch) => {
        dispatch({
            type:"REGISTER_LOADING"
        })
        fetch(`http://127.0.0.1:3001/api/auth/register`, requestOptions)
        .then(res =>{
            if(res.ok){
                return res
            }
            throw Error(res.status)
        })
        .then(result => result.json())
        .then(result =>{
            dispatch({
                type:'REGISTER_SUCCESS',
                payload:result
            })
            //  console.log(result)
        })
        .catch(e => dispatch({
            type: 'REGISTER_FAIL',
            payload : e.message
            
        }))
        
    }
}
export const profileUpdateAction = (data) =>{
    // console.log(data)
    const date = {updateDate:new Date()}
    data = {...data,...date}
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify( data )
    }
    // console.log(JSON.stringify( data ))
    return (dispatch) => {
        dispatch({
            type:"PROFILE_UPDATE_LOADING"
        })
        fetch(`http://127.0.0.1:3001/api/users/${data._id}`, requestOptions)
        .then(res =>{
            if(res.ok){
                return res
            }
            throw Error(res.status)
        })
        .then(result => result.json())
        .then(result =>{
            dispatch({
                type:'PROFILE_UPDATE_SUCCESS',
                payload:result
            })
            //  console.log(result)
        })
        .catch(e => dispatch({
            type: 'PROFILE_UPDATE_FAIL',
            payload : e.message
            
        }))
        
    }
}