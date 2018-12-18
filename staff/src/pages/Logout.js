import React,{Component} from 'react'
class Home extends Component {
    componentWillMount(){
        localStorage.removeItem('access-token')
        window.location.reload();
        this.props.history.push('/')
        
    }
    render(){
        return( 
            <div></div>
            
        )
    }
}

export default Home