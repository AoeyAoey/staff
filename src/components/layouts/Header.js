import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
     } from 'reactstrap';
class Header extends Component{
    state = {
        isOpen: false
      };
    toggle=() =>{
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
        
                 <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Staff</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            {this.CheckLogin()}
          </Collapse>
        </Navbar>
        

            
        )
    }

    CheckLogin = () =>{
        if(localStorage.getItem('access-token')){
            return(
                // <ul>
                //     <li><Link to ="/profile">Profile</Link></li>
                //     <li><button onClick={this.signout}>ออกจากระบบ</button></li>
                // </ul> 
                <Nav className="ml-auto" navbar>
                <NavItem>
                {/* <NavLink href="/login/">Login</NavLink> */}
                    <Link to="/profile" className="nav-link">Profile</Link>
                </NavItem>
                <NavItem>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </NavItem>
                <NavItem>
                    <Link to="/Logout" className="nav-link">Logout</Link>
                </NavItem>
                </Nav>
              )
          }else{
            return(
                // <ul>
                //     <li><Link to="/register">Register</Link></li>
                //     <li><Link to ="/login">Login</Link></li>
                    
                //     </ul> 
                    
            <Nav className="ml-auto" navbar>
                <NavItem>
                {/* <NavLink href="/login/">Login</NavLink> */}
                    <Link to="/register" className="nav-link">Register</Link>
                </NavItem>
                <NavItem>
                    <Link to="/login" className="nav-link">Login</Link>
                </NavItem>
            </Nav>
              )
          }
    }
    signout = (e) =>{
        e.preventDefault()
        
        // window.location.reload(); 
      }
}

export default withRouter(Header)