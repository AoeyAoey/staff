import React,{Component} from 'react'
import Moment from 'react-moment';
import {connect} from 'react-redux'
import {loadRegisToDay} from '../../Actions'
class getRegisThisDay extends Component{
    componentDidMount(){
        this.props.dispatch(loadRegisToDay())
    }
    render(){
        const {loadRegisToDay} = this.props
        // const {data} = this.props
        // console.log(loadRegisToDay)
        let count ='';
        if(!loadRegisToDay.isFailed && loadRegisToDay.data){
            if(!loadRegisToDay.isLoading ){
                if(loadRegisToDay.data.length > 0){
                    count = <h2>{loadRegisToDay.data.length} คน</h2>
                }
            }
        }
        // let count = loadRegisToDay.data.length
        return(
                <div>{count}</div>
        )
    }
}
function mapStateToProps(state){
    return{
        loadRegisToDay:state.loadRegisToDay,
        
    }
}
export default connect(mapStateToProps)(getRegisThisDay)