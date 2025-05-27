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
        :root {
          color-scheme: light;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5;
          color: #252525;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .wrapper {
          max-width: 640px;
          margin: 0 auto;
          padding: 16px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .header {
          background-color: #107C10;
          padding: 24px;
          text-align: center;
        }
        .header-icon {
          font-size: 48px;
          line-height: 1;
          margin-bottom: 16px;
        }
        .header-title {
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }
        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin: 8px 0 0 0;
        }
        .content {
          padding: 24px;
        }
        .greeting {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .section {
          margin-bottom: 24px;
          background-color: #F9F9F9;
          border-radius: 6px;
          padding: 16px;
          border-left: 4px solid #107C10;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #107C10;
          margin: 0 0 16px 0;
        }
        .section-content {
          font-size: 15px;
          color: #252525;
        }
        .details-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 16px -8px 0;
        }
        .details-col {
          flex: 1 0 calc(50% - 16px);
          margin: 0 8px 16px;
          min-width: 200px;
          background-color: white;
          border-radius: 4px;
          padding: 12px;
          border: 1px solid #E1E1E1;
        }
        .details-label {
          font-size: 12px;
          font-weight: 500;
          color: #505A64;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .details-value {
          font-size: 15px;
          color: #252525;
        }
        .timeline-section {
          background-color: #0078D4;
          color: white;
          border-radius: 6px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .timeline-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 16px 0;
          text-align: center;
        }
        .timeline-steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          counter-reset: step;
        }
        .timeline-step {
          flex: 1 0 calc(25% - 16px);
          min-width: 110px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 12px;
          margin: 8px;
          position: relative;
        }
        .timeline-step::before {
          counter-increment: step;
          content: counter(step);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background-color: white;
          color: #0078D4;
          border-radius: 50%;
          font-weight: 600;
          font-size: 14px;
          margin: 0 auto 8px;
        }
        .step-title {
          font-weight: 600;
          margin-bottom: 4px;
          text-align: center;
          font-size: 14px;
        }
        .step-desc {
          font-size: 12px;
          opacity: 0.9;
          text-align: center;
        }
        .contact-section {
          background-color: #FFF4CE;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 24px;
          border-left: 4px solid #FFB900;
        }
        .contact-title {
          font-size: 16px;
          font-weight: 600;
          color: #805B10;
          margin: 0 0 12px 0;
        }
        .contact-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .contact-item {
          flex: 1 0 calc(50% - 16px);
          min-width: 200px;
          margin: 0 8px 8px;
          font-size: 14px;
        }
        .contact-label {
          font-weight: 600;
          color: #805B10;
          display: inline-block;
          min-width: 60px;
        }
        .social-links {
          text-align: center;
          margin: 24px 0;
        }
        .social-link {
          display: inline-block;
          padding: 8px 16px;
          background-color: #F0F0F0;
          color: #505A64;
          text-decoration: none;
          border-radius: 4px;
          margin: 0 4px 8px;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s, color 0.2s;
        }
        .social-link:hover {
          background-color: #0078D4;
          color: white;
        }
        .footer {
          background-color: #F9F9F9;
          padding: 24px;
          text-align: center;
          color: #505A64;
          font-size: 13px;
          border-top: 1px solid #E1E1E1;
        }
        .footer-section {
          margin-bottom: 16px;
        }
        .footer-title {
          font-weight: 600;
          margin-bottom: 8px;
        }
        .disclaimer {
          margin-top: 16px;
          font-size: 12px;
          color: #767676;
          padding-top: 16px;
          border-top: 1px solid #E1E1E1;
        }
        @media (max-width: 600px) {
          .details-col, .timeline-step, .contact-item {
            flex: 1 0 100%;
          }
          .social-link {
            display: block;
            margin: 0 0 12px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="header-icon">✓</div>
            <h1 class="header-title">Thank You for Your Inquiry</h1>
            <p class="header-subtitle">Your project request has been received</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Hello ${name},
            </div>
            
            <div class="section">
              <h2 class="section-title">Your Inquiry Has Been Received</h2>
              <div class="section-content">
                <p>Thank you for considering me for your <strong>${projectType}</strong> project. I'm excited about the opportunity to work with ${companyName !== 'Not specified' ? companyName : 'you'} and help bring your vision to life.</p>
                <p><strong>Submission Time:</strong> ${submittedAt}</p>
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">Project Summary</h2>
              <div class="details-grid">
                <div class="details-col">
                  <div class="details-label">Project Type</div>
                  <div class="details-value">${projectType}</div>
                </div>
                <div class="details-col">
                  <div class="details-label">Budget Range</div>
                  <div class="details-value">${budget}</div>
                </div>
                <div class="details-col">
                  <div class="details-label">Timeline</div>
                  <div class="details-value">${timeline}</div>
                </div>
                <div class="details-col">
                  <div class="details-label">Company</div>
                  <div class="details-value">${companyName}</div>
                </div>
              </div>
              
              <div style="margin-top: 16px; background-color: white; border-radius: 4px; padding: 16px; border: 1px solid #E1E1E1;">
                <div class="details-label">Project Requirements</div>
                <div style="margin-top: 8px; font-size: 14px; line-height: 1.6; color: #252525;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="timeline-section">
              <h2 class="timeline-title">What Happens Next?</h2>
              <div class="timeline-steps">
                <div class="timeline-step">
                  <div class="step-title">Review</div>
                  <div class="step-desc">I'll analyze your requirements thoroughly</div>
                </div>
                <div class="timeline-step">
                  <div class="step-title">Proposal</div>
                  <div class="step-desc">Detailed proposal with timeline & costs</div>
                </div>
                <div class="timeline-step">
                  <div class="step-title">Discussion</div>
                  <div class="step-desc">Call to refine the approach</div>
                </div>
                <div class="timeline-step">
                  <div class="step-title">Start</div>
                  <div class="step-desc">Begin work once details are agreed</div>
                </div>
              </div>
            </div>
            
            <div class="contact-section">
              <h3 class="contact-title">Need to Reach Me?</h3>
              <p style="margin-top: 0; color: #805B10; font-size: 14px;">If you have any questions or additional information to share, feel free to contact me directly:</p>
              <div class="contact-grid">
                <div class="contact-item">
                  <span class="contact-label">Email:</span> 
                  <a href="mailto:${process.env.EMAIL || 'your.email@example.com'}" style="color: #0078D4; text-decoration: none;">${process.env.EMAIL || 'your.email@example.com'}</a>
                </div>
                <div class="contact-item">
                  <span class="contact-label">Phone:</span> 
                  <a href="tel:+918428754385" style="color: #0078D4; text-decoration: none;">+91 84287 54385</a>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
              <a href="https://github.com/yourprofile" class="social-link">GitHub</a>
              <a href="https://yourportfolio.com" class="social-link">Portfolio</a>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-section">
              <div class="footer-title">Response Time</div>
              <p>I typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <div class="footer-section">
              <div class="footer-title">Business Hours</div>
              <p>Monday - Friday: 7:00 PM - 11:00 PM IST<br>
              Saturday & Sunday: 10:00 AM - 7:00 PM IST</p>
            </div>
            
            <div class="disclaimer">
              This is an automated confirmation email. Please do not reply to this email address.<br>
              For any questions, please use the contact information provided above.
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};