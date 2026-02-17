/**
 * Professional email template for freelance inquiry sender confirmation
 * Clean, professional design optimized for email clients
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
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          background-color: #0284c7;
          padding: 40px 30px;
          text-align: center;
        }
        .header-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
        }
        .header-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.95);
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 16px;
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
          background-color: #f0fdf4;
          border-left: 3px solid #10b981;
          border-radius: 4px;
          padding: 16px;
          margin-bottom: 30px;
        }
        .success-box strong {
          color: #065f46;
        }
        .summary-section {
          margin: 30px 0;
        }
        .summary-title {
          font-size: 14px;
          font-weight: 600;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e5e7eb;
        }
        .summary-grid {
          display: table;
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 8px;
        }
        .summary-row {
          display: table-row;
        }
        .summary-cell {
          display: table-cell;
          padding: 12px;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          vertical-align: top;
        }
        .summary-cell:first-child {
          width: 50%;
          padding-right: 8px;
        }
        .summary-cell:last-child {
          width: 50%;
          padding-left: 8px;
        }
        .summary-label {
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .summary-value {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }
        .requirements-box {
          background-color: #f9fafb;
          border-left: 3px solid #7c3aed;
          border-radius: 4px;
          padding: 16px;
          margin: 20px 0;
        }
        .requirements-title {
          font-size: 13px;
          font-weight: 600;
          color: #7c3aed;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .requirements-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.7;
          white-space: pre-wrap;
          margin: 0;
        }
        .next-steps {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 24px;
          margin: 30px 0;
        }
        .next-steps-title {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .step-item {
          margin-bottom: 16px;
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
        }
        .step-item:last-child {
          margin-bottom: 0;
        }
        .step-number {
          font-weight: 600;
          color: #0284c7;
        }
        .divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 30px 0;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 15px;
          color: #1f2937;
        }
        .signature-name {
          font-weight: 600;
          margin-top: 8px;
        }
        .footer {
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          padding: 20px 30px;
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
          .summary-cell {
            display: block;
            width: 100% !important;
            padding: 12px !important;
            margin-bottom: 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
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
            <table class="summary-grid">
              <tr class="summary-row">
                <td class="summary-cell">
                  <div class="summary-label">Project Type</div>
                  <div class="summary-value">${projectType}</div>
                </td>
                <td class="summary-cell">
                  <div class="summary-label">Budget Range</div>
                  <div class="summary-value">${budget}</div>
                </td>
              </tr>
              <tr class="summary-row">
                <td class="summary-cell">
                  <div class="summary-label">Timeline</div>
                  <div class="summary-value">${timeline}</div>
                </td>
                <td class="summary-cell">
                  <div class="summary-label">Company</div>
                  <div class="summary-value">${companyName || 'Individual Client'}</div>
                </td>
              </tr>
            </table>
          </div>
          
          <div class="requirements-box">
            <div class="requirements-title">Project Requirements</div>
            <div class="requirements-text">${message}</div>
          </div>
          
          <div class="next-steps">
            <div class="next-steps-title">What Happens Next?</div>
            <div class="step-item">
              <span class="step-number">1.</span> I'll carefully review your requirements and assess the project scope within 24 hours.
            </div>
            <div class="step-item">
              <span class="step-number">2.</span> You'll receive a comprehensive proposal with timeline, approach, and investment details.
            </div>
            <div class="step-item">
              <span class="step-number">3.</span> We'll schedule a call to discuss your vision and clarify any questions.
            </div>
          </div>
          
          <div class="message">
            If you have additional information or urgent questions, feel free to contact me directly at <a href="mailto:rnikhilvignesh21@gmail.com" style="color: #0284c7;">rnikhilvignesh21@gmail.com</a> or <a href="tel:+918428754385" style="color: #0284c7;">+91 84287 54385</a>.
          </div>
          
          <div class="divider"></div>
          
          <div class="signature">
            Best regards,<br>
            <span class="signature-name">Nikhil Raghupathy</span>
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
