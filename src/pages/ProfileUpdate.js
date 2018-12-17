import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadProfileToken} from '../Actions'
import ProfileUpdateF from '../components/profile/ProfileUpdate'
class ProfileUpdate extends Component {
    componentDidMount(){
        this.props.dispatch(loadProfileToken())
    }
    render(){
        const {loadProfileToken} = this.props
        let list =''
        if(loadProfileToken.isLoading){
             list = <div>loading ...</div>
        }
        

        if(!loadProfileToken.isFailed && loadProfileToken.data){
            if(!loadProfileToken.isLoading ){
                if(loadProfileToken.data){
                     list = <ProfileUpdateF data={loadProfileToken.data}/>
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
            <div>
                {list}
                {/*  */}

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
export default connect(mapStateToProps)(ProfileUpdate)