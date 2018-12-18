import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadProfileToken} from '../Actions'
import ProfileUpdateF from '../components/profile/ProfileUpdate'
import { Alert } from 'reactstrap';
class ProfileUpdate extends Component {
    componentDidMount(){
        this.props.dispatch(loadProfileToken())
    }
    render(){
        const {loadProfileToken} = this.props
        let list =''
        if(loadProfileToken.isLoading){
            list = <Alert color="light">Loading . . .</Alert>
        }
        

        if(!loadProfileToken.isFailed && loadProfileToken.data){
            if(!loadProfileToken.isLoading ){
                if(loadProfileToken.data){
                     list = <ProfileUpdateF data={loadProfileToken.data}/>
                    // console.log(loadProfileToken.data)
                }else{
                    list = <Alert color="danger">No Data</Alert>
                }
            }
        }

        if(loadProfileToken.isFailed){
            list = <Alert color="danger">ผิดพลาด : {loadProfileToken.data}</Alert>
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