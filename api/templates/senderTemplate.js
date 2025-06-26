/**
 * Email template for the form sender
 * This template is used to send a confirmation email to the person who submitted the contact form
 * Redesigned with Google/Microsoft professional styling and IST railway timing
 */
export const createSenderEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Message Received - Thank You</title>
      <style>
        body { 
          font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.5;
          color: #323130;
          background-color: #faf9f8;
          margin: 0;
          padding: 24px;
          font-size: 14px;
        }
        .container {
          max-width: 680px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #edebe9;
          border-radius: 2px;
          box-shadow: 0 1.6px 3.6px 0 rgba(0,0,0,0.132), 0 0.3px 0.9px 0 rgba(0,0,0,0.108);
        }
        .header {
          background: #ffffff;
          border-bottom: 1px solid #edebe9;
          padding: 32px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #323130;
        }
        .header-subtitle {
          color: #605e5c;
          font-size: 14px;
          margin-top: 4px;
          font-weight: 400;
        }
        .content {
          padding: 32px;
        }
        .greeting {
          font-size: 16px;
          margin-bottom: 24px;
          color: #323130;
        }
        .main-message {
          font-size: 14px;
          margin-bottom: 24px;
          color: #323130;
          line-height: 1.6;
        }
        .summary-section {
          background: #f8f8f8;
          border: 1px solid #edebe9;
          border-radius: 2px;
          padding: 20px;
          margin: 24px 0;
        }
        .summary-title {
          font-weight: 600;
          color: #323130;
          margin-bottom: 12px;
          font-size: 14px;
        }
        .summary-row {
          display: flex;
          margin-bottom: 8px;
          font-size: 13px;
        }
        .summary-row:last-child {
          margin-bottom: 0;
        }
        .summary-label {
          font-weight: 600;
          color: #605e5c;
          min-width: 80px;
          margin-right: 12px;
        }
        .summary-value {
          color: #323130;
          flex: 1;
        }
        .divider {
          height: 1px;
          background: #edebe9;
          margin: 24px 0;
        }
        .contact-section {
          margin: 24px 0;
        }
        .contact-title {
          font-weight: 600;
          color: #323130;
          margin-bottom: 16px;
          font-size: 14px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .contact-item {
          font-size: 13px;
        }
        .contact-label {
          font-weight: 600;
          color: #605e5c;
          margin-bottom: 8px;
        }
        .contact-button {
          display: inline-block;
          padding: 10px 16px;
          background-color: #0078d4;
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 2px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          transition: background-color 0.2s ease;
          border: none;
          width: 100%;
          box-sizing: border-box;
        }
        .contact-button:hover {
          background-color: #106ebe;
          text-decoration: none;
        }
        .contact-button.linkedin {
          background-color: #0077b5;
        }
        .contact-button.linkedin:hover {
          background-color: #005885;
        }
        .contact-button.github {
          background-color: #24292e;
        }
        .contact-button.github:hover {
          background-color: #1b1f23;
        }
        .contact-button.medium {
          background-color: #00ab6c;
        }
        .contact-button.medium:hover {
          background-color: #00925b;
        }
        .signature {
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid #edebe9;
        }
        .signature-name {
          font-weight: 600;
          color: #323130;
          margin-top: 8px;
        }
        .footer {
          background: #f8f8f8;
          border-top: 1px solid #edebe9;
          padding: 16px 32px;
          color: #605e5c;
          font-size: 12px;
          text-align: center;
        }
        .footer-notice {
          margin-bottom: 4px;
          font-weight: 400;
        }
        .footer-instruction {
          font-weight: 400;
        }
        @media (max-width: 640px) {
          body {
            padding: 16px;
          }
          .header, .content {
            padding: 24px;
          }
          .footer {
            padding: 16px 24px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .summary-row {
            flex-direction: column;
          }
          .summary-label {
            margin-bottom: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Message Received</h1>
          <div class="header-subtitle">Your inquiry has been successfully submitted</div>
        </div>
        
        <div class="content">
          <div class="greeting">
            Hello ${formData.name},
          </div>
          
          <div class="main-message">
            Thank you for contacting me through my portfolio website. I have received your message and will respond within 24 hours.
          </div>
          
          <div class="summary-section">
            <div class="summary-title">Submission Details</div>
            <div class="summary-row">
              <div class="summary-label">Subject:</div>
              <div class="summary-value">${formData.subject}</div>
            </div>
            <div class="summary-row">
              <div class="summary-label">Submitted:</div>
              <div class="summary-value">${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit', 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              })} IST</div>
            </div>
            <div class="summary-row">
              <div class="summary-label">Reference:</div>
              <div class="summary-value">CF-${Date.now().toString().slice(-6)}</div>
            </div>
          </div>
          
          <div class="main-message">
            While you wait for my response, feel free to connect with me through my professional networks or explore my latest projects and articles.
          </div>
          
          <div class="divider"></div>
          
          <div class="contact-section">
            <div class="contact-title">Professional Networks</div>
            <div class="contact-grid">
              <div class="contact-item">
                <div class="contact-label">LinkedIn</div>
                <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="contact-button linkedin" target="_blank">
                  Visit LinkedIn Profile
                </a>
              </div>
              <div class="contact-item">
                <div class="contact-label">GitHub</div>
                <a href="https://github.com/Nikhil-r21" class="contact-button github" target="_blank">
                  View GitHub Projects
                </a>
              </div>
              <div class="contact-item">
                <div class="contact-label">Medium</div>
                <a href="https://medium.com/@rnikhilvignesh21" class="contact-button medium" target="_blank">
                  Read Medium Articles
                </a>
              </div>
            </div>
          </div>
          
          <div class="signature">
            <div>Best regards,</div>
            <div class="signature-name">Nikhil Raghupathy</div>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-notice">This is an automated confirmation message.</div>
          <div class="footer-instruction">Please do not reply to this email address.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};