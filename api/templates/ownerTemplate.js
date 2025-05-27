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
          background-color: #0078D4;
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
        .notification-badge {
          display: inline-block;
          background-color: #0078D4;
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .section {
          margin-bottom: 24px;
        }
        .field {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #E1E1E1;
        }
        .field:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: #505A64;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          font-size: 16px;
          color: #252525;
          word-break: break-word;
        }
        .field-value a {
          color: #0078D4;
          text-decoration: none;
        }
        .field-value a:hover {
          text-decoration: underline;
        }
        .message-box {
          background-color: #F9F9F9;
          border-radius: 6px;
          padding: 16px;
          margin-top: 8px;
          white-space: pre-wrap;
          border-left: 4px solid #0078D4;
        }
        .actions {
          padding: 0 24px 24px;
        }
        .btn {
          display: inline-block;
          background-color: #0078D4;
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 10px 24px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        .btn:hover {
          background-color: #106EBE;
        }
        .timestamp {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #E1E1E1;
          color: #767676;
          font-size: 14px;
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
          .field-value {
            font-size: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="header-icon">📨</div>
            <h1 class="header-title">New Contact Form Submission</h1>
            <p class="header-subtitle">Someone has sent you a message</p>
          </div>
          
          <div class="content">
            <div class="notification-badge">New Message</div>
            
            <div class="section">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">
                  <a href="mailto:${formData.email}">${formData.email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${formData.subject}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${formData.message}</div>
              </div>
            </div>
            
            <div class="actions">
              <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="btn">Reply to Message</a>
            </div>
            
            <div class="timestamp">
              Received on: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          
          <div class="footer">
            This message was sent through your portfolio contact form.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};