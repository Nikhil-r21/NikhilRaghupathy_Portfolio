/**
 * Email template for the form sender
 * This template is used to send a confirmation email to the person who submitted the contact form
 */
export const createSenderEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Thank You for Your Message</title>
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
          background: linear-gradient(135deg, #059669, #10b981);
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
        .message-summary {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .summary-title {
          font-weight: 600;
          color: #065f46;
          margin-bottom: 10px;
        }
        .summary-item {
          margin: 8px 0;
          color: #047857;
        }
        .summary-label {
          font-weight: 500;
          display: inline-block;
          min-width: 70px;
        }
        .footer {
          background: #f3f4f6;
          padding: 20px 30px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        .contact-info {
          margin: 20px 0;
          padding: 20px;
          background: #fafafa;
          border-radius: 8px;
        }
        .contact-info h3 {
          margin: 0 0 15px 0;
          color: #374151;
        }
        .contact-link {
          color: #2563eb;
          text-decoration: none;
        }
        .contact-link:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Message!</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${formData.name}</strong>,</p>
          
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
          
          <div class="message-summary">
            <div class="summary-title">Message Summary:</div>
            <div class="summary-item">
              <span class="summary-label">Subject:</span> ${formData.subject}
            </div>
            <div class="summary-item">
              <span class="summary-label">Sent:</span> ${new Date().toLocaleString()}
            </div>
          </div>
          
          <p>In the meantime, feel free to connect with me on my social media channels or explore my portfolio to learn more about my work.</p>
          
          <div class="contact-info">
            <h3>Other Ways to Connect:</h3>
            <p>
              <strong>LinkedIn:</strong> 
              <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="contact-link" target="_blank">
                linkedin.com/in/nikhilraghupathy
              </a>
            </p>
            <p>
              <strong>GitHub:</strong> 
              <a href="https://github.com/Nikhil-r21" class="contact-link" target="_blank">
                github.com/Nikhil-r21
              </a>
            </p>
            <p>
              <strong>Medium:</strong> 
              <a href="https://medium.com/@rnikhilvignesh21" class="contact-link" target="_blank">
                medium.com/@rnikhilvignesh21
              </a>
            </p>
          </div>
          
          <p>Best regards,<br>
          <strong>Nikhil Raghupathy</strong></p>
        </div>
        <div class="footer">
          This is an automated response to confirm receipt of your message.<br>
          Please do not reply to this email.
        </div>
      </div>
    </body>
    </html>
  `;
};