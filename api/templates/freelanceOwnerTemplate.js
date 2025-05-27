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

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Freelance Inquiry</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid #e9ecef;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .emoji {
          font-size: 28px;
          margin-bottom: 10px;
          display: block;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }
        .info-item {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .info-label {
          font-weight: 600;
          color: #495057;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .info-value {
          color: #212529;
          font-size: 16px;
          font-weight: 500;
        }
        .contact-info {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
        }
        .contact-info h3 {
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .contact-item {
          margin-bottom: 8px;
          font-size: 15px;
        }
        .message-section {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #dc3545;
          margin-bottom: 25px;
        }
        .message-section h3 {
          color: #dc3545;
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .message-content {
          background-color: white;
          padding: 15px;
          border-radius: 6px;
          line-height: 1.7;
          font-size: 15px;
          border: 1px solid #dee2e6;
        }
        .priority-indicator {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .urgent { background-color: #dc3545; color: white; }
        .high { background-color: #fd7e14; color: white; }
        .medium { background-color: #ffc107; color: #212529; }
        .low { background-color: #28a745; color: white; }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6c757d;
          font-size: 14px;
          border-top: 1px solid #e9ecef;
          margin-top: 30px;
        }
        .action-buttons {
          text-align: center;
          margin: 25px 0;
        }
        .btn {
          display: inline-block;
          padding: 12px 25px;
          margin: 0 10px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-primary {
          background-color: #007bff;
          color: white;
        }
        .btn-success {
          background-color: #28a745;
          color: white;
        }
        @media (max-width: 600px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .btn {
            display: block;
            margin: 10px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="emoji">🚀</span>
          <h1>New Freelance Project Inquiry</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Submitted on ${submittedAt}</p>
        </div>

        <div class="contact-info">
          <h3>👤 Client Information</h3>
          <div class="contact-item"><strong>Name:</strong> ${name}</div>
          <div class="contact-item"><strong>Email:</strong> <a href="mailto:${email}" style="color: white;">${email}</a></div>
          <div class="contact-item"><strong>Phone:</strong> <a href="tel:${phone}" style="color: white;">${phone}</a></div>
          <div class="contact-item"><strong>Company:</strong> ${companyName}</div>
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
              ${timeline}
              ${timeline.includes('Urgent') ? '<span class="priority-indicator urgent">High Priority</span>' : 
                timeline.includes('week') ? '<span class="priority-indicator high">Medium Priority</span>' : 
                '<span class="priority-indicator low">Normal Priority</span>'}
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Submission Time</div>
            <div class="info-value">${submittedAt}</div>
          </div>
        </div>

        <div class="message-section">
          <h3>📋 Project Requirements</h3>
          <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
        </div>

        <div class="action-buttons">
          <a href="mailto:${email}?subject=Re: Your ${projectType} Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in working with me on your ${projectType} project.%0D%0A%0D%0AAfter reviewing your requirements, I'd like to discuss:%0D%0A%0D%0A- Project scope and technical approach%0D%0A- Detailed timeline and milestones%0D%0A- Investment and payment terms%0D%0A%0D%0AWould you be available for a call this week to discuss further?%0D%0A%0D%0ABest regards,%0D%0ANikhil" class="btn btn-primary">Reply to Client</a>
          <a href="tel:${phone}" class="btn btn-success">Call Client</a>
        </div>

        <div class="footer">
          <p><strong>Next Steps:</strong></p>
          <p>1. Review the project requirements thoroughly<br>
          2. Prepare a detailed proposal with timeline and costs<br>
          3. Schedule a call to discuss project details<br>
          4. Send proposal within 24 hours</p>
        </div>
      </div>
    </body>
    </html>
  `;
};