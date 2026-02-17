/**
 * Professional email template for freelance inquiry sender confirmation
 * AWS/Azure style - clean, minimal, professional
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
      <style>
        body { 
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #232f3e;
          background-color: #ffffff;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          padding: 40px 30px 30px 30px;
          border-bottom: 1px solid #eaeded;
        }
        .header-title {
          font-size: 20px;
          font-weight: 400;
          color: #232f3e;
          margin: 0;
        }
        .content {
          padding: 30px;
        }
        .greeting {
          font-size: 15px;
          color: #232f3e;
          margin-bottom: 20px;
        }
        .message {
          font-size: 14px;
          color: #545b64;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .summary-section {
          margin: 28px 0;
        }
        .summary-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .summary-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .summary-row {
          border-bottom: 1px solid #eaeded;
        }
        .summary-row:last-child {
          border-bottom: none;
        }
        .summary-label {
          padding: 10px 0;
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          width: 140px;
          vertical-align: top;
        }
        .summary-value {
          padding: 10px 0;
          font-size: 14px;
          color: #545b64;
          vertical-align: top;
        }
        .requirements-section {
          margin: 28px 0;
        }
        .requirements-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .requirements-text {
          font-size: 14px;
          color: #545b64;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .next-steps {
          margin: 28px 0;
        }
        .next-steps-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .step-item {
          margin-bottom: 12px;
          font-size: 14px;
          color: #545b64;
          line-height: 1.6;
          padding-left: 20px;
        }
        .step-item:last-child {
          margin-bottom: 0;
        }
        .divider {
          height: 1px;
          background-color: #eaeded;
          margin: 30px 0;
        }
        .signature {
          margin-top: 30px;
          font-size: 14px;
          color: #232f3e;
        }
        .signature-name {
          font-weight: 600;
          margin-top: 8px;
        }
        .footer {
          border-top: 1px solid #eaeded;
          padding: 20px 30px;
          font-size: 12px;
          color: #879196;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 30px 20px 24px 20px;
          }
          .summary-label {
            width: 100px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <h1 class="header-title">Thank You, ${name}</h1>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${name},</div>
          
          <div class="message">
            Thank you for your inquiry regarding a ${projectType} project. I have received your submission and will review it carefully. I typically respond within 24 hours during business days.
          </div>
          
          <div class="summary-section">
            <div class="summary-title">Project Summary</div>
            <table class="summary-table">
              <tr class="summary-row">
                <td class="summary-label">Project Type:</td>
                <td class="summary-value">${projectType}</td>
              </tr>
              <tr class="summary-row">
                <td class="summary-label">Budget Range:</td>
                <td class="summary-value">${budget}</td>
              </tr>
              <tr class="summary-row">
                <td class="summary-label">Timeline:</td>
                <td class="summary-value">${timeline}</td>
              </tr>
              <tr class="summary-row">
                <td class="summary-label">Company:</td>
                <td class="summary-value">${companyName || 'Individual Client'}</td>
              </tr>
              <tr class="summary-row">
                <td class="summary-label">Submitted:</td>
                <td class="summary-value">${formatTimestamp(submittedAt)} IST</td>
              </tr>
            </table>
          </div>
          
          <div class="requirements-section">
            <div class="requirements-title">Project Requirements</div>
            <div class="requirements-text">${message}</div>
          </div>
          
          <div class="next-steps">
            <div class="next-steps-title">What Happens Next</div>
            <div class="step-item">I'll carefully review your requirements and assess the project scope within 24 hours.</div>
            <div class="step-item">You'll receive a comprehensive proposal with timeline, approach, and investment details.</div>
            <div class="step-item">We'll schedule a call to discuss your vision and clarify any questions.</div>
          </div>
          
          <div class="message">
            If you have additional information or questions, feel free to contact me directly at <a href="mailto:rnikhilvignesh21@gmail.com" style="color: #0073bb;">rnikhilvignesh21@gmail.com</a>.
          </div>
          
          <div class="divider"></div>
          
          <div class="signature">
            Best regards,<br>
            <span class="signature-name">Nikhil Raghupathy</span>
          </div>
        </div>
        
        <div class="footer">
          <div>This is an automated confirmation email.</div>
          <div style="margin-top: 4px;">Please do not reply directly to this message. For questions, use the contact details provided above.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};
