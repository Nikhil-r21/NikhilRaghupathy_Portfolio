/**
 * Professional email template for contact form sender confirmation
 * AWS/Azure style - clean, minimal, professional
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
      <style>
        body { 
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #232f3e;
          background-color: #ffffff;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          padding: 40px 30px 30px 30px;
          border-bottom: 1px solid #eaeded;
        }
        .header-title {
          font-size: 20px;
          font-weight: 400;
          color: #232f3e;
          margin: 0;
        }
        .content {
          padding: 30px;
        }
        .greeting {
          font-size: 15px;
          color: #232f3e;
          margin-bottom: 20px;
        }
        .message {
          font-size: 14px;
          color: #545b64;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .details {
          margin: 24px 0;
          font-size: 13px;
          color: #545b64;
        }
        .details-row {
          margin-bottom: 8px;
        }
        .details-label {
          font-weight: 600;
          color: #232f3e;
          display: inline-block;
          min-width: 90px;
        }
        .divider {
          height: 1px;
          background-color: #eaeded;
          margin: 30px 0;
        }
        .signature {
          margin-top: 30px;
          font-size: 14px;
          color: #232f3e;
        }
        .signature-name {
          font-weight: 600;
          margin-top: 8px;
        }
        .footer {
          border-top: 1px solid #eaeded;
          padding: 20px 30px;
          font-size: 12px;
          color: #879196;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 30px 20px 24px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <h1 class="header-title">Message Received</h1>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${formData.name},</div>
          
          <div class="message">
            Thank you for contacting me through my portfolio website. I have received your message and will review it carefully. I typically respond within 24 hours during business days.
          </div>
          
          <div class="details">
            <div class="details-row">
              <span class="details-label">Subject:</span>
              <span>${formData.subject}</span>
            </div>
            <div class="details-row">
              <span class="details-label">Submitted:</span>
              <span>${timestamp} IST</span>
            </div>
            <div class="details-row">
              <span class="details-label">Reference:</span>
              <span>CF-${Date.now().toString().slice(-6)}</span>
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
        
        <div class="footer">
          <div>This is an automated confirmation email.</div>
          <div style="margin-top: 4px;">Please do not reply directly to this message.</div>
        </div>
      </div>
    </body>
    </html>
  `;
};
