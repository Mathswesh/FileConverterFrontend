import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../css/signin.css'
import { signup } from '../services/userservice'

export const Signin = () => {
    const { register, handleSubmit , formState :{ errors }} = useForm();
    const submitHandler = async (data) => {
        console.log(data)
        signup(data)
        .then((resp)=>{
            console.log(resp)
            console.log("Done it is.")
        })
        .catch((errors)=>{
            console.log("error")
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div class="form-group">
                    <label for="username">Name:</label>
                    <input type='text' id="email" name="name" required {...register("firstname")}/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required {...register("email")}/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required {...register("password")}/>
                </div>
                <button type="submit" class="signin-btn">Signin</button>
                <a href="#" class="forgot-password">Forgot Password?</a>
            </form>
        </div>
    )
}
