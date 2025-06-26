// templates/freelanceSenderTemplate.js
export const createFreelanceSenderEmailTemplate = (data) => {
  const { 
    name, 
    email, 
    phone, 
    projectType, 
    budget, 
    timeline, 
    message, 
    companyName, 
    submittedAt 
  } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Thank You for Your Project Inquiry</title>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.5;
          color: #202124;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .email-container {
          max-width: 680px;
          margin: 32px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #34a853 0%, #137333 100%);
          padding: 40px 32px;
          text-align: center;
        }
        .header-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 28px;
          color: #ffffff;
        }
        .header-title {
          color: #ffffff;
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }
        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
        .content {
          padding: 32px;
        }
        .greeting {
          font-size: 20px;
          font-weight: 400;
          color: #202124;
          margin-bottom: 24px;
        }
        .section {
          margin-bottom: 32px;
        }
        .section:last-child {
          margin-bottom: 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e8eaed;
        }
        .section-title {
          font-size: 18px;
          font-weight: 500;
          color: #3c4043;
          margin: 0;
        }
        .section-content {
          font-size: 15px;
          line-height: 1.6;
          color: #5f6368;
        }
        .section-content p {
          margin: 0 0 16px 0;
        }
        .section-content p:last-child {
          margin-bottom: 0;
        }
        .section-content strong {
          color: #202124;
          font-weight: 500;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }
        .info-item {
          background-color: #f8f9fa;
          border: 1px solid #e8eaed;
          border-radius: 8px;
          padding: 16px;
        }
        .info-label {
          font-size: 12px;
          font-weight: 500;
          color: #5f6368;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }
        .info-value {
          font-size: 15px;
          color: #202124;
          font-weight: 400;
        }
        .message-container {
          background-color: #f8f9fa;
          border: 1px solid #e8eaed;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .message-text {
          font-size: 15px;
          line-height: 1.6;
          color: #3c4043;
          margin: 0;
          white-space: pre-wrap;
        }
        .timeline-section {
          background: linear-gradient(135deg, #1a73e8 0%, #1557b0 100%);
          color: #ffffff;
          border-radius: 12px;
          padding: 32px;
          margin: 32px 0;
        }
        .timeline-title {
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 24px 0;
          text-align: center;
        }
        .timeline-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
        }
        .timeline-step {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
          position: relative;
        }
        .step-number {
          width: 32px;
          height: 32px;
          background-color: #ffffff;
          color: #1a73e8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          margin: 0 auto 12px;
        }
        .step-title {
          font-weight: 500;
          margin-bottom: 6px;
          font-size: 16px;
        }
        .step-desc {
          font-size: 13px;
          opacity: 0.9;
          line-height: 1.4;
        }
        .contact-section {
          background-color: #fff3e0;
          border: 1px solid #ffcc02;
          border-left: 4px solid #ff9800;
          border-radius: 8px;
          padding: 24px;
          margin: 32px 0;
        }
        .contact-title {
          font-size: 18px;
          font-weight: 500;
          color: #e65100;
          margin: 0 0 16px 0;
        }
        .contact-intro {
          font-size: 15px;
          color: #bf360c;
          margin: 0 0 20px 0;
          line-height: 1.5;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
        }
        .contact-label {
          font-weight: 500;
          color: #e65100;
          min-width: 60px;
        }
        .contact-value a {
          color: #1a73e8;
          text-decoration: none;
        }
        .contact-value a:hover {
          text-decoration: underline;
        }
        .social-section {
          text-align: center;
          padding: 24px 0;
        }
        .social-title {
          font-size: 16px;
          font-weight: 500;
          color: #3c4043;
          margin: 0 0 16px 0;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background-color: #f8f9fa;
          color: #5f6368;
          text-decoration: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #e8eaed;
          transition: all 0.2s ease;
        }
        .social-link:hover {
          background-color: #1a73e8;
          color: #ffffff;
          border-color: #1a73e8;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 32px;
          border-top: 1px solid #e8eaed;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }
        .footer-section {
          text-align: center;
        }
        .footer-title {
          font-size: 16px;
          font-weight: 500;
          color: #3c4043;
          margin: 0 0 12px 0;
        }
        .footer-content {
          font-size: 14px;
          color: #5f6368;
          line-height: 1.5;
        }
        .disclaimer {
          text-align: center;
          font-size: 12px;
          color: #9aa0a6;
          padding-top: 24px;
          border-top: 1px solid #e8eaed;
          line-height: 1.4;
        }
        .divider {
          height: 1px;
          background-color: #e8eaed;
          margin: 32px 0;
        }
        @media (max-width: 640px) {
          .email-container {
            margin: 16px;
            border-radius: 0;
          }
          .header {
            padding: 32px 20px;
          }
          .header-title {
            font-size: 24px;
          }
          .content {
            padding: 24px 20px;
          }
          .timeline-section {
            padding: 24px 20px;
          }
          .timeline-steps {
            grid-template-columns: 1fr;
          }
          .contact-section {
            padding: 20px;
          }
          .social-links {
            flex-direction: column;
            align-items: center;
          }
          .social-link {
            width: 100%;
            justify-content: center;
          }
          .footer {
            padding: 24px 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="success-icon">✓</div>
            <h1 class="header-title">Thank You for Your Inquiry</h1>
            <p class="header-subtitle">Your project request has been successfully received</p>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">
            Hello ${name},
          </div>
          
          <div class="section">
            <div class="section-header">
              <h2 class="section-title">Confirmation</h2>
            </div>
            <div class="section-content">
              <p>Thank you for considering me for your <strong>${projectType}</strong> project. I'm excited about the opportunity to work with ${companyName && companyName !== 'Not specified' ? companyName : 'you'} and help bring your vision to life.</p>
              <p>Your inquiry was submitted on <strong>${submittedAt}</strong> and I have received all the details you provided.</p>
            </div>
          </div>
          
          <div class="section">
            <div class="section-header">
              <h2 class="section-title">Project Summary</h2>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Project Type</div>
                <div class="info-value">${projectType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${budget}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Timeline</div>
                <div class="info-value">${timeline}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${companyName || 'Individual Client'}</div>
              </div>
            </div>
            
            <div class="info-item" style="margin-top: 20px;">
              <div class="info-label">Project Requirements</div>
              <div class="message-container">
                <p class="message-text">${message}</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-section">
            <h2 class="timeline-title">What Happens Next?</h2>
            <div class="timeline-steps">
              <div class="timeline-step">
                <div class="step-number">1</div>
                <div class="step-title">Review</div>
                <div class="step-desc">I'll analyze your requirements and assess project feasibility</div>
              </div>
              <div class="timeline-step">
                <div class="step-number">2</div>
                <div class="step-title">Proposal</div>
                <div class="step-desc">Detailed proposal with timeline, approach, and investment</div>
              </div>
              <div class="timeline-step">
                <div class="step-number">3</div>
                <div class="step-title">Discussion</div>
                <div class="step-desc">Discovery call to refine requirements and approach</div>
              </div>
              <div class="timeline-step">
                <div class="step-number">4</div>
                <div class="step-title">Kickoff</div>
                <div class="step-desc">Project begins once all details are finalized</div>
              </div>
            </div>
          </div>
          
          <div class="contact-section">
            <h3 class="contact-title">Get in Touch</h3>
            <p class="contact-intro">If you have any questions, additional information to share, or need to discuss your project urgently, please don't hesitate to reach out:</p>
            <div class="contact-grid">
              <div class="contact-item">
                <span class="contact-label">Email:</span>
                <div class="contact-value">
                  <a href="mailto:${process.env.EMAIL || 'your.email@example.com'}">${process.env.EMAIL || 'your.email@example.com'}</a>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone:</span>
                <div class="contact-value">
                  <a href="tel:+918428754385">+91 84287 54385</a>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>
          
          <div class="social-section">
            <h3 class="social-title">Connect With Me</h3>
            <div class="social-links">
              <a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn Profile</a>
              <a href="https://github.com/yourprofile" class="social-link">GitHub Portfolio</a>
              <a href="https://yourportfolio.com" class="social-link">View Portfolio</a>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-grid">
            <div class="footer-section">
              <div class="footer-title">Response Time</div>
              <div class="footer-content">
                I typically respond to all inquiries within 24 hours during business days. Urgent projects may receive faster response times.
              </div>
            </div>
            
            <div class="footer-section">
              <div class="footer-title">Availability</div>
              <div class="footer-content">
                <strong>Weekdays:</strong> 7:00 PM - 11:00 PM IST<br>
                <strong>Weekends:</strong> 10:00 AM - 7:00 PM IST
              </div>
            </div>
          </div>
          
          <div class="disclaimer">
            This is an automated confirmation email. Please do not reply directly to this message.<br>
            For any questions or additional information, please use the contact details provided above.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};