/**
 * Professional email template for portfolio owner notification
 * Clean, professional design optimized for email clients
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
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          background-color: #0284c7;
          padding: 30px;
        }
        .header-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .header-subtitle {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e5e7eb;
        }
        .field-row {
          margin-bottom: 14px;
          font-size: 14px;
        }
        .field-label {
          font-weight: 600;
          color: #6b7280;
          display: inline-block;
          min-width: 100px;
        }
        .field-value {
          color: #1f2937;
        }
        .field-value a {
          color: #0284c7;
          text-decoration: none;
        }
        .message-box {
          background-color: #f9fafb;
          border-left: 3px solid #0284c7;
          border-radius: 4px;
          padding: 16px;
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.7;
          color: #374151;
          white-space: pre-wrap;
        }
        .divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 28px 0;
        }
        .action-section {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 24px;
          text-align: center;
        }
        .action-title {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }
        .action-button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #0284c7;
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
        }
        .action-note {
          font-size: 12px;
          color: #6b7280;
          margin-top: 12px;
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
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 24px 20px;
          }
          .metadata-row {
            flex-direction: column;
            gap: 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <h1 class="header-title">New Contact Form Submission</h1>
          <p class="header-subtitle">Inquiry received from portfolio website</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="field-row">
              <span class="field-label">Name:</span>
              <span class="field-value">${formData.name}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Email:</span>
              <span class="field-value">
                <a href="mailto:${formData.email}">${formData.email}</a>
              </span>
            </div>
            <div class="field-row">
              <span class="field-label">Subject:</span>
              <span class="field-value">${formData.subject}</span>
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
