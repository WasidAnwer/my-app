import React from 'react';
import "../css/signup.css";
import modeva1 from "../img/marks.jpg";
function SignUp() {
    return (
        <>
            <div className="signup">
                <div className="sign-content">
                    <form>
                        <h4><i className="fa fa-user"></i>Please Enter Your Signup Details</h4>
                        <figure>
                            <img className="logo" src={modeva1} alt="" />
                        </figure>
                        <ul>
                            <li className='li1'>
                                <label htmlFor="">Enter Your Name</label>
                                <input type="text" placeholder="Name" name="name" />
                            </li>
                            <li className='li2'>
                                <label htmlFor="">Enter Your Email</label>
                                <input type="email" placeholder="Email" name="email" />
                            </li>
                            {/* <li>
                                <label htmlFor="">Enter Your State</label>
                                <input type="state" placeholder="State" name="state" />
                            </li>
                            <li>
                                <label htmlFor="">Enter Your City</label>
                                <input type="city" placeholder="City" name="city" />
                            </li> */}
                            <li className='li3'>
                                <label htmlFor="">Enter Your Password</label>
                                <input type="password" placeholder="Password" name="password" />
                            </li>
                            <li className='li4'>
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                            </li>
                        </ul>
                        <button type="submit" class="signup-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default SignUp;