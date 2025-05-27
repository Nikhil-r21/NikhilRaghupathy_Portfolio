// templates/ownerTemplate.js

/**
 * Email template for the portfolio owner
 * This template is used to notify the owner of a new contact form submission
 */
export const createOwnerEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>New Contact Form Submission</title>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Google Sans', 'Segoe UI', Tahoma, sans-serif;
          line-height: 1.6;
          color: #202124;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .email-wrapper {
          max-width: 680px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .email-container {
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
        }
        .header {
          background-color: #ffffff;
          padding: 32px 24px 24px;
          border-bottom: 1px solid #e8eaed;
          text-align: left;
        }
        .header-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .header-icon {
          width: 40px;
          height: 40px;
          background-color: #4285f4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-icon::before {
          content: "✉";
          color: white;
          font-size: 18px;
          line-height: 1;
        }
        .header-text {
          flex: 1;
        }
        .header-title {
          color: #202124;
          font-size: 22px;
          font-weight: 400;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }
        .header-subtitle {
          color: #5f6368;
          font-size: 14px;
          margin: 0;
          font-weight: 400;
        }
        .content {
          padding: 24px;
        }
        .alert-badge {
          display: inline-block;
          background-color: #e8f0fe;
          color: #1a73e8;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 16px;
          margin-bottom: 24px;
          border: 1px solid #dadce0;
        }
        .contact-details {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid #e8eaed;
        }
        .detail-row {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e8eaed;
        }
        .detail-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .detail-label {
          font-size: 12px;
          font-weight: 500;
          color: #5f6368;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .detail-value {
          font-size: 16px;
          color: #202124;
          line-height: 1.5;
          word-wrap: break-word;
        }
        .detail-value a {
          color: #1a73e8;
          text-decoration: none;
        }
        .detail-value a:hover {
          text-decoration: underline;
        }
        .message-content {
          background-color: #ffffff;
          border: 1px solid #e8eaed;
          border-radius: 8px;
          padding: 20px;
          margin-top: 8px;
          white-space: pre-wrap;
          font-family: 'Google Sans', 'Segoe UI', Tahoma, sans-serif;
          line-height: 1.6;
        }
        .action-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e8eaed;
        }
        .reply-button {
          display: inline-block;
          background-color: #1a73e8;
          color: white;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          font-family: 'Google Sans', 'Segoe UI', Tahoma, sans-serif;
        }
        .reply-button:hover {
          background-color: #1557b0;
        }
        .timestamp-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e8eaed;
          color: #5f6368;
          font-size: 14px;
        }
        .timestamp-label {
          font-weight: 500;
          margin-bottom: 4px;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 20px 24px;
          text-align: center;
          color: #5f6368;
          font-size: 12px;
          border-top: 1px solid #e8eaed;
          line-height: 1.5;
        }
        
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
          .email-wrapper {
            padding: 16px;
          }
          .header {
            padding: 24px 20px 20px;
          }
          .header-content {
            gap: 12px;
          }
          .header-title {
            font-size: 20px;
          }
          .header-subtitle {
            font-size: 13px;
          }
          .content {
            padding: 20px;
          }
          .contact-details {
            padding: 20px;
          }
          .detail-value {
            font-size: 15px;
          }
          .reply-button {
            padding: 10px 20px;
            font-size: 13px;
          }
          .footer {
            padding: 16px 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .email-wrapper {
            padding: 12px;
          }
          .header {
            padding: 20px 16px 16px;
          }
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .header-icon {
            align-self: flex-start;
          }
          .content {
            padding: 16px;
          }
          .contact-details {
            padding: 16px;
          }
          .message-content {
            padding: 16px;
          }
          .footer {
            padding: 16px;
          }
        }
        
        /* High DPI Display Support */
        @media only screen and (-webkit-min-device-pixel-ratio: 2), 
               only screen and (min-resolution: 192dpi) {
          .header-icon::before {
            font-size: 17px;
          }
        }
        
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1f1f1f;
            color: #e8eaed;
          }
          .email-container {
            background-color: #2d2d2d;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15);
          }
          .header {
            background-color: #2d2d2d;
            border-bottom: 1px solid #5f6368;
          }
          .header-title {
            color: #e8eaed;
          }
          .header-subtitle {
            color: #9aa0a6;
          }
          .contact-details {
            background-color: #1f1f1f;
            border: 1px solid #5f6368;
          }
          .detail-row {
            border-bottom: 1px solid #5f6368;
          }
          .detail-value {
            color: #e8eaed;
          }
          .message-content {
            background-color: #2d2d2d;
            border: 1px solid #5f6368;
          }
          .action-section, .timestamp-section {
            border-top: 1px solid #5f6368;
          }
          .timestamp-section {
            color: #9aa0a6;
          }
          .footer {
            background-color: #1f1f1f;
            border-top: 1px solid #5f6368;
            color: #9aa0a6;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <div class="header">
            <div class="header-content">
              <div class="header-icon"></div>
              <div class="header-text">
                <h1 class="header-title">New Contact Form Submission</h1>
                <p class="header-subtitle">You have received a new message through your portfolio</p>
              </div>
            </div>
          </div>
          
          <div class="content">
            <div class="alert-badge">New Message</div>
            
            <div class="contact-details">
              <div class="detail-row">
                <div class="detail-label">From</div>
                <div class="detail-value">${formData.name}</div>
              </div>
              
              <div class="detail-row">
                <div class="detail-label">Email</div>
                <div class="detail-value">
                  <a href="mailto:${formData.email}">${formData.email}</a>
                </div>
              </div>
              
              <div class="detail-row">
                <div class="detail-label">Subject</div>
                <div class="detail-value">${formData.subject}</div>
              </div>
              
              <div class="detail-row">
                <div class="detail-label">Message</div>
                <div class="message-content">${formData.message}</div>
              </div>
            </div>
            
            <div class="action-section">
              <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="reply-button">Reply to Message</a>
            </div>
            
            <div class="timestamp-section">
              <div class="timestamp-label">Received</div>
              <div>${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</div>
            </div>
          </div>
          
          <div class="footer">
            This notification was generated automatically from your portfolio contact form.<br>
            Please do not reply directly to this email.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};