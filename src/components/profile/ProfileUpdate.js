import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {profileUpdateAction} from '../../Actions'
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
             list = <div>Loading ...</div>
        }
        if(!profileUpdateAction.isFailed && profileUpdateAction.data){
            if(!profileUpdateAction.isLoading){
                if(profileUpdateAction.data === 'success'){
                    list = <h4>profile complete</h4>
                }
            }
        }
        if(profileUpdateAction.isFailed){
            list = <div>ผิดพลาด : {profileUpdateAction.data}</div>
        }
        return(
            
            <div>
                {list}
                <form onSubmit={this.handleSubmit}>
                    <p>Name : <input type="text" name="name" onChange={this.handleChange} required defaultValue={data.name}/></p>
                    <p>Email : <input type="text" name="email" onChange={this.handleChange} required defaultValue={data.email}/></p>
                    <p>Phone : <input type="number" name="phone" onChange={this.handleChange} required defaultValue={data.phone}/></p>
                    <p>Gender : male <input type="radio" name="gender" value="male" onChange={this.handleChange} required checked={(data.gender === 'male')}/> 
                    female <input type="radio" name="gender" value="female" onChange={this.handleChange} required checked={(data.gender === 'female')}/></p>
                    <button type="submit">ยืนยัน</button>
                </form>
                <Link to ="/">back</Link>
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