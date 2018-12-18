import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {profileUpdateAction} from '../../Actions'
import { Alert } from 'reactstrap';
class ProfileUpdate extends Component{
    
    state = {
    }
    componentWillMount(){
        // console.log(this.props)
        const {data} = this.props
        this.setState({
            data
        })
        
    }
    render(){
        const {data} = this.state
        
        const {profileUpdateAction} = this.props
        // console.log(profileUpdateAction)
        let list = ''
        if(profileUpdateAction.isLoading){
            list = <Alert color="light">Loading . . .</Alert>
        }
        if(!profileUpdateAction.isFailed && profileUpdateAction.data){
            if(!profileUpdateAction.isLoading){
                if(profileUpdateAction.data === 'success'){
                    // list = <h4>profile complete</h4>
                    list = <Alert color="success">Profile Update Complete</Alert>
                }
            }
        }
        if(profileUpdateAction.isFailed){
            list = <Alert color="danger">ผิดพลาด : {profileUpdateAction.data}</Alert>
        }
        return(
            
            // <div>
            //     {list}
            //     <form onSubmit={this.handleSubmit}>
            //         <p>Name : <input type="text" name="name" onChange={this.handleChange} required defaultValue={data.name}/></p>
            //         <p>Email : <input type="text" name="email" onChange={this.handleChange} required defaultValue={data.email}/></p>
            //         <p>Phone : <input type="number" name="phone" onChange={this.handleChange} required defaultValue={data.phone}/></p>
            //         <p>Gender : male <input type="radio" name="gender" value="male" onChange={this.handleChange} required checked={(data.gender === 'male')}/> 
            //         female <input type="radio" name="gender" value="female" onChange={this.handleChange} required checked={(data.gender === 'female')}/></p>
            //         <button type="submit">ยืนยัน</button>
            //     </form>
            //     <Link to ="/">back</Link>
            // </div>
            <div className="content container">
            <div className="row">
                <div className="col-md-12">
                    <div className="docs-example">
                        <h2 className="h3">Register</h2>
                        <hr/>
                        {list}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" onChange={this.handleChange} required className="form-control" defaultValue={data.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Emai</label>
                                <input type="text" name="email" onChange={this.handleChange} required className="form-control" defaultValue={data.email}/>
                            </div>
                            
                        
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input type="number" name="phone" onChange={this.handleChange} required className="form-control" defaultValue={data.phone}/>
                            </div>
                            <div className="form-group">
                            Gender <br/>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" value="male" onChange={this.handleChange} required className="form-check-input" checked={(data.gender === 'male')}/>
                                <label clssName="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} required className="form-check-input" checked={(data.gender === 'female')}/>
                                <label clssName="form-check-label">Female</label>
                            </div>
                            </div>

                            {/* <p>Username : <input type="text" name="username" onChange={this.handleChange}/></p> */}
                            {/* <p>Passwordd : <input type="password" name="password" onChange={this.handleChange}/></p> */}
                            <button className="btn btn-secondary" type="submit">Submit</button> <Link className="btn btn-secondary" to ="/">Back</Link>
                            
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
        const {data} = this.state
        this.setState({
            data:{
                ...data,
                [name] : value
            }
                
        })
        //  console.log(this.state)
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()
            const {data} = this.state
               this.props.dispatch(profileUpdateAction(data))
    }
    
}
function mapStateToProps(state){
    return{
        profileUpdateAction:state.profileUpdateAction
    }
}
export default connect(mapStateToProps)(ProfileUpdate)