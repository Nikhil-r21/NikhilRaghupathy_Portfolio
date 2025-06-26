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

  // Format timestamp to IST railway format (24-hour)
  const formatToIST = (timestamp) => {
    const date = new Date(timestamp);
    const istOptions = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    
    const formatted = date.toLocaleString('en-IN', istOptions);
    return formatted.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2})/, '$3-$2-$1 at $4 hrs IST');
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Project Inquiry Received</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.5;
          color: #323130;
          background-color: #faf9f8;
          margin: 0;
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
        }
        
        .header {
          padding: 32px;
          border-bottom: 1px solid #e1dfdd;
          background-color: #ffffff;
          text-align: center;
        }
        
        .success-icon {
          width: 48px;
          height: 48px;
          background-color: #107c10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #ffffff;
          font-size: 24px;
          font-weight: bold;
        }
        
        .header h1 {
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: 600;
          color: #323130;
        }
        
        .header p {
          margin: 0;
          font-size: 14px;
          color: #605e5c;
        }
        
        .content {
          padding: 32px;
        }
        
        .greeting {
          font-size: 16px;
          color: #323130;
          margin-bottom: 24px;
        }
        
        .section {
          margin-bottom: 32px;
        }
        
        .section:last-child {
          margin-bottom: 0;
        }
        
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #f3f2f1;
        }
        
        .section-content {
          font-size: 14px;
          color: #323130;
          line-height: 1.6;
        }
        
        .section-content p {
          margin: 0 0 16px 0;
        }
        
        .section-content p:last-child {
          margin-bottom: 0;
        }
        
        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
          margin-top: 16px;
        }
        
        .field {
          display: flex;
          flex-direction: column;
        }
        
        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: #605e5c;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .field-value {
          font-size: 14px;
          color: #323130;
        }
        
        .full-width {
          grid-column: 1 / -1;
        }
        
        .message-box {
          background-color: #f8f7f6;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
          padding: 16px;
          margin-top: 8px;
        }
        
        .message-text {
          font-size: 14px;
          color: #323130;
          margin: 0;
          white-space: pre-wrap;
          line-height: 1.5;
        }
        
        .next-steps {
          background-color: #f3f2f1;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .next-steps-title {
          font-size: 16px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 16px 0;
        }
        
        .steps-list {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: step-counter;
        }
        
        .steps-list li {
          position: relative;
          padding: 12px 0 12px 40px;
          counter-increment: step-counter;
          border-bottom: 1px solid #e8e6e4;
        }
        
        .steps-list li:last-child {
          border-bottom: none;
        }
        
        .steps-list li::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 12px;
          width: 24px;
          height: 24px;
          background-color: #0078d4;
          color: white;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .step-title {
          font-weight: 600;
          color: #323130;
          margin-bottom: 4px;
        }
        
        .step-desc {
          font-size: 13px;
          color: #605e5c;
          line-height: 1.4;
        }
        
        .contact-info {
          background-color: #fff4ce;
          border: 1px solid #fde047;
          border-left: 4px solid #eab308;
          border-radius: 4px;
          padding: 20px;
          margin: 24px 0;
        }
        
        .contact-title {
          font-size: 14px;
          font-weight: 600;
          color: #92400e;
          margin: 0 0 12px 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .contact-item {
          font-size: 14px;
          color: #92400e;
        }
        
        .contact-item a {
          color: #0078d4;
          text-decoration: none;
        }
        
        .contact-item a:hover {
          text-decoration: underline;
        }
        
        .availability {
          background-color: #f8f7f6;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
          padding: 20px;
          text-align: center;
        }
        
        .availability-title {
          font-size: 14px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 12px 0;
        }
        
        .availability-content {
          font-size: 13px;
          color: #605e5c;
          line-height: 1.4;
        }
        
        .footer {
          padding: 24px 32px;
          background-color: #f8f7f6;
          border-top: 1px solid #e1dfdd;
          text-align: center;
        }
        
        .footer-text {
          font-size: 12px;
          color: #605e5c;
          margin: 0;
          line-height: 1.4;
        }
        
        .timestamp {
          color: #605e5c;
          font-size: 12px;
        }
        
        @media (max-width: 640px) {
          body {
            padding: 8px;
          }
          
          .container {
            border-radius: 0;
            border-left: none;
            border-right: none;
          }
          
          .header, .content, .footer {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .field-grid, .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .steps-list li {
            padding-left: 32px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="success-icon">✓</div>
          <h1>Thank You for Your Inquiry</h1>
          <p>Your project request has been received and is being reviewed</p>
        </div>
        
        <div class="content">
          <div class="greeting">
            Dear ${name},
          </div>
          
          <div class="section">
            <h2 class="section-title">Confirmation</h2>
            <div class="section-content">
              <p>Thank you for considering me for your <strong>${projectType}</strong> project. I appreciate you taking the time to provide detailed information about your requirements.</p>
              <p>Your inquiry was received on <strong class="timestamp">${formatToIST(submittedAt)}</strong> and I will review all the details you have provided.</p>
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">Project Summary</h2>
            <div class="field-grid">
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectType}</div>
              </div>
              <div class="field">
                <div class="field-label">Timeline</div>
                <div class="field-value">${timeline}</div>
              </div>
              <div class="field">
                <div class="field-label">Budget Range</div>
                <div class="field-value">${budget}</div>
              </div>
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${companyName || 'Individual Client'}</div>
              </div>
              <div class="field full-width">
                <div class="field-label">Requirements</div>
                <div class="message-box">
                  <p class="message-text">${message}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="next-steps">
            <h3 class="next-steps-title">Next Steps</h3>
            <ol class="steps-list">
              <li>
                <div class="step-title">Project Review</div>
                <div class="step-desc">I will analyze your requirements and assess project feasibility</div>
              </li>
              <li>
                <div class="step-title">Proposal Preparation</div>
                <div class="step-desc">Detailed proposal with timeline, approach, and investment will be prepared</div>
              </li>
              <li>
                <div class="step-title">Initial Discussion</div>
                <div class="step-desc">Schedule a call to discuss your requirements in detail</div>
              </li>
              <li>
                <div class="step-title">Project Kickoff</div>
                <div class="step-desc">Begin work once all details are agreed upon</div>
              </li>
            </ol>
          </div>
          
          <div class="contact-info">
            <h3 class="contact-title">Need to Reach Me?</h3>
            <p style="margin: 0 0 12px 0; font-size: 13px; color: #92400e;">If you have additional information or urgent questions, please contact me directly:</p>
            <div class="contact-grid">
              <div class="contact-item">
                <strong>Email:</strong> <a href="mailto:${process.env.EMAIL || 'your.email@example.com'}">${process.env.EMAIL || 'your.email@example.com'}</a>
              </div>
              <div class="contact-item">
                <strong>Phone:</strong> <a href="tel:+918428754385">+91 84287 54385</a>
              </div>
            </div>
          </div>
          
          <div class="availability">
            <h3 class="availability-title">Response Timeline</h3>
            <div class="availability-content">
              <strong>Standard Response:</strong> Within 24 hours during business days<br>
              <strong>Business Hours:</strong> 19:00 - 23:00 hrs IST (Weekdays) | 10:00 - 19:00 hrs IST (Weekends)
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            This is an automated confirmation email. Please do not reply directly to this message.<br>
            For questions or additional information, please use the contact details provided above.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};