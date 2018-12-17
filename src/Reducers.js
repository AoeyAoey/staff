import {combineReducers} from 'redux'


const Login = {isFailed:false,data:null,isLoading:false}
function CheckLogin(state = Login,action){
    switch(action.type){
        case "LOGIN_LOADING":
            return {...state,isFailed:false,data:null,isLoading:true}
        case "LOGIN_SUCCESS":
            return {...state,isFailed:false,data:action.payload,isLoading:false}
        case "LOGIN_FAIL":
            return {...state,isFailed:true,data:action.payload,isLoading:false}
        default:
            return state
    }
}
const ProfileToken = {isFailed:false,data:null,isLoading:false}
function loadProfileToken(state = ProfileToken,action){
    switch(action.type){
        case "PROFILE_TOKEN_LOADING":
            return {...state,isFailed:false,data:null,isLoading:true}
        case "PROFILE_TOKEN_SUCCESS":
            return {...state,isFailed:false,data:action.payload,isLoading:false}
        case "PROFILE_TOKEN_FAIL":
            return {...state,isFailed:true,data:action.payload,isLoading:false}
        default:
            return state
    }
}
const registerIni = {isFailed:false,data:null,isLoading:false}
function register(state = registerIni,action){
    switch(action.type){
        case "REGISTER_LOADING":
            return {...state,isFailed:false,data:null,isLoading:true}
        case "REGISTER_SUCCESS":
            return {...state,isFailed:false,data:action.payload,isLoading:false}
        case "REGISTER_FAIL":
            return {...state,isFailed:true,data:action.payload,isLoading:false}
        default:
            return state
    }
}
const infomationUpdate = {isFailed:false,data:null,isLoading:false}
function profileUpdateAction(state = infomationUpdate,action){
    switch(action.type){
        case "PROFILE_UPDATE_LOADING":
            return {...state,isFailed:false,data:null,isLoading:true}
        case "PROFILE_UPDATE_SUCCESS":
            return {...state,isFailed:false,data:'success',isLoading:false}
        case "PROFILE_UPDATE_FAIL":
            return {...state,isFailed:true,data:action.payload,isLoading:false}
        default:
            return state
    }
}
const Reducers = combineReducers({
   CheckLogin,loadProfileToken,register,profileUpdateAction
})
export default Reducers