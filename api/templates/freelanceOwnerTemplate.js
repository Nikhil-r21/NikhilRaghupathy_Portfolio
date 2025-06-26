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
      return { level: 'High', color: '#d13438' };
    } else if (timeline.toLowerCase().includes('week')) {
      return { level: 'Medium', color: '#ff8c00' };
    }
    return { level: 'Normal', color: '#107c10' };
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
    </head>
    <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
      
      <!-- Main Container -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5; padding:20px 0;">
        <tr>
          <td align="center">
            
            <!-- Email Container -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); max-width:600px;">
              
              <!-- Header -->
              <tr>
                <td style="padding:30px 40px; border-bottom:3px solid #0078d4; background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%);">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:bold; font-family:Arial, sans-serif;">
                          🚀 New Project Inquiry
                        </h1>
                        <p style="margin:8px 0 0 0; color:#e3f2fd; font-size:16px; font-family:Arial, sans-serif;">
                          A potential client has submitted a project request
                        </p>
                      </td>
                      <td width="80" align="right">
                        <div style="width:60px; height:60px; background-color:rgba(255,255,255,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:24px;">
                          💼
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Priority Alert -->
              <tr>
                <td style="padding:0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${priority.color}; color:#ffffff;">
                    <tr>
                      <td style="padding:12px 40px; text-align:center;">
                        <strong style="font-family:Arial, sans-serif; font-size:14px;">
                          ⚡ ${priority.level} Priority Project
                        </strong>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Client Details Section -->
              <tr>
                <td style="padding:30px 40px 0 40px;">
                  <h2 style="margin:0 0 20px 0; color:#333333; font-size:18px; font-weight:bold; font-family:Arial, sans-serif; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">
                    👤 Client Details
                  </h2>
                </td>
              </tr>
              
              <tr>
                <td style="padding:0 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="50%" style="padding-right:20px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#f8f9fa; padding:15px; border-radius:6px; border-left:4px solid #0078d4;">
                                <div style="color:#666; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Name</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">${name}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#f8f9fa; padding:15px; border-radius:6px; border-left:4px solid #28a745;">
                                <div style="color:#666; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Email</div>
                                <div style="color:#0078d4; font-size:14px; font-family:Arial, sans-serif;">
                                  <a href="mailto:${email}" style="color:#0078d4; text-decoration:none;">${email}</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" style="padding-left:20px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#f8f9fa; padding:15px; border-radius:6px; border-left:4px solid #ffc107;">
                                <div style="color:#666; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Company</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">${companyName || 'Not specified'}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#f8f9fa; padding:15px; border-radius:6px; border-left:4px solid #17a2b8;">
                                <div style="color:#666; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Phone</div>
                                <div style="color:#0078d4; font-size:14px; font-family:Arial, sans-serif;">
                                  <a href="tel:${phone}" style="color:#0078d4; text-decoration:none;">${phone}</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Project Information Section -->
              <tr>
                <td style="padding:30px 40px 0 40px;">
                  <h2 style="margin:0 0 20px 0; color:#333333; font-size:18px; font-weight:bold; font-family:Arial, sans-serif; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">
                    📋 Project Information
                  </h2>
                </td>
              </tr>
              
              <tr>
                <td style="padding:0 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="50%" style="padding-right:20px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#fff3cd; padding:15px; border-radius:6px; border-left:4px solid #ffc107;">
                                <div style="color:#856404; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Project Type</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">${projectType}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#d1ecf1; padding:15px; border-radius:6px; border-left:4px solid #17a2b8;">
                                <div style="color:#0c5460; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Timeline</div>
                                <div style="color:#333; font-size:14px; font-family:Arial, sans-serif;">
                                  <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${priority.color}; margin-right:8px;"></span>
                                  ${timeline}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" style="padding-left:20px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#d4edda; padding:15px; border-radius:6px; border-left:4px solid #28a745;">
                                <div style="color:#155724; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Budget</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">💰 ${budget}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;">
                              <div style="background-color:#f8f9fa; padding:15px; border-radius:6px; border-left:4px solid #6c757d;">
                                <div style="color:#6c757d; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:5px; font-family:Arial, sans-serif;">Submitted</div>
                                <div style="color:#333; font-size:12px; font-family:Arial, sans-serif;">📅 ${formatToIST(submittedAt)}</div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Requirements Section -->
              <tr>
                <td style="padding:30px 40px 0 40px;">
                  <h2 style="margin:0 0 15px 0; color:#333333; font-size:18px; font-weight:bold; font-family:Arial, sans-serif; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">
                    📝 Project Requirements
                  </h2>
                  <div style="background-color:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:20px; margin-bottom:20px;">
                    <p style="margin:0; color:#333; font-size:14px; line-height:1.6; font-family:Arial, sans-serif; white-space:pre-wrap;">${message}</p>
                  </div>
                </td>
              </tr>
              
              <!-- Action Buttons -->
              <tr>
                <td style="padding:20px 40px 40px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-right:15px;">
                              <a href="mailto:${email}?subject=Re: ${projectType} Project Inquiry&body=Hello ${name},%0D%0A%0D%0AThank you for reaching out regarding your ${projectType} project.%0D%0A%0D%0AI have reviewed your requirements and would like to discuss the project details further.%0D%0A%0D%0APlease let me know when you would be available for a brief call to discuss your needs in more detail.%0D%0A%0D%0ABest regards" 
                                 style="background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%); color:#ffffff; padding:15px 30px; text-decoration:none; border-radius:25px; font-weight:bold; font-size:16px; font-family:Arial, sans-serif; display:inline-block; box-shadow:0 4px 12px rgba(0,120,212,0.3);">
                                📧 Reply to Client
                              </a>
                            </td>
                            <td>
                              <a href="tel:${phone}" 
                                 style="background-color:#28a745; color:#ffffff; padding:15px 30px; text-decoration:none; border-radius:25px; font-weight:bold; font-size:16px; font-family:Arial, sans-serif; display:inline-block; box-shadow:0 4px 12px rgba(40,167,69,0.3);">
                                📞 Call Client
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding:20px 40px; background-color:#f8f9fa; border-top:1px solid #dee2e6; text-align:center;">
                  <p style="margin:0; color:#6c757d; font-size:12px; font-family:Arial, sans-serif;">
                    This email was generated automatically from your freelance inquiry form.
                  </p>
                </td>
              </tr>
              
            </table>
            
          </td>
        </tr>
      </table>
      
    </body>
    </html>
  `;
};