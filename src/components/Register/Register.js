import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const {signInWithGoogle,setUser} = useAuth();
    const googleHandler = ()=>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            setUser(user)
        })
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
            <h2>
                Create Account
            </h2>
            <form>
                <input type="email" placeholder="Email"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <input type="password" placeholder="Re-enter-password"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <p>Already have an account?? <Link to="/login">Log in</Link></p>
            <div>-------or-------</div>
                <button onClick={googleHandler} className="btn-regular">Google Sign In</button>
        </div>
    </div>
    );
};

export default Register;