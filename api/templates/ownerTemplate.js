/**
 * Professional Email Template for Portfolio Contact Form
 * Enhanced with modern design patterns following Google/Microsoft standards
 * Includes accessibility features, responsive design, and professional styling
 */
export const createOwnerEmailTemplate = (formData) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
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
      <style type="text/css">
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, table, td, p, a, li, blockquote {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        table, td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        
        img {
          -ms-interpolation-mode: bicubic;
          border: 0;
          outline: none;
          text-decoration: none;
        }

        /* Main styles */
        body {
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #323130;
          background-color: #f3f2f1;
          margin: 0;
          padding: 0;
          width: 100% !important;
          min-width: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .email-wrapper {
          width: 100%;
          background-color: #f3f2f1;
          padding: 20px 0;
        }

        .email-container {
          max-width: 640px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          border: 1px solid #e1dfdd;
        }

        .header {
          background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%);
          color: #ffffff;
          padding: 32px 40px 28px;
          text-align: left;
          position: relative;
        }

        .header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0078d4, #40e0d0, #0078d4);
        }

        .header-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .header-subtitle {
          font-size: 16px;
          opacity: 0.9;
          margin: 0;
          font-weight: 400;
        }

        .content {
          padding: 40px;
        }

        .priority-banner {
          background: linear-gradient(90deg, #f3f2f1, #faf9f8);
          border-left: 4px solid #0078d4;
          padding: 16px 20px;
          margin: -40px -40px 32px -40px;
          border-radius: 0;
        }

        .priority-text {
          font-size: 14px;
          color: #605e5c;
          margin: 0;
          font-weight: 500;
        }

        .contact-card {
          background: #faf9f8;
          border: 1px solid #edebe9;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 28px;
        }

        .contact-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #edebe9;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: #0078d4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .contact-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 4px 0;
        }

        .contact-info p {
          font-size: 14px;
          color: #605e5c;
          margin: 0;
        }

        .field-group {
          margin-bottom: 24px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 600;
          color: #323130;
          margin-bottom: 8px;
          display: block;
          letter-spacing: -0.01em;
        }

        .field-value {
          font-size: 16px;
          color: #323130;
          line-height: 1.5;
        }

        .field-value.email {
          background: #f8f8f8;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #e1dfdd;
        }

        .field-value.email a {
          color: #0078d4;
          text-decoration: none;
          font-weight: 500;
        }

        .field-value.email a:hover {
          text-decoration: underline;
        }

        .message-container {
          background: #ffffff;
          border: 1px solid #e1dfdd;
          border-radius: 8px;
          padding: 20px;
          margin-top: 12px;
          position: relative;
        }

        .message-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #0078d4;
          border-radius: 4px 0 0 4px;
        }

        .message-content {
          color: #323130;
          font-size: 16px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin-left: 16px;
        }

        .metadata {
          background: #f8f8f8;
          border-radius: 6px;
          padding: 16px 20px;
          margin-top: 28px;
          border: 1px solid #e1dfdd;
        }

        .metadata-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .metadata-row:last-child {
          margin-bottom: 0;
        }

        .metadata-label {
          font-size: 13px;
          color: #605e5c;
          font-weight: 500;
        }

        .metadata-value {
          font-size: 13px;
          color: #323130;
          font-weight: 600;
        }

        .action-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #edebe9;
        }

        .action-button {
          display: inline-block;
          background: #0078d4;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          margin-right: 12px;
          transition: background-color 0.2s ease;
        }

        .action-button:hover {
          background: #106ebe;
        }

        .action-button.secondary {
          background: transparent;
          color: #0078d4;
          border: 1px solid #0078d4;
        }

        .action-button.secondary:hover {
          background: #f8f8f8;
        }

        .footer {
          background: #f8f8f8;
          padding: 24px 40px;
          border-top: 1px solid #edebe9;
          text-align: center;
        }

        .footer-content {
          color: #605e5c;
          font-size: 13px;
          line-height: 1.5;
        }

        .footer-links {
          margin-top: 16px;
        }

        .footer-links a {
          color: #0078d4;
          text-decoration: none;
          font-size: 12px;
          margin: 0 8px;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        /* Mobile responsiveness */
        @media only screen and (max-width: 640px) {
          .email-wrapper {
            padding: 10px;
          }
          
          .email-container {
            border-radius: 0;
            margin: 0;
          }
          
          .header, .content, .footer {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .priority-banner {
            margin-left: -20px;
            margin-right: -20px;
          }
          
          .contact-header {
            flex-direction: column;
            text-align: center;
          }
          
          .contact-icon {
            margin-right: 0;
            margin-bottom: 12px;
          }
          
          .metadata-row {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .action-button {
            display: block;
            text-align: center;
            margin-bottom: 12px;
            margin-right: 0;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .email-container {
            background-color: #1f1f1f;
            border-color: #404040;
          }
          
          .contact-card, .metadata, .message-container {
            background-color: #2a2a2a;
            border-color: #404040;
          }
          
          .field-value, .message-content, .contact-info h3, .metadata-value {
            color: #ffffff;
          }
          
          .field-label, .metadata-label {
            color: #cccccc;
          }
          
          .footer {
            background-color: #2a2a2a;
            border-color: #404040;
          }
          
          .footer-content {
            color: #cccccc;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .action-button {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .header {
            background: #000000;
          }
          
          .action-button {
            background: #000000;
            border: 2px solid #ffffff;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <div class="header">
            <h1 class="header-title">New Contact Inquiry</h1>
            <p class="header-subtitle">Someone reached out through your portfolio</p>
          </div>
          
          <div class="content">
            <div class="priority-banner">
              <p class="priority-text">
                📧 New message • Requires your attention
              </p>
            </div>
            
            <div class="contact-card">
              <div class="contact-header">
                <div class="contact-icon">
                  <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div class="contact-info">
                  <h3>${formData.name}</h3>
                  <p>New contact inquiry</p>
                </div>
              </div>
              
              <div class="field-group">
                <label class="field-label">Email Address</label>
                <div class="field-value email">
                  <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject)}" aria-label="Reply to ${formData.name}">
                    ${formData.email}
                  </a>
                </div>
              </div>
              
              <div class="field-group">
                <label class="field-label">Subject</label>
                <div class="field-value">${formData.subject}</div>
              </div>
            </div>
            
            <div class="field-group">
              <label class="field-label">Message</label>
              <div class="message-container">
                <div class="message-content">${formData.message}</div>
              </div>
            </div>
            
            <div class="metadata">
              <div class="metadata-row">
                <span class="metadata-label">Received</span>
                <span class="metadata-value">${formattedDate}</span>
              </div>
              <div class="metadata-row">
                <span class="metadata-label">Time</span>
                <span class="metadata-value">${formattedTime}</span>
              </div>
              <div class="metadata-row">
                <span class="metadata-label">Source</span>
                <span class="metadata-value">Portfolio Contact Form</span>
              </div>
            </div>
            
            <div class="action-section">
              <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject)}" class="action-button" role="button">
                Reply to ${formData.name.split(' ')[0]}
              </a>
              <a href="mailto:${formData.email}" class="action-button secondary" role="button">
                Start New Conversation
              </a>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-content">
              <p>This message was sent through your portfolio contact form.</p>
              <p>You're receiving this because you're the portfolio owner.</p>
            </div>
            <div class="footer-links">
              <a href="#" aria-label="Manage email preferences">Email Preferences</a>
              <a href="#" aria-label="Contact support">Support</a>
              <a href="#" aria-label="View privacy policy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};