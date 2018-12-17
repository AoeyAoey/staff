import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';

class ProfileList extends Component{
    render(){
        const {data} = this.props
        // console.log(data)
        return(
            <div>
                <h4>
                   name :{data.name} <br/>
                   email :{data.email}<br/>
                   gender :{data.gender}<br/>
                   phone :{data.phone}<br/>
                   crateDate :<Moment format="YYYY/MM/DD HH:mm">
                   {data.crateDate}
                    </Moment><br/>
                   updateDate :<Moment format="YYYY/MM/DD HH:mm">
                   {data.updateDate}
                    </Moment><br/>
                   
                </h4>
                <Link to ="/profileUpdate">แก้ไข</Link> <br></br>
                <Link to ="/profileUpdate">แก้ไขรหัสผ่าน</Link>
            </div>
        )
    }
}

export default ProfileList