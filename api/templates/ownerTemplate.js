/**
 * Email template for the portfolio owner
 * This template is used to notify the owner of a new contact form submission
 * Redesigned with Google/Microsoft professional styling and IST railway timing
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
        .section {
          margin-bottom: 24px;
        }
        .section:last-child {
          margin-bottom: 0;
        }
        .section-title {
          font-weight: 600;
          color: #323130;
          margin-bottom: 8px;
          font-size: 14px;
        }
        .field-row {
          display: table;
          width: 100%;
          margin-bottom: 16px;
          border-collapse: separate;
        }
        .field-label {
          display: table-cell;
          width: 120px;
          font-weight: 600;
          color: #605e5c;
          font-size: 13px;
          vertical-align: top;
          padding-right: 16px;
          padding-top: 2px;
        }
        .field-value {
          display: table-cell;
          color: #323130;
          font-size: 14px;
          vertical-align: top;
          word-break: break-word;
        }
        .field-value a {
          color: #0078d4;
          text-decoration: none;
        }
        .field-value a:hover {
          text-decoration: underline;
        }
        .message-container {
          background: #f8f8f8;
          border: 1px solid #edebe9;
          border-radius: 2px;
          padding: 16px;
          margin-top: 8px;
          font-family: 'Consolas', 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.4;
          white-space: pre-wrap;
          color: #323130;
        }
        .divider {
          height: 1px;
          background: #edebe9;
          margin: 24px 0;
        }
        .metadata {
          background: #f8f8f8;
          border-top: 1px solid #edebe9;
          padding: 16px 32px;
          color: #605e5c;
          font-size: 12px;
        }
        .metadata-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .timestamp {
          font-weight: 400;
        }
        .source {
          font-weight: 400;
        }
        @media (max-width: 640px) {
          body {
            padding: 16px;
          }
          .header, .content {
            padding: 24px;
          }
          .metadata {
            padding: 16px 24px;
          }
          .field-row {
            display: block;
          }
          .field-label {
            display: block;
            width: auto;
            padding-right: 0;
            margin-bottom: 4px;
          }
          .field-value {
            display: block;
            margin-bottom: 16px;
          }
          .metadata-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Contact Form Submission</h1>
          <div class="header-subtitle">New inquiry received from your portfolio website</div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="field-row">
              <div class="field-label">Name</div>
              <div class="field-value">${formData.name}</div>
            </div>
            <div class="field-row">
              <div class="field-label">Email</div>
              <div class="field-value">
                <a href="mailto:${formData.email}">${formData.email}</a>
              </div>
            </div>
            <div class="field-row">
              <div class="field-label">Subject</div>
              <div class="field-value">${formData.subject}</div>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="section">
            <div class="section-title">Message</div>
            <div class="message-container">${formData.message}</div>
          </div>
        </div>
        
        <div class="metadata">
          <div class="metadata-row">
            <div class="source">Portfolio Contact Form</div>
            <div class="timestamp">${new Date().toLocaleString('en-IN', { 
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
        </div>
      </div>
    </body>
    </html>
  `;
};