/**
 * Professional email template for freelance inquiry sender confirmation
 * Enhanced with modern design matching portfolio branding
 */
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

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Project Inquiry Received - Thank You</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        body { 
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background-color: #f3f4f6;
          -webkit-font-smoothing: antialiased;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%);
          padding: 40px 30px;
          text-align: center;
        }
        .header-icon {
          width: 64px;
          height: 64px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 32px;
        }
        .header-title {
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }
        .header-subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.95);
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .message {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .success-box {
          background: linear-gradient(135deg, #d1fae5 0%, #dbeafe 100%);
          border-left: 4px solid #10b981;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 30px;
        }
        .success-box strong {
          color: #065f46;
        }
        .summary-section {
          margin: 30px 0;
        }
        .summary-title {
          font-size: 16px;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e0e7ff;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .summary-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%);
          border: 1px solid #e0e7ff;
          border-radius: 8px;
          padding: 16px;
        }
        .summary-label {
          font-size: 11px;
          font-weight: 700;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .summary-value {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }
        .requirements-box {
          background-color: #f9fafb;
          border-left: 4px solid #7c3aed;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .requirements-title {
          font-size: 14px;
          font-weight: 700;
          color: #7c3aed;
          margin-bottom: 12px;
        }
        .requirements-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .next-steps {
          background: linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%);
          border-radius: 12px;
          padding: 24px;
          margin: 30px 0;
        }
        .next-steps-title {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .step-item {
          display: flex;
          margin-bottom: 16px;
          align-items: flex-start;
        }
        .step-number {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
          margin-right: 12px;
        }
        .step-content {
          flex: 1;
        }
        .step-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .step-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
        }
        .contact-info {
          background-color: #fff7ed;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
        }
        .contact-title {
          font-size: 15px;
          font-weight: 700;
          color: #92400e;
          margin-bottom: 12px;
        }
        .contact-details {
          font-size: 14px;
          color: #78350f;
        }
        .contact-details a {
          color: #0284c7;
          text-decoration: none;
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
          margin: 30px 0;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
        .signature-name {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-top: 8px;
        }
        .signature-title {
          font-size: 14px;
          color: #6b7280;
          margin-top: 4px;
        }
        .footer {
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          padding: 24px 30px;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 30px 20px;
          }
          .header {
            padding: 30px 20px;
          }
          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">✓</div>
          <h1 class="header-title">Thank You, ${name}!</h1>
          <p class="header-subtitle">Your project inquiry has been received and is being reviewed</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="greeting">Hello ${name},</div>
          
          <div class="success-box">
            <strong>Great news!</strong> I've received your inquiry for a <strong>${projectType}</strong> project. Thank you for providing detailed information about your requirements.
          </div>
          
          <div class="message">
            Your inquiry was submitted on <strong>${formatTimestamp(submittedAt)} IST</strong> and I'm excited to learn more about your project needs.
          </div>
          
          <div class="summary-section">
            <div class="summary-title">Your Project Summary</div>
            <div class="summary-grid">
              <div class="summary-card">
                <div class="summary-label">Project Type</div>
                <div class="summary-value">${projectType}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Budget Range</div>
                <div class="summary-value">${budget}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Timeline</div>
                <div class="summary-value">${timeline}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Company</div>
                <div class="summary-value">${companyName || 'Individual Client'}</div>
              </div>
            </div>
          </div>
          
          <div class="requirements-box">
            <div class="requirements-title">Project Requirements</div>
            <div class="requirements-text">${message}</div>
          </div>
          
          <div class="next-steps">
            <div class="next-steps-title">What Happens Next?</div>
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-title">Project Analysis</div>
                <div class="step-desc">I'll carefully review your requirements and assess the project scope within 24 hours.</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-title">Detailed Proposal</div>
                <div class="step-desc">You'll receive a comprehensive proposal with timeline, approach, and investment details.</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-title">Discovery Call</div>
                <div class="step-desc">We'll schedule a call to discuss your vision and clarify any questions.</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">✓</div>
              <div class="step-content">
                <div class="step-title">Project Kickoff</div>
                <div class="step-desc">Once everything is agreed upon, we'll begin bringing your project to life!</div>
              </div>
            </div>
          </div>
          
          <div class="contact-info">
            <div class="contact-title">Need to Reach Me?</div>
            <div class="contact-details">
              <strong>Email:</strong> <a href="mailto:rnikhilvignesh21@gmail.com">rnikhilvignesh21@gmail.com</a><br>
              <strong>Phone:</strong> <a href="tel:+918428754385">+91 84287 54385</a><br>
              <strong>Response Time:</strong> Within 24 hours during business days
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="signature">
            <div>Best regards,</div>
            <div class="signature-name">Nikhil Raghupathy</div>
            <div class="signature-title">DevOps Engineer | Azure & AWS Cloud Specialist</div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div>This is an automated confirmation email.</div>
          <div style="margin-top: 8px;">Please do not reply directly to this message. For questions, use the contact details provided above.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};
