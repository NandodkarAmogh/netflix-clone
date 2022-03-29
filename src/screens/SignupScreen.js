import React , { useState } from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';
import { useForm } from 'react-hook-form';

function SignupScreen() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [error, setError] = useState(null)

    const registerUser = (data) => {
    //    e.preventDefault();
       
       auth.createUserWithEmailAndPassword(
           data.email,
           data.password
           ).then( (authUser) => {
               console.log(authUser)
            })
            .catch(error => {
                console.log(error.message)
            });
        };
        
        const signIn = (data) => {
        auth.signInWithEmailAndPassword (
            data.email,
           data.password
        ).then( (authUser) => {
            console.log(authUser)
        }).catch(error => {
            console.log(error.message)
            setError("Sorry, we can't find an account with this email address. Please try again or ")
            setTimeout(() => setError(null), 5000)
        });
    };
    return (
        <div className='signupScreen'>
            <form onSubmit={handleSubmit(signIn)}>
                <h1>Sign In</h1>
                {error && <h6 className='error'>{error} <span className='signupScreen__link' onClick={handleSubmit(registerUser)}>create a new account.</span></h6>}
                <input
                     className={ errors.email ? 'signupScreenInput inputError' : 'signupScreenInput'}  
                    type="email" 
                    placeholder='Email' 
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                    })}
                />
                {errors.email && <p className='error'>Please enter a valid email address.</p>}
                <input
                    className={ errors.password ? 'signupScreenInput inputError' : 'signupScreenInput'}  
                    type="password" 
                    placeholder='Password'
                    {...register("password", {
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
                    })} 
                />
                {errors.password && <p className='error'>Password should contain uppercase and lowercase letters, digits from 0 to 9 and special characters</p>}
                <button type='submit' >Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link' onClick={handleSubmit(registerUser)}> Sign Up now.</span>
                    </h4>
            </form>
        </div>
    )
}
export default SignupScreen
