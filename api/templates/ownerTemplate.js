/**
 * Professional email template for portfolio owner notification
 * Enhanced with modern design matching portfolio branding
 */
export const createOwnerEmailTemplate = (formData) => {
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
      <title>New Contact Form Submission</title>
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
          padding: 30px;
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-left h1 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
        }
        .header-subtitle {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 4px;
        }
        .header-badge {
          background-color: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e0e7ff;
        }
        .field-row {
          display: flex;
          margin-bottom: 14px;
          font-size: 14px;
        }
        .field-label {
          font-weight: 600;
          color: #6b7280;
          min-width: 100px;
          margin-right: 12px;
        }
        .field-value {
          color: #1f2937;
          flex: 1;
          word-break: break-word;
        }
        .field-value a {
          color: #0284c7;
          text-decoration: none;
        }
        .field-value a:hover {
          text-decoration: underline;
        }
        .message-box {
          background-color: #f9fafb;
          border-left: 4px solid #0284c7;
          border-radius: 8px;
          padding: 20px;
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.7;
          color: #374151;
          white-space: pre-wrap;
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
          margin: 28px 0;
        }
        .action-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }
        .action-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }
        .action-button {
          display: inline-block;
          padding: 14px 28px;
          background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%);
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }
        .action-note {
          font-size: 12px;
          color: #6b7280;
          margin-top: 12px;
          font-style: italic;
        }
        .metadata {
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          padding: 20px 30px;
          font-size: 12px;
          color: #6b7280;
        }
        .metadata-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 24px 20px;
          }
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .field-row {
            flex-direction: column;
          }
          .field-label {
            margin-bottom: 4px;
          }
          .metadata-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <div class="header-content">
            <div class="header-left">
              <h1>New Contact Form Submission</h1>
              <div class="header-subtitle">Inquiry received from portfolio website</div>
            </div>
            <div class="header-badge">NEW</div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="field-row">
              <div class="field-label">Name:</div>
              <div class="field-value">${formData.name}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Email:</div>
              <div class="field-value">
                <a href="mailto:${formData.email}">${formData.email}</a>
              </div>
            </div>
            <div class="field-row">
              <div class="field-label">Subject:</div>
              <div class="field-value">${formData.subject}</div>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="section">
            <div class="section-title">Message</div>
            <div class="message-box">${formData.message}</div>
          </div>
          
          <div class="action-section">
            <div class="action-title">Quick Action</div>
            <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi ${formData.name},\n\nThank you for your message regarding "${formData.subject}".\n\nI have reviewed your inquiry and will get back to you shortly with a detailed response.\n\nBest regards,\nNikhil Raghupathy`)}" class="action-button">
              Reply to ${formData.name}
            </a>
            <div class="action-note">Opens your email client with pre-filled recipient and subject</div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="metadata">
          <div class="metadata-row">
            <div>Portfolio Contact Form</div>
            <div>${timestamp} IST</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
