// templates/freelanceSenderTemplate.js

export const createFreelanceSenderEmailTemplate = (data) => {
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
      <title>Thank You for Your Project Inquiry</title>
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
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
          font-size: 32px;
          margin-bottom: 10px;
          display: block;
        }
        .greeting {
          font-size: 18px;
          color: #212529;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .content-section {
          margin-bottom: 25px;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #28a745;
        }
        .content-section h3 {
          color: #28a745;
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 20px 0;
        }
        .summary-item {
          background-color: white;
          padding: 15px;
          border-radius: 6px;
          border: 1px solid #dee2e6;
        }
        .summary-label {
          font-weight: 600;
          color: #495057;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .summary-value {
          color: #212529;
          font-size: 14px;
          font-weight: 500;
        }
        .timeline-section {
          background: linear-gradient(135deg, #007bff 0%, #6f42c1 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          text-align: center;
        }
        .timeline-section h3 {
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .timeline-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .timeline-step {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 6px;
          text-align: center;
        }
        .step-number {
          background-color: white;
          color: #007bff;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          font-weight: bold;
          font-size: 14px;
        }
        .contact-section {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-left: 4px solid #ffc107;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
        }
        .contact-section h3 {
          color: #856404;
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          color: #856404;
          font-size: 14px;
        }
        .contact-item strong {
          margin-right: 10px;
          min-width: 60px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6c757d;
          font-size: 14px;
          border-top: 1px solid #e9ecef;
          margin-top: 30px;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          padding: 8px 16px;
          background-color: #f8f9fa;
          color: #495057;
          text-decoration: none;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid #dee2e6;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: #007bff;
          color: white;
          border-color: #007bff;
        }
        @media (max-width: 600px) {
          .summary-grid, .timeline-steps, .contact-info {
            grid-template-columns: 1fr;
          }
          .social-links a {
            display: block;
            margin: 5px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="emoji">✅</span>
          <h1>Thank You for Your Inquiry!</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Your project inquiry has been received</p>
        </div>

        <div class="greeting">
          Hello ${name},
        </div>

        <div class="content-section">
          <h3>🎉 Inquiry Received Successfully</h3>
          <p>Thank you for considering me for your <strong>${projectType}</strong> project. I'm excited about the opportunity to work with ${companyName !== 'Not specified' ? companyName : 'you'} and help bring your vision to life.</p>
          <p><strong>Submission Time:</strong> ${submittedAt}</p>
        </div>

        <div class="content-section">
          <h3>📋 Your Project Summary</h3>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-label">Project Type</div>
              <div class="summary-value">${projectType}</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Budget Range</div>
              <div class="summary-value">${budget}</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Timeline</div>
              <div class="summary-value">${timeline}</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Company</div>
              <div class="summary-value">${companyName}</div>
            </div>
          </div>
          <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6; margin-top: 15px;">
            <div class="summary-label">Project Requirements</div>
            <div style="color: #212529; font-size: 14px; line-height: 1.6; margin-top: 8px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>

        <div class="timeline-section">
          <h3>⏱️ What Happens Next?</h3>
          <p>Here's what you can expect in the coming days:</p>
          <div class="timeline-steps">
            <div class="timeline-step">
              <div class="step-number">1</div>
              <div><strong>Review</strong><br>I'll analyze your requirements thoroughly</div>
            </div>
            <div class="timeline-step">
              <div class="step-number">2</div>
              <div><strong>Proposal</strong><br>Detailed proposal with timeline & costs</div>
            </div>
            <div class="timeline-step">
              <div class="step-number">3</div>
              <div><strong>Discussion</strong><br>Call to discuss and refine the approach</div>
            </div>
            <div class="timeline-step">
              <div class="step-number">4</div>
              <div><strong>Start</strong><br>Begin the project once everything is agreed</div>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <h3>📞 Need to Reach Me?</h3>
          <p>If you have any urgent questions or additional information to share, feel free to contact me directly:</p>
          <div class="contact-info">
            <div class="contact-item">
              <strong>Email:</strong> <a href="mailto:${process.env.EMAIL || 'your.email@example.com'}" style="color: #856404;">${process.env.EMAIL || 'your.email@example.com'}</a>
            </div>
            <div class="contact-item">
              <strong>Phone:</strong> <a href="tel:+919876543210" style="color: #856404;">+91 98765 43210</a>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h3>🚀 Why Work With Me?</h3>
          <ul style="margin: 15px 0; padding-left: 20px;">
            <li><strong>5+ Years Experience</strong> in DevOps and Cloud Infrastructure</li>
            <li><strong>Proven Track Record</strong> with startups and enterprises across India</li>
            <li><strong>End-to-End Solutions</strong> from planning to deployment and maintenance</li>
            <li><strong>24/7 Support</strong> during critical deployments and launches</li>
            <li><strong>Cost-Effective</strong> solutions tailored for the Indian market</li>
          </ul>
        </div>

        <div class="social-links">
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          <a href="https://github.com/yourprofile">GitHub</a>
          <a href="https://yourportfolio.com">Portfolio</a>
        </div>

        <div class="footer">
          <p><strong>Response Time:</strong> I typically respond to all inquiries within 24 hours during business days.</p>
          <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM IST</p>
          <br>
          <p style="font-size: 12px; color: #868e96;">
            This is an automated confirmation email. Please do not reply to this email address.
            <br>For any questions, please use the contact information provided above.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};