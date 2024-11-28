import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../css/signin.css'
import { signup } from '../services/userservice'

export const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submitHandler = async (data) => {
        try {
            const response = await signup(data);
            console.log("Signin successful", response);
            // Add navigation or success handling here
        } catch (error) {
            console.error("Signin error", error);
            // Add error handling logic
        }
    }

    return (
        <div className="signin-container">
            <div className="signin-form-wrapper">
                <h2>Sign In to Your Account</h2>
                <form onSubmit={handleSubmit(submitHandler)} className="signin-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            {...register("password", { 
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="signin-btn">Sign In</button>

                    <a href="#" className="forgot-password">Forgot Password?</a>

                    <div className="signup-link">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}