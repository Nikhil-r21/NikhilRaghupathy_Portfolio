/**
 * Professional email template for contact form sender confirmation
 * Enhanced with modern design matching portfolio branding
 */
export const createSenderEmailTemplate = (formData) => {
  const timestamp = new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Message Received - Thank You</title>
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
          -moz-osx-font-smoothing: grayscale;
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
        .header-logo {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .header-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }
        .header-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 8px;
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
        .summary-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%);
          border: 1px solid #e0e7ff;
          border-radius: 12px;
          padding: 24px;
          margin: 30px 0;
        }
        .summary-title {
          font-size: 14px;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .summary-item {
          display: flex;
          margin-bottom: 12px;
          font-size: 14px;
        }
        .summary-item:last-child {
          margin-bottom: 0;
        }
        .summary-label {
          font-weight: 600;
          color: #6b7280;
          min-width: 100px;
          margin-right: 12px;
        }
        .summary-value {
          color: #1f2937;
          flex: 1;
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
          margin: 30px 0;
        }
        .cta-section {
          background-color: #f9fafb;
          border-radius: 12px;
          padding: 24px;
          margin: 30px 0;
          text-align: center;
        }
        .cta-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-button {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          color: #ffffff !important;
        }
        .cta-button.linkedin {
          background-color: #0077b5;
        }
        .cta-button.github {
          background-color: #24292e;
        }
        .cta-button.portfolio {
          background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%);
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
        .footer-notice {
          margin-bottom: 8px;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 30px 20px;
          }
          .header {
            padding: 30px 20px;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .cta-button {
            width: 100%;
            text-align: center;
          }
          .summary-item {
            flex-direction: column;
          }
          .summary-label {
            margin-bottom: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <div class="header-logo">NR</div>
          <h1 class="header-title">Message Received</h1>
          <p class="header-subtitle">Your inquiry has been successfully submitted</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="greeting">Hello ${formData.name},</div>
          
          <div class="message">
            Thank you for reaching out through my portfolio website. I have received your message and will review it carefully. I typically respond within <strong>24 hours</strong> during business days.
          </div>
          
          <div class="summary-box">
            <div class="summary-title">Submission Details</div>
            <div class="summary-item">
              <div class="summary-label">Subject:</div>
              <div class="summary-value">${formData.subject}</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Submitted:</div>
              <div class="summary-value">${timestamp} IST</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Reference:</div>
              <div class="summary-value">CF-${Date.now().toString().slice(-6)}</div>
            </div>
          </div>
          
          <div class="message">
            While you wait for my response, feel free to explore my work or connect with me through my professional networks.
          </div>
          
          <div class="divider"></div>
          
          <div class="cta-section">
            <div class="cta-title">Connect With Me</div>
            <div class="cta-buttons">
              <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="cta-button linkedin" target="_blank">LinkedIn</a>
              <a href="https://github.com/Nikhil-r21" class="cta-button github" target="_blank">GitHub</a>
              <a href="https://nikhilraghupathy.vercel.app" class="cta-button portfolio" target="_blank">Portfolio</a>
            </div>
          </div>
          
          <div class="signature">
            <div>Best regards,</div>
            <div class="signature-name">Nikhil Raghupathy</div>
            <div class="signature-title">DevOps Engineer | Azure & AWS Cloud Specialist</div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="footer-notice">This is an automated confirmation email.</div>
          <div>Please do not reply directly to this message. For inquiries, use the contact form on my portfolio.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};
