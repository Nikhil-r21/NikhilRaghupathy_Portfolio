import nodemailer from 'nodemailer';
import { createFreelanceOwnerEmailTemplate } from './templates/freelanceOwnerTemplate.js';
import { createFreelanceSenderEmailTemplate } from './templates/freelanceSenderTemplate.js';

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Your Gmail address
      pass: process.env.APP_PASSWORD // Your Gmail App Password
    }
  });
};

// CORS headers helper
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

// Validate Indian phone number
const validateIndianPhone = (phone) => {
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

// Main handler function
export default async function handler(req, res) {
  // Set CORS headers
  setCorsHeaders(res);

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      message, 
      companyName 
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !budget || !timeline || !message) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be filled'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Validate phone number
    if (!validateIndianPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid Indian phone number'
      });
    }

    // Validate message length
    if (message.length < 20) {
      return res.status(400).json({
        success: false,
        message: 'Project requirements must be at least 20 characters long'
      });
    }

    const inquiryData = { 
      name, 
      email, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      message, 
      companyName: companyName || 'Not specified',
      submittedAt: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const transporter = createTransporter();

    // Email to owner (you)
    const ownerMailOptions = {
      from: `"Portfolio Freelance Inquiry" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // Your email
      subject: `🚀 New Freelance Inquiry: ${projectType} - ${name}`,
      html: createFreelanceOwnerEmailTemplate(inquiryData),
      replyTo: email // Allow direct reply to sender
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: `"Nikhil Raghupathy" <${process.env.EMAIL}>`,
      to: email,
      subject: `Thank you for your project inquiry - ${projectType}`,
      html: createFreelanceSenderEmailTemplate(inquiryData)
    };

    // Send both emails
    const [ownerEmailResult, senderEmailResult] = await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    console.log('Owner inquiry email sent:', ownerEmailResult.messageId);
    console.log('Sender confirmation sent:', senderEmailResult.messageId);

    res.status(200).json({
      success: true,
      message: 'Project inquiry sent successfully! You will receive a confirmation email shortly.',
      data: {
        inquiryId: ownerEmailResult.messageId,
        confirmationId: senderEmailResult.messageId,
        submittedAt: inquiryData.submittedAt
      }
    });

  } catch (error) {
    console.error('Error sending freelance inquiry:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}