/**
 * Professional Email Template for Form Sender Confirmation
 * Enhanced with modern design patterns following Google/Microsoft standards
 * Includes accessibility features, responsive design, and professional styling
 */
export const createSenderEmailTemplate = (formData) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
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
      <style type="text/css">
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, table, td, p, a, li, blockquote {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        table, td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        
        img {
          -ms-interpolation-mode: bicubic;
          border: 0;
          outline: none;
          text-decoration: none;
        }

        /* Main styles */
        body {
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #323130;
          background-color: #f3f2f1;
          margin: 0;
          padding: 0;
          width: 100% !important;
          min-width: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .email-wrapper {
          width: 100%;
          background-color: #f3f2f1;
          padding: 20px 0;
        }

        .email-container {
          max-width: 640px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          border: 1px solid #e1dfdd;
        }

        .header {
          background: linear-gradient(135deg, #107c10 0%, #0b6a0b 100%);
          color: #ffffff;
          padding: 32px 40px 28px;
          text-align: center;
          position: relative;
        }

        .header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #107c10, #40e0d0, #107c10);
        }

        .header-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .header-title {
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .header-subtitle {
          font-size: 16px;
          opacity: 0.9;
          margin: 0;
          font-weight: 400;
        }

        .content {
          padding: 40px;
        }

        .success-banner {
          background: linear-gradient(90deg, #f0fdf4, #ecfdf5);
          border: 1px solid #bbf7d0;
          border-left: 4px solid #107c10;
          padding: 20px 24px;
          margin: -40px -40px 32px -40px;
          border-radius: 0;
        }

        .success-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 12px;
          vertical-align: middle;
        }

        .success-text {
          font-size: 15px;
          color: #065f46;
          margin: 0;
          font-weight: 500;
          display: inline-block;
          vertical-align: middle;
        }

        .greeting {
          font-size: 18px;
          color: #323130;
          margin: 0 0 24px 0;
          font-weight: 500;
        }

        .greeting-name {
          color: #107c10;
          font-weight: 600;
        }

        .main-message {
          font-size: 16px;
          color: #323130;
          margin: 0 0 28px 0;
          line-height: 1.6;
        }

        .message-summary-card {
          background: #fafafa;
          border: 1px solid #e1dfdd;
          border-radius: 8px;
          padding: 24px;
          margin: 28px 0;
          position: relative;
        }

        .summary-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e1dfdd;
        }

        .summary-icon {
          width: 32px;
          height: 32px;
          background: #107c10;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }

        .summary-title {
          font-size: 16px;
          font-weight: 600;
          color: #323130;
          margin: 0;
        }

        .summary-grid {
          display: grid;
          gap: 16px;
        }

        .summary-item {
          display: flex;
          align-items: flex-start;
          padding: 12px 0;
        }

        .summary-label {
          font-size: 14px;
          font-weight: 600;
          color: #605e5c;
          min-width: 100px;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .summary-value {
          font-size: 14px;
          color: #323130;
          flex: 1;
          word-break: break-word;
        }

        .response-timeline {
          background: #fff8e1;
          border: 1px solid #ffcc02;
          border-left: 4px solid #ffaa00;
          border-radius: 6px;
          padding: 20px 24px;
          margin: 28px 0;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .timeline-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }

        .timeline-title {
          font-size: 16px;
          font-weight: 600;
          color: #b8860b;
          margin: 0;
        }

        .timeline-text {
          font-size: 15px;
          color: #8b4513;
          margin: 0;
          line-height: 1.5;
        }

        .social-section {
          margin: 32px 0;
        }

        .social-header {
          font-size: 18px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 20px 0;
        }

        .social-grid {
          display: grid;
          gap: 16px;
        }

        .social-item {
          background: #ffffff;
          border: 1px solid #e1dfdd;
          border-radius: 8px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.2s ease;
          color: inherit;
        }

        .social-item:hover {
          background: #f8f8f8;
          border-color: #323130;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .social-icon.linkedin {
          background: #0077b5;
        }

        .social-icon.github {
          background: #333333;
        }

        .social-icon.medium {
          background: #00ab6c;
        }

        .social-content {
          flex: 1;
        }

        .social-name {
          font-size: 15px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 4px 0;
        }

        .social-url {
          font-size: 13px;
          color: #605e5c;
          margin: 0;
          word-break: break-all;
        }

        .signature-section {
          margin: 32px 0 0 0;
          padding: 24px 0 0 0;
          border-top: 1px solid #e1dfdd;
        }

        .signature-text {
          font-size: 16px;
          color: #323130;
          margin: 0 0 8px 0;
        }

        .signature-name {
          font-size: 18px;
          font-weight: 600;
          color: #107c10;
          margin: 0;
        }

        .footer {
          background: #f8f8f8;
          padding: 24px 40px;
          border-top: 1px solid #e1dfdd;
          text-align: center;
        }

        .footer-content {
          color: #605e5c;
          font-size: 13px;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .footer-notice {
          background: #fff4e6;
          border: 1px solid #ffd700;
          border-radius: 6px;
          padding: 12px 16px;
          font-size: 12px;
          color: #8b4513;
          display: inline-block;
        }

        /* Mobile responsiveness */
        @media only screen and (max-width: 640px) {
          .email-wrapper {
            padding: 10px;
          }
          
          .email-container {
            border-radius: 0;
            margin: 0;
          }
          
          .header, .content, .footer {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .success-banner, .response-timeline {
            margin-left: -20px;
            margin-right: -20px;
          }
          
          .summary-item {
            flex-direction: column;
            gap: 4px;
          }
          
          .summary-label {
            min-width: auto;
            margin-right: 0;
          }
          
          .social-item {
            padding: 12px 16px;
          }
          
          .social-icon {
            width: 32px;
            height: 32px;
            margin-right: 12px;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .email-container {
            background-color: #1f1f1f;
            border-color: #404040;
          }
          
          .message-summary-card, .social-item {
            background-color: #2a2a2a;
            border-color: #404040;
          }
          
          .social-item:hover {
            background-color: #333333;
          }
          
          .greeting, .main-message, .summary-title, .social-name, .signature-text, .signature-name {
            color: #ffffff;
          }
          
          .summary-label, .social-url {
            color: #cccccc;
          }
          
          .footer {
            background-color: #2a2a2a;
            border-color: #404040;
          }
          
          .footer-content {
            color: #cccccc;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .social-item {
            transition: none;
          }
          
          .social-item:hover {
            transform: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .header {
            background: #000000;
          }
          
          .social-icon {
            background: #000000 !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <div class="header">
            <div class="header-icon">
              <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h1 class="header-title">Message Received</h1>
            <p class="header-subtitle">Thank you for reaching out!</p>
          </div>
          
          <div class="content">
            <div class="success-banner">
              <svg class="success-icon" fill="#107c10" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <p class="success-text">Your message has been successfully received and logged</p>
            </div>
            
            <p class="greeting">
              Hello <span class="greeting-name">${formData.name}</span>! 👋
            </p>
            
            <p class="main-message">
              Thank you for taking the time to reach out through my portfolio. I really appreciate your interest and I'm excited to connect with you. Your message has been received and I'll make sure to respond thoughtfully to your inquiry.
            </p>
            
            <div class="response-timeline">
              <div class="timeline-header">
                <svg class="timeline-icon" fill="#ffaa00" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <h3 class="timeline-title">Response Timeline</h3>
              </div>
              <p class="timeline-text">
                I typically respond to messages within <strong>24-48 hours</strong>. I'll review your message carefully and get back to you with a thoughtful response soon.
              </p>
            </div>
            
            <div class="message-summary-card">
              <div class="summary-header">
                <div class="summary-icon">
                  <svg width="16" height="16" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 class="summary-title">Message Summary</h3>
              </div>
              <div class="summary-grid">
                <div class="summary-item">
                  <span class="summary-label">Subject:</span>
                  <span class="summary-value">${formData.subject}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Sent on:</span>
                  <span class="summary-value">${formattedDate}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Time:</span>
                  <span class="summary-value">${formattedTime}</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">Status:</span>
                  <span class="summary-value">✅ Successfully received and queued for review</span>
                </div>
              </div>
            </div>
            
            <p class="main-message">
              While you're waiting for my response, feel free to connect with me on my professional networks or explore more of my work. I'd love to stay connected!
            </p>
            
            <div class="social-section">
              <h3 class="social-header">Let's Connect</h3>
              <div class="social-grid">
                <a href="https://www.linkedin.com/in/nikhilraghupathy/" class="social-item" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                  <div class="social-icon linkedin">
                    <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div class="social-content">
                    <p class="social-name">LinkedIn</p>
                    <p class="social-url">linkedin.com/in/nikhilraghupathy</p>
                  </div>
                </a>
                
                <a href="https://github.com/Nikhil-r21" class="social-item" target="_blank" rel="noopener noreferrer" aria-label="View GitHub Profile">
                  <div class="social-icon github">
                    <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div class="social-content">
                    <p class="social-name">GitHub</p>
                    <p class="social-url">github.com/Nikhil-r21</p>
                  </div>
                </a>
                
                <a href="https://medium.com/@rnikhilvignesh21" class="social-item" target="_blank" rel="noopener noreferrer" aria-label="Read on Medium">
                  <div class="social-icon medium">
                    <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </div>
                  <div class="social-content">
                    <p class="social-name">Medium</p>
                    <p class="social-url">medium.com/@rnikhilvignesh21</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div class="signature-section">
              <p class="signature-text">Looking forward to our conversation,</p>
              <p class="signature-name">Nikhil Raghupathy</p>
            </div>
          </div>
          
          <div class="footer">
            <p class="footer-content">
              This is an automated confirmation email sent to acknowledge receipt of your message.<br>
              You'll receive a personal response from me within 24-48 hours.
            </p>
            <div class="footer-notice">
              📧 Please don't reply to this automated email • Add rnikhilvignesh21@gmail.com to your contacts
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};