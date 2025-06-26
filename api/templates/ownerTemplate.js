/**
 * Enhanced Email template for the portfolio owner
 * This template is used to notify the owner of a new contact form submission
 * Professional styling with IST railway timing and enhanced features
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
          line-height: 1.6;
          color: #323130;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          margin: 0;
          padding: 24px;
          font-size: 14px;
          min-height: 100vh;
        }
        .container {
          max-width: 720px;
          margin: 0 auto;
          background: #ffffff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 32px;
          text-align: center;
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .header-content {
          position: relative;
          z-index: 1;
        }
        .header h1 {
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .header-subtitle {
          font-size: 16px;
          margin: 0;
          font-weight: 400;
          opacity: 0.9;
        }
        .header-icon {
          display: inline-block;
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          margin-bottom: 16px;
          position: relative;
        }
        .header-icon::after {
          content: '✉';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
        }
        .content {
          padding: 40px 32px;
        }
        .section {
          margin-bottom: 32px;
          background: #fafbfc;
          border-radius: 8px;
          padding: 24px;
          border-left: 4px solid #667eea;
        }
        .section:last-child {
          margin-bottom: 0;
        }
        .section-title {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-title::before {
          content: '';
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          flex-shrink: 0;
        }
        .field-row {
          display: flex;
          margin-bottom: 16px;
          align-items: flex-start;
          background: white;
          border-radius: 6px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .field-row:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .field-row:last-child {
          margin-bottom: 0;
        }
        .field-label {
          min-width: 100px;
          font-weight: 600;
          color: #667eea;
          font-size: 13px;
          margin-right: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }
        .field-value {
          color: #2c3e50;
          font-size: 14px;
          word-break: break-word;
          flex: 1;
          font-weight: 500;
        }
        .field-value a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .field-value a:hover {
          color: #764ba2;
          text-decoration: underline;
        }
        .message-container {
          background: white;
          border: 2px solid #e8f2ff;
          border-radius: 8px;
          padding: 20px;
          margin-top: 16px;
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
          color: #2c3e50;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          position: relative;
        }
        .message-container::before {
          content: 'MESSAGE';
          position: absolute;
          top: -8px;
          left: 16px;
          background: #667eea;
          color: white;
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
          font-family: 'Segoe UI', sans-serif;
        }
        .priority-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-left: 8px;
        }
        .metadata {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-top: 1px solid #dee2e6;
          padding: 24px 32px;
          color: #6c757d;
          font-size: 13px;
        }
        .metadata-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .timestamp {
          font-weight: 600;
          color: #495057;
          background: white;
          padding: 8px 16px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .source {
          font-weight: 600;
          color: #667eea;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .source::before {
          content: '🌐';
          font-size: 16px;
        }
        .cta-section {
          background: linear-gradient(135deg, #e8f2ff, #f0f8ff);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          border: 2px dashed #667eea;
          margin-top: 24px;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 12px 32px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }
        @media (max-width: 640px) {
          body {
            padding: 12px;
          }
          .header, .content {
            padding: 24px 20px;
          }
          .metadata {
            padding: 20px;
          }
          .field-row {
            flex-direction: column;
            gap: 8px;
          }
          .field-label {
            margin-right: 0;
            min-width: auto;
          }
          .metadata-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .section {
            padding: 20px 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-content">
            <div class="header-icon"></div>
            <h1>New Contact Inquiry<span class="priority-badge">Priority</span></h1>
            <div class="header-subtitle">Portfolio website contact form submission</div>
          </div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Details</div>
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
          
          <div class="section">
            <div class="section-title">Message Content</div>
            <div class="message-container">${formData.message}</div>
          </div>

          <div class="cta-section">
            <p style="margin: 0 0 16px 0; color: #6c757d; font-size: 14px;">Ready to respond?</p>
            <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="cta-button">Reply to ${formData.name}</a>
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