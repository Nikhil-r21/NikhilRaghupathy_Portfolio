/**
 * Enhanced Email template for the form sender
 * This template is used to send a confirmation email to the person who submitted the contact form
 * Professional styling with IST timing and enhanced features
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
          line-height: 1.6;
          color: #2c3e50;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          padding: 48px 32px;
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
        .success-icon {
          display: inline-block;
          width: 64px;
          height: 64px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          margin-bottom: 20px;
          position: relative;
          animation: pulse 2s infinite;
        }
        .success-icon::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 28px;
          font-weight: bold;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .header h1 {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .header-subtitle {
          font-size: 16px;
          margin: 0;
          font-weight: 400;
          opacity: 0.9;
        }
        .content {
          padding: 48px 32px;
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 24px;
          color: #2c3e50;
          font-weight: 600;
        }
        .main-message {
          font-size: 15px;
          margin-bottom: 32px;
          color: #34495e;
          line-height: 1.7;
          background: #f8f9fa;
          padding: 24px;
          border-radius: 12px;
          border-left: 4px solid #4facfe;
          position: relative;
        }
        .main-message::before {
          content: '💬';
          position: absolute;
          top: -8px;
          left: 20px;
          background: #4facfe;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .summary-section {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%);
          border: 2px solid #e1f5fe;
          border-radius: 12px;
          padding: 28px;
          margin: 32px 0;
          position: relative;
          box-shadow: 0 4px 20px rgba(79, 172, 254, 0.1);
        }
        .summary-title {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .summary-title::before {
          content: '📋';
          font-size: 18px;
        }
        .summary-row {
          display: flex;
          margin-bottom: 12px;
          font-size: 14px;
          background: white;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          align-items: center;
        }
        .summary-row:last-child {
          margin-bottom: 0;
        }
        .summary-label {
          font-weight: 700;
          color: #4facfe;
          min-width: 100px;
          margin-right: 16px;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }
        .summary-value {
          color: #2c3e50;
          flex: 1;
          font-weight: 500;
        }
        .reference-id {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .contact-section {
          margin: 32px 0;
          background: #f8f9fa;
          border-radius: 12px;
          padding: 32px;
          border: 2px dashed #4facfe;
        }
        .contact-title {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 24px;
          font-size: 18px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .contact-title::before {
          content: '🌐';
          font-size: 20px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .contact-item {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }
        .contact-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          border-color: #4facfe;
        }
        .contact-label {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-link {
          color: #4facfe;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: color 0.3s ease;
          display: block;
          padding: 8px 0;
        }
        .contact-link:hover {
          color: #667eea;
          text-decoration: underline;
        }
        .linkedin-item { border-left: 4px solid #0077b5; }
        .github-item { border-left: 4px solid #333; }
        .medium-item { border-left: 4px solid #00ab6c; }
        .signature {
          margin-top: 40px;
          padding: 32px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 12px;
          text-align: center;
          color: white;
          position: relative;
        }
        .signature::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }
        .signature-content {
          position: relative;
          z-index: 1;
        }
        .signature-greeting {
          font-size: 16px;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .signature-name {
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 8px;
        }
        .signature-title {
          font-size: 14px;
          opacity: 0.9;
          font-weight: 400;
        }
        .footer {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 24px 32px;
          text-align: center;
          font-size: 13px;
        }
        .footer-notice {
          margin-bottom: 8px;
          font-weight: 600;
          opacity: 0.9;
        }
        .footer-instruction {
          font-weight: 400;
          opacity: 0.8;
        }
        .response-timeline {
          background: linear-gradient(135deg, #ffeaa7, #fab1a0);
          border-radius: 12px;
          padding: 20px;
          margin: 24px 0;
          text-align: center;
          border: 2px solid #fdcb6e;
        }
        .timeline-icon {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .timeline-text {
          font-weight: 600;
          color: #2d3436;
          font-size: 15px;
        }
        @media (max-width: 640px) {
          body {
            padding: 12px;
          }
          .header, .content {
            padding: 32px 20px;
          }
          .footer {
            padding: 20px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .summary-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .summary-label {
            margin-bottom: 4px;
            min-width: auto;
          }
          .contact-section {
            padding: 24px 16px;
          }
          .signature {
            padding: 24px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-content">
            <div class="success-icon"></div>
            <h1>Message Received!</h1>
            <div class="header-subtitle">Thank you for reaching out through my portfolio</div>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">
            Hello ${formData.name},
          </div>
          
          <div class="main-message">
            Thank you for contacting me through my portfolio website! I'm excited to learn about your inquiry and will get back to you soon.
          </div>

          <div class="response-timeline">
            <div class="timeline-icon">⏰</div>
            <div class="timeline-text">Expected Response Time: 24 hours</div>
          </div>
          
          <div class="summary-section">
            <div class="summary-title">Submission Summary</div>
            <div class="summary-row">
              <div class="summary-label">Subject</div>
              <div class="summary-value">${formData.subject}</div>
            </div>
            <div class="summary-row">
              <div class="summary-label">Submitted</div>
              <div class="summary-value">${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
              })}</div>
            </div>
            <div class="summary-row">
              <div class="summary-label">Reference</div>
              <div class="summary-value">
                <span class="reference-id">CF-${Date.now().toString().slice(-6)}</span>
              </div>
            </div>
          </div>
          
          <div class="main-message">
            While you wait for my response, feel free to explore my professional networks and latest projects. I'd love to connect with you!
          </div>
          
          <div class="contact-section">
            <div class="contact-title">Let's Connect</div>
            <div class="contact-grid">
              <div class="contact-item linkedin-item">
                <div class="contact-label">LinkedIn</div>
                <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="contact-link" target="_blank">
                  Connect professionally
                </a>
              </div>
              <div class="contact-item github-item">
                <div class="contact-label">GitHub</div>
                <a href="https://github.com/Nikhil-r21" class="contact-link" target="_blank">
                  Explore my code
                </a>
              </div>
              <div class="contact-item medium-item">
                <div class="contact-label">Medium</div>
                <a href="https://medium.com/@rnikhilvignesh21" class="contact-link" target="_blank">
                  Read my articles
                </a>
              </div>
            </div>
          </div>
          
          <div class="signature">
            <div class="signature-content">
              <div class="signature-greeting">Best regards,</div>
              <div class="signature-name">Nikhil Raghupathy</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-notice">This is an automated confirmation message</div>
          <div class="footer-instruction">Please do not reply to this email address</div>
        </div>
      </div>
    </body>
    </html>
  `;
};