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
      return `<span style="background-color: #D13438; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">HIGH PRIORITY</span>`;
    } else if (timeline.includes('week')) {
      return `<span style="background-color: #FF8C00; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">MEDIUM PRIORITY</span>`;
    }
    return `<span style="background-color: #107C10; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">STANDARD</span>`;
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>New Freelance Project Inquiry</title>
      <style>
        :root {
          color-scheme: light;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5;
          color: #252525;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .wrapper {
          max-width: 640px;
          margin: 0 auto;
          padding: 16px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .header {
          background-color: #0078D4;
          padding: 24px;
          text-align: center;
        }
        .logo {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }
        .header-title {
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }
        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          margin: 8px 0 0 0;
        }
        .content {
          padding: 24px;
        }
        .section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #505A64;
          margin: 0 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #E1E1E1;
        }
        .card {
          background-color: #F9F9F9;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .card-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -8px;
        }
        .card-col {
          flex: 1 0 calc(50% - 16px);
          margin: 0 8px 16px;
          min-width: 200px;
        }
        .field {
          margin-bottom: 16px;
        }
        .field:last-child {
          margin-bottom: 0;
        }
        .field-label {
          font-size: 12px;
          font-weight: 500;
          color: #505A64;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          font-size: 15px;
          color: #252525;
        }
        .message-box {
          background-color: white;
          border: 1px solid #E1E1E1;
          border-left: 4px solid #0078D4;
          border-radius: 4px;
          padding: 16px;
          margin-top: 8px;
        }
        .actions {
          padding: 16px 24px;
          background-color: #F9F9F9;
          text-align: center;
        }
        .btn {
          display: inline-block;
          background-color: #0078D4;
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 10px 24px;
          border-radius: 4px;
          margin: 0 8px 8px 0;
          transition: background-color 0.2s;
        }
        .btn-secondary {
          background-color: #107C10;
        }
        .btn:hover {
          background-color: #106EBE;
        }
        .btn-secondary:hover {
          background-color: #0B6A0B;
        }
        .footer {
          padding: 24px;
          color: #505A64;
          font-size: 13px;
          border-top: 1px solid #E1E1E1;
        }
        .footer-title {
          font-weight: 600;
          margin-bottom: 12px;
        }
        .footer-steps {
          margin: 0;
          padding: 0 0 0 24px;
        }
        .footer-steps li {
          margin-bottom: 8px;
        }
        .footer-steps li:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 600px) {
          .card-col {
            flex: 1 0 100%;
          }
          .btn {
            display: block;
            margin: 0 0 12px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="logo">📨</div>
            <h1 class="header-title">New Project Inquiry</h1>
            <p class="header-subtitle">A potential client has submitted a project request</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h2 class="section-title">Client Information</h2>
              <div class="card">
                <div class="card-row">
                  <div class="card-col">
                    <div class="field">
                      <div class="field-label">Name</div>
                      <div class="field-value">${name}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Email</div>
                      <div class="field-value">
                        <a href="mailto:${email}" style="color: #0078D4; text-decoration: none;">${email}</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-col">
                    <div class="field">
                      <div class="field-label">Phone</div>
                      <div class="field-value">
                        <a href="tel:${phone}" style="color: #0078D4; text-decoration: none;">${phone}</a>
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-label">Company</div>
                      <div class="field-value">${companyName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">Project Details</h2>
              <div class="card">
                <div class="card-row">
                  <div class="card-col">
                    <div class="field">
                      <div class="field-label">Project Type</div>
                      <div class="field-value">${projectType}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Budget Range</div>
                      <div class="field-value">${budget}</div>
                    </div>
                  </div>
                  <div class="card-col">
                    <div class="field">
                      <div class="field-label">Timeline</div>
                      <div class="field-value">
                        ${timeline} ${getPriorityBadge(timeline)}
                      </div>
                    </div>
                    <div class="field">
                      <div class="field-label">Submitted</div>
                      <div class="field-value">${submittedAt}</div>
                    </div>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-label">Project Requirements</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="actions">
            <a href="mailto:${email}?subject=Re: Your ${projectType} Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in working with me on your ${projectType} project.%0D%0A%0D%0AAfter reviewing your requirements, I'd like to discuss:%0D%0A%0D%0A- Project scope and technical approach%0D%0A- Detailed timeline and milestones%0D%0A- Investment and payment terms%0D%0A%0D%0AWould you be available for a call this week to discuss further?%0D%0A%0D%0ABest regards,%0D%0ANikhil" class="btn">Reply to Client</a>
            <a href="tel:${phone}" class="btn btn-secondary">Call Client</a>
          </div>
          
          <div class="footer">
            <div class="footer-title">Recommended Next Steps:</div>
            <ol class="footer-steps">
              <li>Review the project requirements thoroughly</li>
              <li>Prepare a detailed proposal with timeline and costs</li>
              <li>Schedule a call to discuss project details</li>
              <li>Send proposal within 24 hours</li>
            </ol>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};