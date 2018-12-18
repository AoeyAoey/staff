import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkLogin} from '../Actions'
import { Alert } from 'reactstrap';
class Login extends Component{
    // state = {
    //     username:'',
    //     password:''
    // }
    render(){
        if(localStorage.getItem('access-token')){
            this.props.history.push('/')
        }
        
        const {CheckLogin} = this.props
        let list = ''
        if(CheckLogin.isLoading){
             list = <Alert color="light">Loading . . .</Alert>
        }
        

        if(!CheckLogin.isFailed && CheckLogin.data){
            if(!CheckLogin.isLoading){
                if(CheckLogin.data.auth){
                    // list = <h4>okokokokok</h4>
                    
                    localStorage.setItem('access-token',CheckLogin.data.token)
                    window.location.reload();
                    this.props.history.push('/')
                   
                }else{
                    list = <Alert color="danger">ตรวจสอบ username / password</Alert>
                }
            }
        }
        if(CheckLogin.isFailed){
            list = <Alert color="danger">ผิดพลาด : {CheckLogin.data}</Alert>
        }
        
        return(
            <div className="content container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="docs-example">
                            <h2 className="h3">Login</h2>
                            <hr/>
                            {list}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Username">Email</label>
                                    <input type="text" name="username" onChange={this.handleChange} className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Username">Password</label>
                                    <input type="password" name="password" onChange={this.handleChange} className="form-control" required/>
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
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {username,password} = this.state
        if(username && password){
            this.props.dispatch(checkLogin(username,password))
        }
    }
}

function mapStateToProps(state){
      //console.log(state)
    return{
        CheckLogin:state.CheckLogin
    }
}

export default connect(mapStateToProps)(Login)