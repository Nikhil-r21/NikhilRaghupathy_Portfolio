// templates/freelanceOwnerTemplate.js
export const createFreelanceOwnerEmailTemplate = (data) => {
  const { 
    name, 
    email, 
    phone, 
    projectType, 
    budget, 
    timeline, 
    message, 
    companyName, 
    submittedAt 
  } = data;

  // Generate priority badge based on timeline
  const getPriorityBadge = (timeline) => {
    if (timeline.includes('Urgent')) {
      return `<span style="background-color: #EA4335; color: white; padding: 4px 12px; border-radius: 16px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">High Priority</span>`;
    } else if (timeline.includes('week')) {
      return `<span style="background-color: #FF9800; color: white; padding: 4px 12px; border-radius: 16px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Medium Priority</span>`;
    }
    return `<span style="background-color: #34A853; color: white; padding: 4px 12px; border-radius: 16px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Standard</span>`;
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>New Project Inquiry</title>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.5;
          color: #202124;
          background-color: #f8f9fa;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .email-container {
          max-width: 680px;
          margin: 32px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
          padding: 40px 32px;
          text-align: left;
        }
        .header-content {
          max-width: 600px;
        }
        .header-title {
          color: #ffffff;
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }
        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
        .content {
          padding: 32px;
        }
        .section {
          margin-bottom: 32px;
        }
        .section:last-child {
          margin-bottom: 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e8eaed;
        }
        .section-title {
          font-size: 18px;
          font-weight: 500;
          color: #3c4043;
          margin: 0;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 12px;
          font-weight: 500;
          color: #5f6368;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }
        .info-value {
          font-size: 15px;
          color: #202124;
          font-weight: 400;
          word-break: break-word;
        }
        .info-value a {
          color: #1a73e8;
          text-decoration: none;
        }
        .info-value a:hover {
          text-decoration: underline;
        }
        .priority-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .message-container {
          background-color: #f8f9fa;
          border: 1px solid #e8eaed;
          border-radius: 8px;
          padding: 20px;
          margin-top: 16px;
        }
        .message-text {
          font-size: 15px;
          line-height: 1.6;
          color: #3c4043;
          margin: 0;
          white-space: pre-wrap;
        }
        .actions-section {
          background-color: #f8f9fa;
          padding: 24px 32px;
          border-top: 1px solid #e8eaed;
        }
        .actions-grid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          min-height: 44px;
          border: none;
        }
        .btn-primary {
          background-color: #1a73e8;
          color: #ffffff;
        }
        .btn-primary:hover {
          background-color: #1557b0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        .btn-secondary {
          background-color: #ffffff;
          color: #3c4043;
          border: 1px solid #dadce0;
        }
        .btn-secondary:hover {
          background-color: #f8f9fa;
          border-color: #c5c7ca;
        }
        .footer {
          padding: 24px 32px;
          background-color: #ffffff;
          border-top: 1px solid #e8eaed;
        }
        .footer-title {
          font-size: 16px;
          font-weight: 500;
          color: #3c4043;
          margin: 0 0 16px 0;
        }
        .steps-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .steps-list li {
          position: relative;
          padding: 8px 0 8px 24px;
          font-size: 14px;
          color: #5f6368;
          line-height: 1.4;
        }
        .steps-list li::before {
          content: counter(step-counter);
          counter-increment: step-counter;
          position: absolute;
          left: 0;
          top: 8px;
          width: 16px;
          height: 16px;
          background-color: #4285f4;
          color: white;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .steps-list {
          counter-reset: step-counter;
        }
        .divider {
          height: 1px;
          background-color: #e8eaed;
          margin: 24px 0;
        }
        @media (max-width: 640px) {
          .email-container {
            margin: 16px;
            border-radius: 0;
          }
          .header {
            padding: 24px 20px;
          }
          .header-title {
            font-size: 24px;
          }
          .content {
            padding: 24px 20px;
          }
          .info-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .actions-section {
            padding: 20px;
          }
          .actions-grid {
            flex-direction: column;
          }
          .btn {
            width: 100%;
          }
          .footer {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <h1 class="header-title">New Project Inquiry</h1>
            <p class="header-subtitle">You have received a new project request from a potential client</p>
          </div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-header">
              <h2 class="section-title">Client Information</h2>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${companyName || 'Not specified'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  <a href="tel:${phone}">${phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>
          
          <div class="section">
            <div class="section-header">
              <h2 class="section-title">Project Details</h2>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Project Type</div>
                <div class="info-value">${projectType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${budget}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Timeline</div>
                <div class="info-value">
                  <div class="priority-container">
                    <span>${timeline}</span>
                    ${getPriorityBadge(timeline)}
                  </div>
                </div>
              </div>
              <div class="info-item">
                <div class="info-label">Submitted</div>
                <div class="info-value">${submittedAt}</div>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-label">Project Requirements</div>
              <div class="message-container">
                <p class="message-text">${message}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="actions-section">
          <div class="actions-grid">
            <a href="mailto:${email}?subject=Re: Your ${projectType} Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in working with me on your ${projectType} project.%0D%0A%0D%0AAfter reviewing your requirements, I'd like to discuss:%0D%0A%0D%0A- Project scope and technical approach%0D%0A- Detailed timeline and milestones%0D%0A- Investment and payment terms%0D%0A%0D%0AWould you be available for a call this week to discuss further?%0D%0A%0D%0ABest regards" class="btn btn-primary">Reply to Client</a>
            <a href="tel:${phone}" class="btn btn-secondary">Call Client</a>
          </div>
        </div>
        
        <div class="footer">
          <h3 class="footer-title">Recommended Next Steps</h3>
          <ol class="steps-list">
            <li>Review the project requirements and assess feasibility</li>
            <li>Research the client's company and previous work</li>
            <li>Prepare a detailed proposal with timeline and costs</li>
            <li>Schedule a discovery call within 24 hours</li>
          </ol>
        </div>
      </div>
    </body>
    </html>
  `;
};