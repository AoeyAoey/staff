import React,{Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../Actions'
class Register extends Component {
    state = {
        information:{},
        password_check:true
    }
    render(){
        // const {register} = this.props
        // console.log(register)
        const {password_check} = this.state
        let alert_password = ''
        if(!password_check){
             alert_password = <h1>password not match</h1>
        }
        const {register} = this.props
        
        let list = ''
        if(register.isLoading){
             list = <div>Loading ...</div>
        }
        if(!register.isFailed && register.data){
            if(!register.isLoading){
                if(register.data.auth){
                    list = <h4>register complete</h4>
                }
            }
        }
        if(register.isFailed){
            list = <div>ผิดพลาด : {register.data}</div>
        }
        return(
            <div>Register
                {list}
                <form onSubmit={this.handleSubmit}>
                    <p>Name : <input type="text" name="name" onChange={this.handleChange} required/></p>
                    <p>Email : <input type="text" name="email" onChange={this.handleChange} required/></p>
                    <p>Passwordd : <input type="password" name="password" onChange={this.handleChange} required/></p>
                    <p>Confirm Passwordd : <input type="password" name="password_confirm" onChange={this.handleChange} required/></p>
                    <p>Phone : <input type="number" name="phone" onChange={this.handleChange} required/></p>
                    <p>Gender : male <input type="radio" name="gender" value="male" onChange={this.handleChange} required/> 
                    female <input type="radio" name="gender" value="female" onChange={this.handleChange} required/></p>
                    <button type="submit">ยืนยัน</button>
                </form>
                {alert_password}

            </div>
        )
    }
    handleChange =(e) =>{
        const {name,value} = e.target
         const {information} = this.state
        this.setState({
            information:{
                ...information,
                [name] : value
            }
            
        })
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        //   console.log(this.state.information.password)
         if(this.state.information.password !== this.state.information.password_confirm){
            this.setState({
                password_check : false
            })
            // console.log(this.state)
         }else{
            this.setState({
                password_check : true
            })
            const {information} = this.state
             this.props.dispatch(register(information))
            
         }
        
    }
}

function mapStateToProps(state){
    return{
        register:state.register
    }
}

export default connect(mapStateToProps)(Register)