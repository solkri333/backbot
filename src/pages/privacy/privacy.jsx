import React from "react";
import "./privacy.css"; // Import CSS for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> February 1, 2025</p>
      
      <p>
        This Privacy Policy explains how EverydayRead.tech collects, uses, and protects information when you visit the website.
      </p>

      <h2>1. Information Collected</h2>
      <p>
        EverydayRead.tech does not collect personal information such as names or contact details. However, non-personal data 
        may be collected to improve website functionality.
      </p>

      <h2>2. Non-Personal Information</h2>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Pages visited and time spent on the website</li>
        <li>Cookies and tracking data</li>
      </ul>

      <h2>3. Use of Information</h2>
      <p className="L">
        The collected data is used for:
      </p>
      <ul>
        <li>Enhancing website performance</li>
        <li>Analyzing visitor trends and website traffic</li>
        <li>Ensuring website security</li>
      </ul>

      <h2>4. Cookies and Tracking</h2>
      <p>
        EverydayRead.tech uses cookies to improve user experience. Visitors can disable cookies in browser settings, 
        but some website features may not function properly.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        The website may use third-party analytics tools, such as Google Analytics, to analyze traffic patterns. 
        These services operate under their own privacy policies.
      </p>

      <h2>6. Data Security</h2>
      <p>
        Security measures are in place to protect collected data, but no online transmission is entirely secure.
      </p>

      <h2>7. Privacy Policy Updates</h2>
      <p>
        This policy may be updated from time to time. Changes will be posted on this page with the latest effective date.
      </p>

      <h2>8. Contact</h2>
      <p>For any questions regarding this Privacy Policy, contact:</p>
      <p className="C"><strong>Email:</strong> stayforever3332@gmail.com</p>
      <p className="C"><strong>Website:</strong> <a href="https://everydayread.tech" target="_blank" rel="noopener noreferrer">everydayread.tech</a></p>

      <div className="E">
        <a href="https://g.ezoic.net/privacy/everydayread.tech">Ezoic Privacy Policy</a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
