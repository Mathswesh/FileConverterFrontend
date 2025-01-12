import React from 'react'
import '../css/homepage.css'
import { useForm } from 'react-hook-form'
import { upload } from '../services/userservice'
import { Signin } from '../Jsxfile/Signin'
export const Homepage = () => {
    const { register, handleSubmit , formState :{ errors }} = useForm();
    const submitHandler = async (data) => {
        console.log(data)
        upload(data)
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
            <div className='page1'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray md:text-5xl lg:text-6xl dark:text-white">Put your file here.</h1>
                <div className='page1button'>
                    <form onSubmit={handleSubmit(submitHandler)}>
                    <label htmlFor="fileupload"><i class="fa-solid fa-plus"></i>Add file</label>
                    <input type="file" name="upload" id="fileupload" {...register("upload")} />
                    <button type="submit" class="signin-btn">Done</button>  
                    </form>
                </div>
                <div className="page1types">
                    <button><i class="fa-brands fa-dropbox"></i></button>
                    <button><i class="fa-brands fa-google-drive"></i></button>
                    <button><i class="fa-solid fa-link"></i></button>
                </div>
                <div class="card">
                    <div class="card-content">
                        <p class="card-title">Total file Converted
                        </p><p class="card-para">Ex : 112343434</p>
                    </div>
                </div>
            </div>
            <div className="page2">
                <div className="page2container1">
                    <h1>Features of our website.</h1>
                </div>
                <div className='page2container'>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>

                </div>
                <div className='page2container'>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>
                    <div className="box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis asperiores porro ad alias magni minima cumque distinctio doloremque ratione?</div>
                </div>
            </div>
        </div>
    )
}
