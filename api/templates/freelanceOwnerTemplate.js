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

  // Format timestamp to IST railway format (24-hour)
  const formatToIST = (timestamp) => {
    const date = new Date(timestamp);
    const istOptions = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    
    const formatted = date.toLocaleString('en-IN', istOptions);
    return formatted.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2})/, '$3-$2-$1 at $4 hrs IST');
  };

  // Simple priority indicator
  const getPriorityLevel = (timeline) => {
    if (timeline.toLowerCase().includes('urgent') || timeline.toLowerCase().includes('asap')) {
      return 'High';
    } else if (timeline.toLowerCase().includes('week')) {
      return 'Medium';
    }
    return 'Normal';
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Inquiry - ${name}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.5;
          color: #323130;
          background-color: #faf9f8;
          margin: 0;
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
        }
        
        .header {
          padding: 24px 32px;
          border-bottom: 1px solid #e1dfdd;
          background-color: #ffffff;
        }
        
        .header h1 {
          margin: 0 0 4px 0;
          font-size: 20px;
          font-weight: 600;
          color: #323130;
        }
        
        .header p {
          margin: 0;
          font-size: 14px;
          color: #605e5c;
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
        
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #323130;
          margin: 0 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #f3f2f1;
        }
        
        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
        }
        
        .field {
          display: flex;
          flex-direction: column;
        }
        
        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: #605e5c;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .field-value {
          font-size: 14px;
          color: #323130;
        }
        
        .field-value a {
          color: #0078d4;
          text-decoration: none;
        }
        
        .field-value a:hover {
          text-decoration: underline;
        }
        
        .priority {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .priority-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .priority-high {
          background-color: #d13438;
        }
        
        .priority-medium {
          background-color: #ff8c00;
        }
        
        .priority-normal {
          background-color: #107c10;
        }
        
        .message-box {
          background-color: #f8f7f6;
          border: 1px solid #e1dfdd;
          border-radius: 4px;
          padding: 16px;
          margin-top: 8px;
        }
        
        .message-text {
          font-size: 14px;
          color: #323130;
          margin: 0;
          white-space: pre-wrap;
          line-height: 1.5;
        }
        
        .actions {
          padding: 24px 32px;
          background-color: #f8f7f6;
          border-top: 1px solid #e1dfdd;
          display: flex;
          gap: 12px;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid;
          min-height: 32px;
          cursor: pointer;
        }
        
        .btn-primary {
          background-color: #0078d4;
          border-color: #0078d4;
          color: #ffffff;
        }
        
        .btn-primary:hover {
          background-color: #106ebe;
          border-color: #106ebe;
        }
        
        .btn-secondary {
          background-color: #ffffff;
          border-color: #8a8886;
          color: #323130;
        }
        
        .btn-secondary:hover {
          background-color: #f3f2f1;
        }
        
        .full-width {
          grid-column: 1 / -1;
        }
        
        .timestamp {
          color: #605e5c;
          font-size: 12px;
        }
        
        @media (max-width: 640px) {
          body {
            padding: 8px;
          }
          
          .container {
            border-radius: 0;
            border-left: none;
            border-right: none;
          }
          
          .header, .content, .actions {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .field-grid {
            grid-template-columns: 1fr;
          }
          
          .actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Project Inquiry</h1>
          <p>A potential client has submitted a project request</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2 class="section-title">Client Details</h2>
            <div class="field-grid">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${companyName || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">
                  <a href="tel:${phone}">${phone}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">Project Information</h2>
            <div class="field-grid">
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectType}</div>
              </div>
              <div class="field">
                <div class="field-label">Budget</div>
                <div class="field-value">${budget}</div>
              </div>
              <div class="field">
                <div class="field-label">Timeline</div>
                <div class="field-value">
                  <div class="priority">
                    <span class="priority-indicator priority-${getPriorityLevel(timeline).toLowerCase()}"></span>
                    ${timeline}
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Submitted</div>
                <div class="field-value timestamp">${formatToIST(submittedAt)}</div>
              </div>
              <div class="field full-width">
                <div class="field-label">Requirements</div>
                <div class="message-box">
                  <p class="message-text">${message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="actions">
          <a href="mailto:${email}?subject=Re: ${projectType} Project Inquiry&body=Hello ${name},%0D%0A%0D%0AThank you for reaching out regarding your ${projectType} project.%0D%0A%0D%0AI have reviewed your requirements and would like to discuss the project details further.%0D%0A%0D%0APlease let me know when you would be available for a brief call to discuss your needs in more detail.%0D%0A%0D%0ABest regards" 
             class="btn btn-primary">Reply to Client</a>
          <a href="tel:${phone}" class="btn btn-secondary">Call Client</a>
        </div>
      </div>
    </body>
    </html>
  `;
};