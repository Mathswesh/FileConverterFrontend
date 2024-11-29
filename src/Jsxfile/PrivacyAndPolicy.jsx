import React from 'react'
import '../css/privacyandpolicy.css'

export const PrivacyAndPolicy = () => {
    return (
        <div className="privacy-policy-wrapper">
            <div className="privacy-policy-container">
                <div className="privacy-header">
                    <h1>Privacy and Policy</h1>
                    <p>Last Updated: November 2024</p>
                </div>

                <section className="privacy-section">
                    <h2>1. Information We Collect</h2>
                    <p>At Converter, we are committed to protecting your privacy. We collect minimal information necessary to provide our file conversion services:</p>
                    <ul>
                        <li>Files you upload for conversion</li>
                        <li>Basic usage statistics</li>
                        <li>Optional contact information if you choose to provide it</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information collected to:</p>
                    <ul>
                        <li>Process and complete file conversions</li>
                        <li>Improve our service</li>
                        <li>Respond to customer support inquiries</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. Data Protection</h2>
                    <p>We implement industry-standard security measures to protect your data:</p>
                    <ul>
                        <li>Encryption of file transfers</li>
                        <li>Temporary storage of uploaded files</li>
                        <li>Automatic deletion of files after conversion</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. File Handling</h2>
                    <p>We are committed to the secure and responsible handling of your files:</p>
                    <ul>
                        <li>Files are deleted immediately after conversion</li>
                        <li>We do not store or share your files</li>
                        <li>No personal information is collected without consent</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>5. User Consent</h2>
                    <p>By using our service, you consent to our privacy policy. You can choose to:</p>
                    <ul>
                        <li>Not upload sensitive files</li>
                        <li>Opt-out of usage statistics</li>
                        <li>Contact us with any privacy concerns</li>
                    </ul>
                </section>

                <section className="privacy-section contact-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions about our privacy policy, please contact us at:</p>
                    <p>Email: mathswesh@gmail.com</p>
                    <p>We are committed to addressing your privacy concerns promptly and transparently.</p>
                </section>
            </div>
        </div>
    )
}