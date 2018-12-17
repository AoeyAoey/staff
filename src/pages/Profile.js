import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadProfileToken} from '../Actions'
import ProfileList from '../components/profile/ProfileList'
class Profile extends Component {
    componentDidMount(){
        this.props.dispatch(loadProfileToken())
    }
    render(){
        const {loadProfileToken} = this.props
        //  console.log(loadProfileToken)
        let list =''
        if(loadProfileToken.isLoading){
             list = <div>loading ...</div>
        }
        

        if(!loadProfileToken.isFailed && loadProfileToken.data){
            if(!loadProfileToken.isLoading ){
                if(loadProfileToken.data){
                     list = <ProfileList data={loadProfileToken.data}/>
                    // console.log(loadProfileToken.data)
                }else{
                    list = <h4>No data</h4>
                }
            }
        }

        if(loadProfileToken.isFailed){
            list = <div>Error {loadProfileToken.data}</div>
        }
        return(
            <div>Profile

{list}
            </div>
            
        )
    }
}

function mapStateToProps(state){
    // console.log(state)
    return{
        loadProfileToken:state.loadProfileToken
    }
}

export default connect(mapStateToProps)(Profile)