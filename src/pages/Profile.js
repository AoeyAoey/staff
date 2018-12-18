import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadProfileToken} from '../Actions'
import ProfileList from '../components/profile/ProfileList'
import { Alert } from 'reactstrap';
class Profile extends Component {
    componentDidMount(){
        this.props.dispatch(loadProfileToken())
    }
    render(){
        const {loadProfileToken} = this.props
        //  console.log(loadProfileToken)
        let list =''
        if(loadProfileToken.isLoading){
            list = <Alert color="light">Loading . . .</Alert>
        }
        

        if(!loadProfileToken.isFailed && loadProfileToken.data){
            if(!loadProfileToken.isLoading ){
                if(loadProfileToken.data){
                     list = <ProfileList data={loadProfileToken.data}/>
                    // console.log(loadProfileToken.data)
                }else{
                    list = <Alert color="danger">ไม่มีข้อมูล</Alert>
                }
            }
        }

        if(loadProfileToken.isFailed){
            list = <Alert color="danger">Error : {loadProfileToken.data}</Alert>
        }
        return(
            <div className="content container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="docs-example">
                        <h2 className="h3">Profile Infomation</h2>
                        <hr/>
                        {list}
                        </div>
                    </div>
                </div>
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