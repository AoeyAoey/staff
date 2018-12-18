import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ProfileList extends Component{
    render(){
        const {data} = this.props
        // console.log(data)
        
        return(
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <ListGroup flush>
                        <ListGroupItem><b>Name :</b> {data.name} </ListGroupItem>
                        <ListGroupItem><b>Email :</b> {data.email} </ListGroupItem>
                        <ListGroupItem><b>Gender :</b> {data.gender} </ListGroupItem>
                        <ListGroupItem><b>Phone :</b> {data.phone} </ListGroupItem>
                        <ListGroupItem><b>crateDate :</b> <Moment format="YYYY/MM/DD HH:mm">
                    {data.crateDate}
                        </Moment> </ListGroupItem>
                        <ListGroupItem><b>updateDate :</b> <Moment format="YYYY/MM/DD HH:mm">
                    {data.updateDate}
                        </Moment></ListGroupItem>
                        <ListGroupItem className="text-center">
                            <Link to ="/profileUpdate" className="btn btn-primary">แก้ไขโปรไฟล์</Link> 
                        </ListGroupItem>
                    </ListGroup>
                    </div>
                    
                </div>
                   
                     <br></br>
                    
                </div>
            
        )
    }
}

export default ProfileList