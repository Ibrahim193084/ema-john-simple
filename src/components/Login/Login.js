import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {user,error,signInWithGoogle}=useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div>
                <h2>
                    Log in
                </h2>
                <form>
                    <input type="email" placeholder="Email"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>-------or-------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
                <br/>
                <button className="btn-regular">Github Sign In</button>
                <br/>
            </div>
        </div>
    );
};

export default Login;