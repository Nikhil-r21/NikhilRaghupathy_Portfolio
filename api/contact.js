//api
const nodemailer = require('nodemailer');

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_APP_PASSWORD // Your Gmail App Password
    }
  });
};

// Email templates
const createOwnerEmailTemplate = (formData) => {
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

const createSenderEmailTemplate = (formData) => {
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

// CORS headers helper
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

// Main handler function
export default async function handler(req, res) {
  // Set CORS headers
  setCorsHeaders(res);

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    const formData = { name, email, subject, message };
    const transporter = createTransporter();

    // Email to owner (you)
    const ownerMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form: ${subject}`,
      html: createOwnerEmailTemplate(formData),
      replyTo: email // Allow direct reply to sender
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: `"Nikhil Raghupathy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your message - ${subject}`,
      html: createSenderEmailTemplate(formData)
    };

    // Send both emails
    const [ownerEmailResult, senderEmailResult] = await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    console.log('Owner email sent:', ownerEmailResult.messageId);
    console.log('Sender confirmation sent:', senderEmailResult.messageId);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.',
      data: {
        ownerEmailId: ownerEmailResult.messageId,
        senderEmailId: senderEmailResult.messageId
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
