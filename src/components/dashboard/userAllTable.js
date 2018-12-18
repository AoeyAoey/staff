import React,{Component} from 'react'
import Moment from 'react-moment';
class userAllTable extends Component{
    state={
        count:1
    }
    
    render(){
        const {data} = this.props
        
        return(
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td><Moment format="YYYY/MM/DD HH:mm">
                    {data.crateDate}
                        </Moment></td>
                </tr>
        )
    }
}

export default userAllTable