import React, { useState } from 'react'
import '../css/homepage.css'

export const Homepage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const fileConversionFeatures = [
        {
            icon: 'fa-file-pdf',
            title: 'PDF Conversion',
            description: 'Convert PDFs to various formats with high-quality preservation of original content.'
        },
        {
            icon: 'fa-image',
            title: 'Image Transformation',
            description: 'Resize, compress, and convert images between multiple formats quickly.'
        },
        {
            icon: 'fa-compress',
            title: 'File Compression',
            description: 'Reduce file sizes without losing quality, saving storage and bandwidth.'
        }
    ];

    return (
        <div className="homepage-container">
            <section className="hero-section">
                <div className="upload-section">
                    <div className="upload-header">
                        <h1>Upload, Convert, Transform</h1>
                        <p>Effortless file conversions with high-quality results</p>
                    </div>

                    <div className="file-upload-container">
                        <div className="file-upload-box">
                            <div className="file-upload-icon">
                                <i className="fa-solid fa-cloud-upload"></i>
                            </div>
                            
                            <input 
                                type="file" 
                                id="fileupload" 
                                className="file-input" 
                                onChange={handleFileChange}
                            />
                            
                            <label htmlFor="fileupload" className="file-upload-label">
                                {selectedFile 
                                    ? `Selected: ${selectedFile.name}` 
                                    : 'Drag & Drop or Click to Upload'}
                            </label>
                        </div>
                    </div>

                    <div className="upload-alternatives">
                        <p>Or upload from:</p>
                        <div className="platform-buttons">
                            <button className="platform-btn" title="Dropbox">
                                <i className="fa-brands fa-dropbox"></i>
                            </button>
                            <button className="platform-btn" title="Google Drive">
                                <i className="fa-brands fa-google-drive"></i>
                            </button>
                            <button className="platform-btn" title="Import via Link">
                                <i className="fa-solid fa-link"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="features-header">
                    <h2>What We Offer</h2>
                    <p>Advanced file conversion solutions tailored to your needs</p>
                </div>
                <div className="features-grid">
                    {fileConversionFeatures.map((feature, index) => (
                        <div key={index} className="feature-box">
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}