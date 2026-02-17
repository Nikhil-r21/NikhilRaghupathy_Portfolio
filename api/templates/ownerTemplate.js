/**
 * Professional email template for portfolio owner notification
 * AWS/Azure style - clean, minimal, professional
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
        .section {
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .field-row {
          margin-bottom: 12px;
          font-size: 14px;
          color: #545b64;
        }
        .field-label {
          font-weight: 600;
          color: #232f3e;
          display: inline-block;
          min-width: 90px;
        }
        .field-value {
          color: #545b64;
        }
        .field-value a {
          color: #0073bb;
          text-decoration: none;
        }
        .message-box {
          padding: 16px 0;
          font-size: 14px;
          line-height: 1.7;
          color: #545b64;
          white-space: pre-wrap;
        }
        .divider {
          height: 1px;
          background-color: #eaeded;
          margin: 28px 0;
        }
        .action-section {
          padding: 24px 0;
        }
        .action-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #232f3e;
          color: #ffffff !important;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
        }
        .action-note {
          font-size: 12px;
          color: #879196;
          margin-top: 12px;
        }
        .metadata {
          border-top: 1px solid #eaeded;
          padding: 20px 30px;
          font-size: 12px;
          color: #879196;
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
            padding: 30px 20px 24px 20px;
          }
          .metadata-row {
            flex-direction: column;
            gap: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <h1 class="header-title">New Contact Form Submission</h1>
        </div>
        
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
            <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi ${formData.name},\n\nThank you for your message regarding "${formData.subject}".\n\nI have reviewed your inquiry and will get back to you shortly with a detailed response.\n\nBest regards,\nNikhil Raghupathy`)}" class="action-button">
              Reply to ${formData.name}
            </a>
            <div class="action-note">Opens your email client with pre-filled recipient and subject</div>
          </div>
        </div>
        
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
