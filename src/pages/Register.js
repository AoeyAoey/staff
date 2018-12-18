import React,{Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../Actions'
import { Alert } from 'reactstrap';
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
             alert_password = <Alert color="danger">password not match</Alert>
        }
        const {register} = this.props
        
        let list = ''
        if(register.isLoading){
             list = <Alert color="light">Loading . . .</Alert>
        }
        if(!register.isFailed && register.data){
            if(!register.isLoading){
                if(register.data.auth){
                    // list = <h4>register complete</h4>
                    list = <Alert color="success">register complete</Alert>
                }
            }
        }
        if(register.isFailed){
            list = <Alert color="danger">ผิดพลาด : {register.data}</Alert>
        }
        return(
            // <div>Register
            //     {list}
            //     <form onSubmit={this.handleSubmit}>
            //         <p>Name : <input type="text" name="name" onChange={this.handleChange} required/></p>
            //         <p>Email : <input type="text" name="email" onChange={this.handleChange} required/></p>
            //         <p>Passwordd : <input type="password" name="password" onChange={this.handleChange} required/></p>
            //         <p>Confirm Passwordd : <input type="password" name="password_confirm" onChange={this.handleChange} required/></p>
            //         <p>Phone : <input type="number" name="phone" onChange={this.handleChange} required/></p>
            //         <p>Gender : male <input type="radio" name="gender" value="male" onChange={this.handleChange} required/> 
            //         female <input type="radio" name="gender" value="female" onChange={this.handleChange} required/></p>
            //         <button type="submit">ยืนยัน</button>
            //     </form>
            //     {alert_password}

            // </div>
            <div className="content container">
            <div className="row">
                <div className="col-md-12">
                    <div className="docs-example">
                        <h2 className="h3">Register</h2>
                        <hr/>
                        {list}

                        {alert_password}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" onChange={this.handleChange} required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Emai</label>
                                <input type="text" name="email" onChange={this.handleChange} required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="password" onChange={this.handleChange} required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Confirm Password">Confirm Password</label>
                                <input type="password" name="password_confirm" onChange={this.handleChange} required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input type="number" name="phone" onChange={this.handleChange} required className="form-control"/>
                            </div>
                            <div className="form-group">
                            Gender <br/>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" value="male" onChange={this.handleChange} required className="form-check-input"/>
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} required className="form-check-input"/>
                                <label className="form-check-label">Female</label>
                            </div>
                            </div>

                            {/* <p>Username : <input type="text" name="username" onChange={this.handleChange}/></p> */}
                            {/* <p>Passwordd : <input type="password" name="password" onChange={this.handleChange}/></p> */}
                            <button className="btn btn-secondary" type="submit">Submit</button>
                            {/* <button type="submit">ยืนยัน</button> */}
                        </form>
                    </div>
                </div>
            </div>
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