import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadDashboard} from '../Actions'
import UserAll from '../components/dashboard/userAll'
import ThisDay from '../components/dashboard/getRegisThisDay'
import { Alert } from 'reactstrap';
class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(loadDashboard())
    }
    render(){
        const {loadDashboard} = this.props
        
        let d = new Date();
        //.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
        let today = `{${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}}`
        let list = <Alert color="light">Loading . . .</Alert>
        let loadCountUser = <h2>Loading. . .</h2>
        let listCountThisDay = <h2>Loading. . .</h2>
        if(!loadDashboard.isFailed && loadDashboard.data){
            if(!loadDashboard.isLoading ){
                if(loadDashboard.data.length > 0){
                    list = <UserAll data={loadDashboard.data}/>
                    loadCountUser = <h2>{loadDashboard.data.length} คน</h2>
                    listCountThisDay = <ThisDay/>
                }else{
                    list = <Alert color="danger">No data</Alert>
                }
            }
        }
        if(loadDashboard.isFailed){
            list = <Alert color="danger">ผิดพลาด : {loadDashboard.data}</Alert>
        }
        
        return(
            
            <div className="content container">
            <div className="row">
                <div className="col-md-12">
                    <div className="docs-example">
                        <h2 className="h3">Dashboard</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Staff ทั้งหมด</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text">{loadCountUser}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Staff ที่สมัครใหม่วันนี้ {today}</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text">{listCountThisDay}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {list}

                       
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state){
    return{
        loadDashboard:state.loadDashboard,
        
    }
}
export default connect(mapStateToProps)(Dashboard)