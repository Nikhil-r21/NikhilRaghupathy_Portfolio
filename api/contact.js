//api
import nodemailer from 'nodemailer';
import { createOwnerEmailTemplate } from './templates/ownerTemplate.js';
import { createSenderEmailTemplate } from './templates/senderTemplate.js';

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
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
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

    const formData = { name, email, subject, message };
    const transporter = createTransporter();

    // Email to owner (you)
    const ownerMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // Your email
      subject: `New Contact Form: ${subject}`,
      html: createOwnerEmailTemplate(formData),
      replyTo: email // Allow direct reply to sender
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: `"Nikhil Raghupathy" <${process.env.EMAIL}>`,
      to: email,
      subject: `Thank you for your message - ${subject}`,
      html: createSenderEmailTemplate(formData)
    };

    // Send both emails
    const [ownerEmailResult, senderEmailResult] = await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    console.log('Owner email sent:', ownerEmailResult.messageId);
    console.log('Sender confirmation sent:', senderEmailResult.messageId);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.',
      data: {
        ownerEmailId: ownerEmailResult.messageId,
        senderEmailId: senderEmailResult.messageId
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
