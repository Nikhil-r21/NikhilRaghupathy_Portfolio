/**
 * Email template for the portfolio owner
 * This template is used to notify the owner of a new contact form submission
 */
export const createOwnerEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>New Contact Form Submission</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 15px;
        }
        .field:last-child {
          border-bottom: none;
        }
        .field-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 5px;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #111827;
          font-size: 16px;
        }
        .message-content {
          background: #f9fafb;
          border-left: 4px solid #2563eb;
          padding: 15px;
          border-radius: 4px;
          margin-top: 10px;
          white-space: pre-wrap;
        }
        .footer {
          background: #f3f4f6;
          padding: 20px 30px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        .timestamp {
          color: #9ca3af;
          font-size: 14px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">
              <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">
                ${formData.email}
              </a>
            </div>
          </div>
          
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${formData.subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-content">${formData.message}</div>
          </div>
          
          <div class="timestamp">
            Received on: ${new Date().toLocaleString()}
          </div>
        </div>
        <div class="footer">
          This message was sent through your portfolio contact form.
        </div>
      </div>
    </body>
    </html>
  `;
};