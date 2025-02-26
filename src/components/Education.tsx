
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "S. A. Engineering College",
      period: "Jun 2021 - Apr 2023",
      location: "Chennai, Tamil Nadu, India",
      grade: "CGPA: 8.33"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Apollo Arts & Science College",
      period: "Jun 2018 - Apr 2021",
      location: "Chennai, Tamil Nadu, India",
      grade: "CGPA: 7.81"
    }
  ];

  const certification = {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2023",
    badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    verifyUrl: "https://www.credly.com/badges/aa27a155-f8d3-4a63-84e3-3c2a37515769/public_url"
  };

  return (
    <section id="education" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education & Certification</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary transform -translate-x-[3px]"></div>
                  
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-gray-400 mb-4">{edu.institution}</p>
                    
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Card */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Certification
            </h3>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg h-5/5">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={certification.badgeUrl}
                  alt="AWS Certification Badge"
                  className="w-48 h-48 mb-6"
                />
                
                <h4 className="text-xl font-semibold mb-2">{certification.title}</h4>
                <p className="text-gray-400 mb-4">{certification.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {certification.date}</span>
                </div>
                
                <a 
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Verify Certification
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};