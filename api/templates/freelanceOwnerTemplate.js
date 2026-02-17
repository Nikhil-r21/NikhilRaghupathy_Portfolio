/**
 * Professional email template for freelance inquiry owner notification
 * Clean, professional design optimized for email clients
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
      return { level: 'High Priority', color: '#dc2626', bgColor: '#fee2e2' };
    } else if (timelineLower.includes('week') || timelineLower.includes('2 weeks')) {
      return { level: 'Medium Priority', color: '#f59e0b', bgColor: '#fef3c7' };
    }
    return { level: 'Normal Priority', color: '#10b981', bgColor: '#d1fae5' };
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
          padding: 30px;
        }
        .header-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .header-subtitle {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
        }
        .priority-banner {
          background-color: ${priority.bgColor};
          padding: 12px 30px;
          text-align: center;
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
          font-size: 14px;
          font-weight: 600;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e5e7eb;
        }
        .info-grid {
          display: table;
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 8px;
        }
        .info-row {
          display: table-row;
        }
        .info-cell {
          display: table-cell;
          padding: 12px;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          vertical-align: top;
        }
        .info-cell:first-child {
          width: 50%;
          padding-right: 8px;
        }
        .info-cell:last-child {
          width: 50%;
          padding-left: 8px;
        }
        .info-label {
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .info-value {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }
        .info-value a {
          color: #0284c7;
          text-decoration: none;
        }
        .requirements-box {
          background-color: #f9fafb;
          border-left: 3px solid #7c3aed;
          border-radius: 4px;
          padding: 16px;
          margin-top: 12px;
        }
        .requirements-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.7;
          white-space: pre-wrap;
          margin: 0;
        }
        .action-section {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          margin: 30px 0;
        }
        .action-title {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }
        .action-buttons {
          display: table;
          width: 100%;
          border-collapse: separate;
          border-spacing: 12px 0;
        }
        .action-button {
          display: table-cell;
          padding: 12px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff !important;
          text-align: center;
        }
        .action-button.primary {
          background-color: #0284c7;
        }
        .action-button.secondary {
          background-color: #10b981;
        }
        .metadata {
          background-color: #f9fafb;
          border-top: 1px solid #e5e7eb;
          padding: 20px 30px;
          font-size: 12px;
          color: #6b7280;
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
            padding: 24px 20px;
          }
          .priority-banner {
            padding: 12px 20px;
          }
          .info-cell {
            display: block;
            width: 100% !important;
            padding: 12px !important;
            margin-bottom: 8px;
          }
          .action-buttons {
            display: block;
          }
          .action-button {
            display: block;
            width: 100%;
            margin-bottom: 12px;
          }
          .metadata-row {
            flex-direction: column;
            gap: 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
          <h1 class="header-title">New Project Inquiry</h1>
          <p class="header-subtitle">A potential client has submitted a project request</p>
        </div>
        
        <!-- Priority Banner -->
        <div class="priority-banner">
          <div class="priority-text">⚡ ${priority.level}</div>
        </div>
        
        <!-- Content -->
        <div class="content">
          <div class="section">
            <div class="section-title">Client Details</div>
            <table class="info-grid">
              <tr class="info-row">
                <td class="info-cell">
                  <div class="info-label">Name</div>
                  <div class="info-value">${name}</div>
                </td>
                <td class="info-cell">
                  <div class="info-label">Email</div>
                  <div class="info-value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </td>
              </tr>
              <tr class="info-row">
                <td class="info-cell">
                  <div class="info-label">Phone</div>
                  <div class="info-value">
                    <a href="tel:${phone}">${phone}</a>
                  </div>
                </td>
                <td class="info-cell">
                  <div class="info-label">Company</div>
                  <div class="info-value">${companyName || 'Not specified'}</div>
                </td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Project Information</div>
            <table class="info-grid">
              <tr class="info-row">
                <td class="info-cell">
                  <div class="info-label">Project Type</div>
                  <div class="info-value">${projectType}</div>
                </td>
                <td class="info-cell">
                  <div class="info-label">Budget Range</div>
                  <div class="info-value">${budget}</div>
                </td>
              </tr>
              <tr class="info-row">
                <td class="info-cell">
                  <div class="info-label">Timeline</div>
                  <div class="info-value">${timeline}</div>
                </td>
                <td class="info-cell">
                  <div class="info-label">Submitted</div>
                  <div class="info-value">${formatTimestamp(submittedAt)} IST</div>
                </td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Project Requirements</div>
            <div class="requirements-box">
              <p class="requirements-text">${message}</p>
            </div>
          </div>
          
          <div class="action-section">
            <div class="action-title">Quick Actions</div>
            <table class="action-buttons">
              <tr>
                <td>
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(projectType)} Project Inquiry&body=${encodeURIComponent(`Hello ${name},\n\nThank you for reaching out regarding your ${projectType} project.\n\nI have reviewed your requirements and would like to discuss the project details further.\n\nPlease let me know when you would be available for a brief call to discuss your needs in more detail.\n\nBest regards,\nNikhil Raghupathy`)}" class="action-button primary">
                    Reply to Client
                  </a>
                </td>
                <td>
                  <a href="tel:${phone}" class="action-button secondary">
                    Call Client
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        
        <!-- Footer -->
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
