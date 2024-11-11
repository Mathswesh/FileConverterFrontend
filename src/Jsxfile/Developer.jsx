import React from 'react'
import Agnivesh from '../images/agnivesh.png'
import Ayush from '../images/ayush.png'
export const Developer = () => {
    return (
        <div className='flex justify-center items-center gap-10 bg-slate-700'>
            <div class="flex min-h-screen items-center justify-center">
                <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                    <img src={Ayush} alt="" /> 
                    <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">Ayush Patel</h2>
                    <p class="mb-4 text-gray-600 dark:text-gray-300">Frontend Developer</p>
                    <div class="flex items-center justify-center">
                        <a href="#" class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact</a>
                        <a href="#" class="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Portfolio</a>
                    </div>
                </div>
            </div>
            <div class="flex min-h-screen items-center justify-center">
                <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                    <img src={Agnivesh} alt="" />
                    <h2 class="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">Agnivesh Patel</h2>
                    <p class="mb-4 text-gray-600 dark:text-gray-300">Backend Developer</p>
                    <div class="flex items-center justify-center">
                        <a href="#" class="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact</a>
                        <a href="#" class="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
