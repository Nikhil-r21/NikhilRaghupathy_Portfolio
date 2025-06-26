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

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Thank You - Project Inquiry Received</title>
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
              
              <!-- Header with Success Icon -->
              <tr>
                <td style="padding:40px 40px 30px 40px; text-align:center; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); border-radius:8px 8px 0 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <!-- Success Icon -->
                        <div style="width:80px; height:80px; background-color:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 20px auto; display:flex; align-items:center; justify-content:center; font-size:40px;">
                          ✅
                        </div>
                        <h1 style="margin:0 0 10px 0; color:#ffffff; font-size:28px; font-weight:bold; font-family:Arial, sans-serif;">
                          Thank You, ${name}!
                        </h1>
                        <p style="margin:0; color:#e8f5e8; font-size:16px; font-family:Arial, sans-serif;">
                          Your project inquiry has been received and is being reviewed
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Confirmation Message -->
              <tr>
                <td style="padding:30px 40px 20px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <div style="background-color:#d4edda; border:1px solid #c3e6cb; border-left:4px solid #28a745; border-radius:6px; padding:20px; margin-bottom:25px;">
                          <p style="margin:0; color:#155724; font-size:16px; font-family:Arial, sans-serif; line-height:1.5;">
                            <strong>Great news!</strong> I've received your inquiry for a <strong>${projectType}</strong> project. Thank you for providing detailed information about your requirements.
                          </p>
                        </div>
                        
                        <p style="margin:0 0 20px 0; color:#333; font-size:15px; font-family:Arial, sans-serif; line-height:1.6;">
                          Your inquiry was submitted on <strong style="color:#28a745;">${formatToIST(submittedAt)}</strong> and I'm excited to learn more about your project needs.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Project Summary Section -->
              <tr>
                <td style="padding:0 40px 20px 40px;">
                  <h2 style="margin:0 0 20px 0; color:#333333; font-size:20px; font-weight:bold; font-family:Arial, sans-serif; border-bottom:3px solid #28a745; padding-bottom:10px;">
                    📋 Your Project Summary
                  </h2>
                </td>
              </tr>
              
              <tr>
                <td style="padding:0 40px 30px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="50%" style="padding-right:15px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:0 0 15px 0;">
                              <div style="background-color:#fff3cd; border:1px solid #ffeaa7; border-left:4px solid #fdcb6e; border-radius:6px; padding:15px;">
                                <div style="color:#856404; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:8px; font-family:Arial, sans-serif;">Project Type</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">${projectType}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:0 0 15px 0;">
                              <div style="background-color:#d1ecf1; border:1px solid #bee5eb; border-left:4px solid #17a2b8; border-radius:6px; padding:15px;">
                                <div style="color:#0c5460; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:8px; font-family:Arial, sans-serif;">Timeline</div>
                                <div style="color:#333; font-size:15px; font-family:Arial, sans-serif;">📅 ${timeline}</div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" style="padding-left:15px; vertical-align:top;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:0 0 15px 0;">
                              <div style="background-color:#d4edda; border:1px solid #c3e6cb; border-left:4px solid #28a745; border-radius:6px; padding:15px;">
                                <div style="color:#155724; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:8px; font-family:Arial, sans-serif;">Budget Range</div>
                                <div style="color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">💰 ${budget}</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:0 0 15px 0;">
                              <div style="background-color:#f8f9fa; border:1px solid #dee2e6; border-left:4px solid #6c757d; border-radius:6px; padding:15px;">
                                <div style="color:#6c757d; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:8px; font-family:Arial, sans-serif;">Company</div>
                                <div style="color:#333; font-size:15px; font-family:Arial, sans-serif;">🏢 ${companyName || 'Individual Client'}</div>
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
                <td style="padding:0 40px 30px 40px;">
                  <h3 style="margin:0 0 15px 0; color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">
                    📝 Your Requirements
                  </h3>
                  <div style="background-color:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:20px;">
                    <p style="margin:0; color:#333; font-size:14px; line-height:1.6; font-family:Arial, sans-serif; white-space:pre-wrap;">${message}</p>
                  </div>
                </td>
              </tr>
              
              <!-- Next Steps Section -->
              <tr>
                <td style="padding:0 40px 30px 40px;">
                  <div style="background-color:#e7f3ff; border:1px solid #b8daff; border-left:4px solid #007bff; border-radius:8px; padding:25px;">
                    <h3 style="margin:0 0 20px 0; color:#004085; font-size:18px; font-weight:bold; font-family:Arial, sans-serif;">
                      🚀 What Happens Next?
                    </h3>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:10px 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td width="30" style="vertical-align:top; padding-top:2px;">
                                <div style="width:24px; height:24px; background-color:#007bff; color:#ffffff; border-radius:50%; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family:Arial, sans-serif;">1</div>
                              </td>
                              <td style="padding-left:15px;">
                                <div style="color:#004085; font-weight:bold; font-size:15px; margin-bottom:5px; font-family:Arial, sans-serif;">Project Analysis</div>
                                <div style="color:#0056b3; font-size:13px; line-height:1.4; font-family:Arial, sans-serif;">I'll carefully review your requirements and assess the project scope within 24 hours.</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding:15px 0 10px 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td width="30" style="vertical-align:top; padding-top:2px;">
                                <div style="width:24px; height:24px; background-color:#007bff; color:#ffffff; border-radius:50%; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family:Arial, sans-serif;">2</div>
                              </td>
                              <td style="padding-left:15px;">
                                <div style="color:#004085; font-weight:bold; font-size:15px; margin-bottom:5px; font-family:Arial, sans-serif;">Detailed Proposal</div>
                                <div style="color:#0056b3; font-size:13px; line-height:1.4; font-family:Arial, sans-serif;">You'll receive a comprehensive proposal with timeline, approach, and investment details.</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding:15px 0 10px 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td width="30" style="vertical-align:top; padding-top:2px;">
                                <div style="width:24px; height:24px; background-color:#007bff; color:#ffffff; border-radius:50%; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family:Arial, sans-serif;">3</div>
                              </td>
                              <td style="padding-left:15px;">
                                <div style="color:#004085; font-weight:bold; font-size:15px; margin-bottom:5px; font-family:Arial, sans-serif;">Discovery Call</div>
                                <div style="color:#0056b3; font-size:13px; line-height:1.4; font-family:Arial, sans-serif;">We'll schedule a call to discuss your vision and clarify any questions.</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding:15px 0 5px 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td width="30" style="vertical-align:top; padding-top:2px;">
                                <div style="width:24px; height:24px; background-color:#28a745; color:#ffffff; border-radius:50%; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family:Arial, sans-serif;">✓</div>
                              </td>
                              <td style="padding-left:15px;">
                                <div style="color:#004085; font-weight:bold; font-size:15px; margin-bottom:5px; font-family:Arial, sans-serif;">Project Kickoff</div>
                                <div style="color:#0056b3; font-size:13px; line-height:1.4; font-family:Arial, sans-serif;">Once everything is agreed upon, we'll begin bringing your project to life!</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              
              <!-- Contact Information -->
              <tr>
                <td style="padding:0 40px 30px 40px;">
                  <div style="background-color:#fff3cd; border:1px solid #ffeaa7; border-left:4px solid #f39c12; border-radius:8px; padding:20px;">
                    <h3 style="margin:0 0 15px 0; color:#856404; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">
                      📞 Need to Reach Me?
                    </h3>
                    <p style="margin:0 0 15px 0; color:#856404; font-size:14px; font-family:Arial, sans-serif;">
                      If you have additional information or urgent questions, feel free to contact me directly:
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="50%" style="padding-right:15px;">
                          <div style="color:#856404; font-size:14px; font-family:Arial, sans-serif;">
                            <strong>📧 Email:</strong><br>
                            <a href="mailto:${process.env.EMAIL || 'your.email@example.com'}" style="color:#007bff; text-decoration:none;">${process.env.EMAIL || 'your.email@example.com'}</a>
                          </div>
                        </td>
                        <td width="50%" style="padding-left:15px;">
                          <div style="color:#856404; font-size:14px; font-family:Arial, sans-serif;">
                            <strong>📱 Phone:</strong><br>
                            <a href="tel:+918428754385" style="color:#007bff; text-decoration:none;">+91 84287 54385</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              
              <!-- Response Timeline -->
              <tr>
                <td style="padding:0 40px 40px 40px;">
                  <div style="background-color:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:20px; text-align:center;">
                    <h3 style="margin:0 0 15px 0; color:#333; font-size:16px; font-weight:bold; font-family:Arial, sans-serif;">
                      ⏰ Response Timeline
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="text-align:center;">
                          <div style="color:#666; font-size:14px; font-family:Arial, sans-serif; line-height:1.6;">
                            <div style="margin-bottom:8px;">
                              <strong style="color:#28a745;">Standard Response:</strong> Within 24 hours during business days
                            </div>
                            <div>
                              <strong style="color:#007bff;">Business Hours:</strong> 19:00 - 23:00 hrs IST (Weekdays) | 10:00 - 19:00 hrs IST (Weekends)
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding:25px 40px; background-color:#f8f9fa; border-top:1px solid #dee2e6; text-align:center; border-radius:0 0 8px 8px;">
                  <p style="margin:0; color:#6c757d; font-size:12px; font-family:Arial, sans-serif; line-height:1.5;">
                    This is an automated confirmation email. Please do not reply directly to this message.<br>
                    For questions or additional information, please use the contact details provided above.
                  </p>
                  <div style="margin-top:15px; padding-top:15px; border-top:1px solid #dee2e6;">
                    <p style="margin:0; color:#adb5bd; font-size:11px; font-family:Arial, sans-serif;">
                      Thank you for considering me for your project. I look forward to working with you! 🚀
                    </p>
                  </div>
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