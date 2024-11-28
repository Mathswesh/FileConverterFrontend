import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../css/signup.css'
import { signup } from '../services/userservice'

export const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const submitHandler = async (data) => {
        try {
            const response = await signup(data);
            console.log("Signup successful", response);
            // Add navigation or success handling here
        } catch (error) {
            console.error("Signup error", error);
            // Add error handling logic
        }
    }

    const password = watch("password");

    return (
        <div className="signup-container">
            <div className="signup-form-wrapper">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit(submitHandler)} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input 
                            type="text" 
                            id="firstname" 
                            {...register("firstname", { 
                                required: "First name is required",
                                minLength: {
                                    value: 2,
                                    message: "First name must be at least 2 characters"
                                }
                            })}
                        />
                        {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input 
                            type="text" 
                            id="lastname" 
                            {...register("lastname", { 
                                required: "Last name is required",
                                minLength: {
                                    value: 2,
                                    message: "Last name must be at least 2 characters"
                                }
                            })}
                        />
                        {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
                    </div>

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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            {...register("confirmPassword", { 
                                validate: (value) => 
                                    value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                    </div>

                    <button type="submit" className="signup-btn">Signup</button>

                    <div className="login-link">
                        Already have an account? <Link to="/signin">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}