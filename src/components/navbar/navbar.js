import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png'
import './navbar.scss';
import {NavLink} from 'react-router-dom';
import "./navbarActive";

class Navbar extends Component {
    state={
        username:""
    }
componentDidMount(){
    console.log(JSON.parse(localStorage.getItem("user"))) 
    let user=JSON.parse(localStorage.getItem("user"))
//     console.log(user[0].username)
    if(user){
         this.setState({username:user[0].username},()=>{
         console.log(this.state.username)
     })
    }
   
}
componentWillUpdate(){
    console.log(JSON.parse(localStorage.getItem("user"))) 
}

    render() {
        return (
            <header className=" main-header">
            {console.log(JSON.parse(localStorage.getItem("user")))}
                <div className="main-nav ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo">
                                    <a href="index.html"><img src={Logo} alt="logo" className="img-responsive"/></a>
                                </div>
                                <nav className="nav">
                                    <ul className="list-unstyled">
                                        <li className="drop">
                                            <NavLink to="/" >Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/menus">menus</NavLink>
                                        </li>
                                        <li className="drop">
                                            <NavLink to="/login">{(this.state.username)?(this.state.username):"login/sign up"}</NavLink>
                                          
                                        </li>  
                                    </ul>
                                </nav>
                                <div className="nav-right-block">
                                    <ul className="list-unstyled">
                                        <li>
                                            <NavLink to="/cart">
                                                <i className="fas fa-shopping-cart"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

         
        )
    }
}


export default Navbar;