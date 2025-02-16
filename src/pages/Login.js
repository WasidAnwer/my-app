import "../css/login.css";
import modeva1 from "../img/marks.png";
function Login() {
    return (
        <div className="markup-login">
            <div className="content">
                <from>
                    <h4><i className="fa fa-user"></i> Please enter your login details.</h4>
                    <figure>
                        <img className="logo" src={modeva1} alt="" />
                    </figure>
                    <ul>
                        <li>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder="Username" name="username" />
                        </li>
                        <li>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="Password" name="password" />
                            <a href="/">Forgotten Password</a>
                        </li>
                    </ul>
                    <div className="markupButton">
                        <button type="button"><i className="fa fa-key"></i>Login</button>
                    </div>
                </from>
            </div>
        </div>
    );
}

export default Login;
