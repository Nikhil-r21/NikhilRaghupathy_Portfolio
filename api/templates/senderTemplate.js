// templates/senderTemplate.js

/**
 * Email template for the form sender
 * This template is used to send a confirmation email to the person who submitted the contact form
 */
export const createSenderEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Message Received - Thank You</title>
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
          background-color: #34a853;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-icon::before {
          content: "✓";
          color: white;
          font-size: 18px;
          font-weight: 500;
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
        .greeting {
          font-size: 16px;
          margin-bottom: 20px;
          color: #202124;
        }
        .main-message {
          margin-bottom: 24px;
          color: #5f6368;
          line-height: 1.6;
        }
        .message-summary {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          border: 1px solid #e8eaed;
        }
        .summary-title {
          font-size: 14px;
          font-weight: 500;
          color: #202124;
          margin: 0 0 16px 0;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .summary-item {
          background-color: #ffffff;
          border-radius: 4px;
          padding: 16px;
          border: 1px solid #e8eaed;
        }
        .summary-label {
          font-size: 12px;
          font-weight: 500;
          color: #5f6368;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .summary-value {
          font-size: 14px;
          color: #202124;
          line-height: 1.4;
        }
        .info-section {
          background-color: #fff3cd;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          border-left: 4px solid #ffc107;
        }
        .info-title {
          font-size: 14px;
          font-weight: 500;
          color: #856404;
          margin: 0 0 8px 0;
        }
        .info-content {
          font-size: 14px;
          color: #856404;
          line-height: 1.5;
        }
        .connect-section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 400;
          color: #202124;
          margin: 0 0 16px 0;
        }
        .connect-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        .connect-item {
          background-color: #f8f9fa;
          border-radius: 4px;
          padding: 16px;
          text-align: center;
          border: 1px solid #e8eaed;
          transition: border-color 0.2s ease;
        }
        .connect-item:hover {
          border-color: #1a73e8;
        }
        .connect-label {
          font-size: 12px;
          font-weight: 500;
          color: #5f6368;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .connect-link {
          color: #1a73e8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
        }
        .connect-link:hover {
          text-decoration: underline;
        }
        .signature-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e8eaed;
        }
        .signature-text {
          color: #5f6368;
          margin-bottom: 8px;
        }
        .signature-name {
          font-weight: 500;
          font-size: 16px;
          color: #202124;
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
          .message-summary, .info-section {
            padding: 16px;
          }
          .summary-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .connect-grid {
            grid-template-columns: 1fr;
            gap: 8px;
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
          .message-summary, .info-section {
            padding: 14px;
          }
          .connect-item {
            padding: 12px;
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
          .header-title, .section-title, .signature-name {
            color: #e8eaed;
          }
          .header-subtitle, .main-message {
            color: #9aa0a6;
          }
          .greeting {
            color: #e8eaed;
          }
          .message-summary, .connect-item {
            background-color: #1f1f1f;
            border: 1px solid #5f6368;
          }
          .summary-item {
            background-color: #2d2d2d;
            border: 1px solid #5f6368;
          }
          .summary-title, .summary-value {
            color: #e8eaed;
          }
          .summary-label, .connect-label {
            color: #9aa0a6;
          }
          .signature-section {
            border-top: 1px solid #5f6368;
          }
          .signature-text {
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
                <h1 class="header-title">Message Received</h1>
                <p class="header-subtitle">Thank you for reaching out</p>
              </div>
            </div>
          </div>
          
          <div class="content">
            <div class="greeting">
              Hi <strong>${formData.name}</strong>,
            </div>
            
            <div class="main-message">
              Thank you for your message. I have received it and will respond as soon as possible, typically within 24-48 hours during business days.
            </div>
            
            <div class="message-summary">
              <div class="summary-title">Message Details</div>
              <div class="summary-grid">
                <div class="summary-item">
                  <div class="summary-label">Subject</div>
                  <div class="summary-value">${formData.subject}</div>
                </div>
                <div class="summary-item">
                  <div class="summary-label">Submitted</div>
                  <div class="summary-value">${new Date().toLocaleString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</div>
                </div>
              </div>
            </div>
            
            <div class="info-section">
              <div class="info-title">Response Time</div>
              <div class="info-content">
                I typically respond to messages within 24-48 hours during business days (Monday-Friday). For urgent inquiries, please indicate this in your subject line.
              </div>
            </div>
            
            <div class="connect-section">
              <div class="section-title">Connect with me</div>
              <p style="color: #5f6368; margin-bottom: 16px; font-size: 14px;">
                Feel free to connect with me on these platforms while you wait for my response.
              </p>
              <div class="connect-grid">
                <div class="connect-item">
                  <div class="connect-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="connect-link" target="_blank" rel="noopener">nikhilraghupathy</a>
                </div>
                <div class="connect-item">
                  <div class="connect-label">GitHub</div>
                  <a href="https://github.com/Nikhil-r21" class="connect-link" target="_blank" rel="noopener">Nikhil-r21</a>
                </div>
                <div class="connect-item">
                  <div class="connect-label">Medium</div>
                  <a href="https://medium.com/@rnikhilvignesh21" class="connect-link" target="_blank" rel="noopener">@rnikhilvignesh21</a>
                </div>
              </div>
            </div>
            
            <div class="signature-section">
              <div class="signature-text">Best regards,</div>
              <div class="signature-name">Nikhil Raghupathy</div>
            </div>
          </div>
          
          <div class="footer">
            This is an automated confirmation email.<br>
            Please do not reply directly to this message.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};