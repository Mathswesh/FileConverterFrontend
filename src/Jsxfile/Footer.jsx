import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div className='footer'>
            <footer class="bg-gray-800 text-white py-10">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold mb-3">About Us</h3>
                            <p class="text-gray-400 text-sm">We are committed to providing excellent services to Convert the file for your system so you can easily manage your work.</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
                            <ul class="text-gray-400 space-y-2">
                                <li><a href="#" class="hover:underline"><Link to='/home' className='nav-link'>Home</Link></a></li>
                                <li><a href="#" class="hover:underline"><Link to='/service' className='nav-link'>Service</Link></a></li>
                                <li><a href="#" class="hover:underline"><Link to='/developer' className='nav-link'>Contact us</Link></a></li>
                                <li><a href="#" class="hover:underline"><Link to='/privacyandpolicy' className='nav-link'>Privacy and Policy</Link></a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-3">Contact Us</h3>
                            <p class="text-gray-400 text-sm">We are Team A</p>
                            <p class="text-gray-400 text-sm">Email: mathswesh@gmail.com</p>
                            <p class="text-gray-400 text-sm">Phone: +9999999999</p>
                        </div>
                    </div>

                    <div class="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4">
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <p class="text-gray-400 text-sm mt-4 md:mt-0">&copy; 2024 Converter. All rights reserved.</p>
                    </div>
                </div>
            </footer>


        </div>
    )
}
