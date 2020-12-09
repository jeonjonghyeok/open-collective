// THE NAVIGATION BAR COMPONENT

// REACT IMPORTS
import React, { Component } from 'react';
// ROUTER IMPORTS
import { Link } from 'react-router-dom';
// REDUX IMPORTS
// import { connect } from 'react-redux';
// import { store } from '../../store';
// import { ssosignin } from '../../actions/authActions';
// STYLESHEET
import './navbar.css'
// BANNER IMPORT
// import logo from '../../assets/images/JejuBanner.png'
import openCollecticon from "../../assets/Opencolleclog/opencollective-icon.svg"
import openCollectype from "../../assets/Opencolleclog/logotype.svg"
import glass from "../../assets/OpencollecOther/MagnifyingGlass.png"


class Navbar extends Component{
    render(){
        return(
        <div className ="mainNav">
            <div className="MNlogo">
                <img src={openCollecticon} width="24px" height="24px"/>
                <img src={openCollectype} height="16px"/>
            </div>

            <div className="MNmiddle">
                <div className="MNavinput">
                    <img src={glass} width="24px" height="24px"/>
                    <input placeholder="Search.."/>
                </div>    
                <a>Dicover</a>
                <a>Docs&Help</a> 
            </div>    
            <Link to="/signin?next=%2Fopencollective">
            <a id="sign">Sign in</a>
            </Link>
        </div>
        )
    }
}

export default Navbar

// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="nav" variant="tabs">
//                 <h1>
//                     <Link to="/" className="linkElement">
//                         {/* <img src={logo} style={{ 'height': '5vh' }} /> */}
//                     </Link>
//                 </h1>
//                 <div className="navDiv">
//                     <ul className="ulElement">
//                         {!this.props.isAuthenticated
//                             ? <li className="liElement">
//                                 <div className="divElement">
//                                     SSO Sign-In
//                                 </div>
//                             </li>
//                             : null
//                         }
//                         <Link to="/" className="linkElement">
//                             <li className="liElement">
//                                 <div className="divElement">
//                                     메인
//                                 </div>
//                             </li>
//                         </Link>
//                         <Link to="/" className="linkElement">
//                             <li className="liElement">
//                                 <div className="divElement">
//                                     소개
//                                 </div>
//                             </li>
//                         </Link>
//                         <Link to="/dashboard/insights" className="linkElement">
//                             <li className="liElement">
//                                 <div className="divElement">
//                                     Dashboard
//                                 </div>
//                             </li>
//                         </Link>
//                         {!this.props.isAuthenticated
//                             ? <Link to="/auth" className="linkElement">
//                                 <li className="liElement">
//                                     <div className="divElement">
//                                     로그인
//                                 </div>
//                                 </li>
//                             </Link>
//                             :
//                             <Link to="/" className="linkElement" onClick={() => { store.dispatch({ type: "LOGOUT_SUCCESS" }) }}>
//                                 <li className="liElement">
//                                     <div className="divElement">
//                                         {this.props.user.name} - Logout
//                                     </div>
//                                 </li>
//                             </Link>
//                         }
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return ({
//         isAuthenticated: state.auth.isAuthenticated,
//         user: state.auth.user
//     })
// }

// export default connect(mapStateToProps, { ssosignin })(Navbar);