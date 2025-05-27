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
      <title>Thank You for Your Message</title>
      <style>
        :root {
          color-scheme: light;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5;
          color: #252525;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .wrapper {
          max-width: 640px;
          margin: 0 auto;
          padding: 16px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .header {
          background-color: #107C10;
          padding: 24px;
          text-align: center;
        }
        .header-icon {
          width: 48px;
          height: 48px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 16px;
          line-height: 1;
        }
        .header-title {
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }
        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin: 8px 0 0 0;
        }
        .content {
          padding: 24px;
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 24px;
        }
        .message-summary {
          background-color: #F0FDF4;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 24px;
          border-left: 4px solid #107C10;
        }
        .summary-title {
          font-size: 16px;
          font-weight: 600;
          color: #107C10;
          margin: 0 0 16px 0;
        }
        .summary-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -8px;
        }
        .summary-item {
          flex: 1 0 calc(50% - 16px);
          margin: 0 8px 16px;
          min-width: 200px;
          background-color: white;
          border-radius: 4px;
          padding: 12px;
          border: 1px solid #D1E7DD;
        }
        .summary-label {
          font-size: 12px;
          font-weight: 500;
          color: #0F5132;
          margin-bottom: 4px;
        }
        .summary-value {
          font-size: 15px;
          color: #0F5132;
        }
        .section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #505A64;
          margin: 0 0 16px 0;
        }
        .connect-section {
          background-color: #F9F9F9;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 24px;
        }
        .connect-title {
          font-size: 16px;
          font-weight: 600;
          color: #505A64;
          margin: 0 0 16px 0;
        }
        .connect-links {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -8px;
        }
        .connect-item {
          flex: 1 0 calc(33.333% - 16px);
          margin: 0 8px 16px;
          min-width: 150px;
          background-color: white;
          border-radius: 4px;
          padding: 12px;
          border: 1px solid #E1E1E1;
          text-align: center;
        }
        .connect-label {
          font-size: 12px;
          font-weight: 600;
          color: #505A64;
          margin-bottom: 8px;
        }
        .connect-link {
          display: inline-block;
          color: #0078D4;
          text-decoration: none;
          font-size: 14px;
          padding: 4px 0;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .connect-link:hover {
          border-bottom-color: #0078D4;
        }
        .info-banner {
          background-color: #FFF4CE;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 24px;
          border-left: 4px solid #FFB900;
        }
        .banner-title {
          font-size: 16px;
          font-weight: 600;
          color: #805B10;
          margin: 0 0 8px 0;
        }
        .banner-content {
          font-size: 14px;
          color: #805B10;
        }
        .signature {
          margin-top: 24px;
        }
        .signature-name {
          font-weight: 600;
          font-size: 16px;
        }
        .footer {
          background-color: #F9F9F9;
          padding: 16px 24px;
          text-align: center;
          color: #505A64;
          font-size: 13px;
          border-top: 1px solid #E1E1E1;
        }
        @media (max-width: 600px) {
          .summary-item, .connect-item {
            flex: 1 0 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="header-icon">✓</div>
            <h1 class="header-title">Thank You for Your Message</h1>
            <p class="header-subtitle">Your message has been received</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Hi <strong>${formData.name}</strong>,
            </div>
            
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
            
            <div class="message-summary">
              <div class="summary-title">Message Summary</div>
              <div class="summary-grid">
                <div class="summary-item">
                  <div class="summary-label">Subject</div>
                  <div class="summary-value">${formData.subject}</div>
                </div>
                <div class="summary-item">
                  <div class="summary-label">Sent</div>
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
            
            <div class="section">
              <p>In the meantime, feel free to connect with me on my social media channels or explore my portfolio to learn more about my work.</p>
            </div>
            
            <div class="connect-section">
              <div class="connect-title">Connect With Me</div>
              <div class="connect-links">
                <div class="connect-item">
                  <div class="connect-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="connect-link" target="_blank">nikhilraghupathy</a>
                </div>
                <div class="connect-item">
                  <div class="connect-label">GitHub</div>
                  <a href="https://github.com/Nikhil-r21" class="connect-link" target="_blank">Nikhil-r21</a>
                </div>
                <div class="connect-item">
                  <div class="connect-label">Medium</div>
                  <a href="https://medium.com/@rnikhilvignesh21" class="connect-link" target="_blank">@rnikhilvignesh21</a>
                </div>
              </div>
            </div>
            
            <div class="info-banner">
              <div class="banner-title">Response Time</div>
              <div class="banner-content">
                I typically respond to all messages within 24-48 hours during business days. For urgent matters, please mention it in your subject line.
              </div>
            </div>
            
            <div class="signature">
              <p>Best regards,<br>
              <span class="signature-name">Nikhil Raghupathy</span></p>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated response to confirm receipt of your message.<br>
            Please do not reply to this email.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};