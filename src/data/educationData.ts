import { IEducation, ICertification } from '../types';

export const educationData: IEducation[] = [
  {
    id: '1',
    institution: 'S. A. Engineering College',
    degree: 'Master of Computer Applications',
    period: '2021 - 2023',
    location: 'Chennai, TamilNadu, India',
    grade: '8.33',
  },
  {
    id: '2',
    institution: 'Apollo Arts & Science College',
    degree: 'Bachelor of Computer Applications',
    period: '2018 - 2021',
    location: 'Chennai, TamilNadu, India',
    grade: '7.81',
  },
];

export const certificationData: ICertification[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 26, 2023',
    image: 'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/clf-badge-resized.d641db1401f3fe13f9e67b68f29ea1f898757f8b.png',
    link: 'https://www.credly.com/badges/aa27a155-f8d3-4a63-84e3-3c2a37515769/public_url',
  },
];