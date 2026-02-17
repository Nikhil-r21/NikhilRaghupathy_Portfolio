/**
 * Professional email template for freelance inquiry owner notification
 * AWS/Azure style - clean, minimal, professional
 */
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

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getPriorityLevel = (timeline) => {
    const timelineLower = timeline.toLowerCase();
    if (timelineLower.includes('urgent') || timelineLower.includes('asap') || timelineLower.includes('1 week')) {
      return { level: 'High Priority', color: '#d13212' };
    } else if (timelineLower.includes('week') || timelineLower.includes('2 weeks')) {
      return { level: 'Medium Priority', color: '#ff9900' };
    }
    return { level: 'Normal Priority', color: '#232f3e' };
  };

  const priority = getPriorityLevel(timeline);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>New Project Inquiry - ${name}</title>
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
        .priority-banner {
          padding: 12px 30px;
          background-color: #f9fafb;
          border-bottom: 1px solid #eaeded;
        }
        .priority-text {
          font-size: 13px;
          font-weight: 600;
          color: ${priority.color};
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .info-row {
          border-bottom: 1px solid #eaeded;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          padding: 10px 0;
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          width: 140px;
          vertical-align: top;
        }
        .info-value {
          padding: 10px 0;
          font-size: 14px;
          color: #545b64;
          vertical-align: top;
        }
        .info-value a {
          color: #0073bb;
          text-decoration: none;
        }
        .requirements-section {
          margin: 28px 0;
        }
        .requirements-title {
          font-size: 13px;
          font-weight: 600;
          color: #232f3e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .requirements-text {
          font-size: 14px;
          color: #545b64;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .action-section {
          padding: 24px 0;
        }
        .action-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #232f3e;
          color: #ffffff !important;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          margin-right: 12px;
        }
        .action-button.secondary {
          background-color: #545b64;
        }
        .metadata {
          border-top: 1px solid #eaeded;
          padding: 20px 30px;
          font-size: 12px;
          color: #879196;
        }
        .metadata-row {
          display: flex;
          justify-content: space-between;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 30px 20px 24px 20px;
          }
          .priority-banner {
            padding: 12px 20px;
          }
          .info-label {
            width: 100px;
          }
          .action-button {
            display: block;
            margin-bottom: 12px;
            margin-right: 0;
          }
          .metadata-row {
            flex-direction: column;
            gap: 4px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <h1 class="header-title">New Project Inquiry</h1>
        </div>
        
        <div class="priority-banner">
          <div class="priority-text">${priority.level}</div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Client Details</div>
            <table class="info-table">
              <tr class="info-row">
                <td class="info-label">Name:</td>
                <td class="info-value">${name}</td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Email:</td>
                <td class="info-value">
                  <a href="mailto:${email}">${email}</a>
                </td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Phone:</td>
                <td class="info-value">
                  <a href="tel:${phone}">${phone}</a>
                </td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Company:</td>
                <td class="info-value">${companyName || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Project Information</div>
            <table class="info-table">
              <tr class="info-row">
                <td class="info-label">Project Type:</td>
                <td class="info-value">${projectType}</td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Budget Range:</td>
                <td class="info-value">${budget}</td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Timeline:</td>
                <td class="info-value">${timeline}</td>
              </tr>
              <tr class="info-row">
                <td class="info-label">Submitted:</td>
                <td class="info-value">${formatTimestamp(submittedAt)} IST</td>
              </tr>
            </table>
          </div>
          
          <div class="requirements-section">
            <div class="requirements-title">Project Requirements</div>
            <div class="requirements-text">${message}</div>
          </div>
          
          <div class="action-section">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(projectType)} Project Inquiry&body=${encodeURIComponent(`Hello ${name},\n\nThank you for reaching out regarding your ${projectType} project.\n\nI have reviewed your requirements and would like to discuss the project details further.\n\nPlease let me know when you would be available for a brief call to discuss your needs in more detail.\n\nBest regards,\nNikhil Raghupathy`)}" class="action-button">
              Reply to Client
            </a>
            <a href="tel:${phone}" class="action-button secondary">
              Call Client
            </a>
          </div>
        </div>
        
        <div class="metadata">
          <div class="metadata-row">
            <div>Portfolio Freelance Inquiry Form</div>
            <div>${formatTimestamp(submittedAt)} IST</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
