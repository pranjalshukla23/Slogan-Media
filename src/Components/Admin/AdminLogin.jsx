// import React, { useState } from 'react'
// import "./AdminLogin.css"
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Admin from './Admin';

// const AdminLogin = () => {

//     const [username, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const [sucess, setSucess] = useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(username==="romickkundu5555@gmail.com"){
//             if(password==="romick"){
//                 console.log("Successfully logged in")
//                 setSucess("Logged In")
//             }
//             else{
//                 console.log("Successfully not logged in")
//             }
//         }
//     }

//     return (
//         <div>
//             <div class=" flex-r Logincontainer">
//                 <div class="flex-r login-wrapper">
//                     <div class="login-text">
//                         <div class="logo">
//                             {/* <span><i class="fa fa-speakap"></i></span> */}
//                             <span><img src="img/logo.png" alt=""></img></span>
//                         </div>
//                         {/* <h1>Log In</h1> */}

//                         <form class="flex-c">
//                             <div class="input-box">
//                                 <span class="label">E-mail</span>
//                                 <div class=" flex-r input">
//                                     <input type="email" placeholder="Enter your email" onChange={e => setUserName(e.target.value)} value={username} required/>
//                                     <i class="fa fa-at"></i>
//                                 </div>
//                             </div>

//                             <div class="input-box">
//                                 <span class="label">Password</span>
//                                 <div class="flex-r input">
//                                     <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password} required/>
//                                     <i class="fa fa-lock"></i>
//                                 </div>
//                             </div>
//                             <Link to="/admin" ><button class="btn" type="submit" value="" onClick={handleSubmit}>Login into Admin Panel</button></Link>
//                         </form>

//                     </div>
//                 </div>
//             </div>

//                 {sucess && <Admin/>}
//         </div>
//     );
// }

// export default AdminLogin
