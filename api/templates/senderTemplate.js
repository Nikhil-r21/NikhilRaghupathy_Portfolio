/**
 * Professional email template for contact form sender confirmation
 * Clean, professional design optimized for email clients
 */
export const createSenderEmailTemplate = (formData) => {
  const timestamp = new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Message Received - Thank You</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        body { 
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background-color: #f3f4f6;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          background-color: #0284c7;
          padding: 40px 30px;
          text-align: center;
        }
        .header-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
        }
        .header-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .message {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .summary-box {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
        }
        .summary-title {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .summary-item {
          margin-bottom: 12px;
          font-size: 14px;
        }
        .summary-item:last-child {
          margin-bottom: 0;
        }
        .summary-label {
          font-weight: 600;
          color: #6b7280;
          display: inline-block;
          min-width: 100px;
        }
        .summary-value {
          color: #1f2937;
        }
        .divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 30px 0;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 15px;
          color: #1f2937;
        }
        .signature-name {
          font-weight: 600;
          margin-top: 8px;
        }
        .footer {
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          padding: 20px 30px;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 30px 20px;
          }
          .header {
            padding: 30px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <h1 class="header-title">Message Received</h1>
          <p class="header-subtitle">Your inquiry has been successfully submitted</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="greeting">Hello ${formData.name},</div>
          
          <div class="message">
            Thank you for reaching out through my portfolio website. I have received your message and will review it carefully. I typically respond within <strong>24 hours</strong> during business days.
          </div>
          
          <div class="summary-box">
            <div class="summary-title">Submission Details</div>
            <div class="summary-item">
              <span class="summary-label">Subject:</span>
              <span class="summary-value">${formData.subject}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Submitted:</span>
              <span class="summary-value">${timestamp} IST</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Reference:</span>
              <span class="summary-value">CF-${Date.now().toString().slice(-6)}</span>
            </div>
          </div>
          
          <div class="message">
            I appreciate your interest and look forward to connecting with you soon.
          </div>
          
          <div class="divider"></div>
          
          <div class="signature">
            Best regards,<br>
            <span class="signature-name">Nikhil Raghupathy</span>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div>This is an automated confirmation email.</div>
          <div style="margin-top: 8px;">Please do not reply directly to this message.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};
