import React,{Component} from 'react'
import UserAllTable from './userAllTable'
class userAll extends Component{
    render(){
        const {data} = this.props
        return(
            <div className="row">
                <div className="col-md-12">
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">CreateDate</th>
                        </tr>
                    </thead>
                    <tbody>
    

                    {data && data.map( d => {
                        return (
                            <UserAllTable key={d._id} data={d}/>
                            )
                    })}
                    </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}

export default userAll