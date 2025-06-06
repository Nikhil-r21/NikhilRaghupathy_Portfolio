// import React from 'react';
// import { motion } from 'framer-motion';
// import { ReactTyped } from 'react-typed';
// import { FileDown, ExternalLink } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center pt-16 pb-24 bg-gray-50">
//       <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
//         {/* Text Content */}
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Hi, I'm Nikhil Raghupathy
//           </h1>
          
//           <div className="text-xl md:text-2xl text-blue-600 mb-8 h-16">
//             <ReactTyped
//               strings={[
//                 "DevOps Engineer",
//                 "AWS Certified Cloud Practitioner",
//               ]}
//               typeSpeed={40}
//               backSpeed={100}
//               loop
//               className="font-medium"
//             />
//           </div>
          
//           <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
//             Passionate about cloud infrastructure, containerization, and automated workflows.
//             Transforming ideas into scalable, resilient systems.
//           </p>
          
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
//             <a 
//               href="#projects" 
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
//               onClick={(e) => {
//                 e.preventDefault();
//                 const element = document.getElementById('projects');
//                 if (element) {
//                   window.scrollTo({
//                     top: element.offsetTop - 80,
//                     behavior: 'smooth',
//                   });
//                 }
//               }}
//             >
//               <ExternalLink size={18} className="mr-2" />
//               View Projects
//             </a>
//             <a 
//               href="./Nikhil_Raghupathy_DevOps_Engineer.pdf" target='_blank' rel="noopener noreferrer"
//               className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 transition-colors flex items-center justify-center"
//             >
//               <FileDown size={18} className="mr-2" />
//               Download Resume
//             </a>
//           </div>
//         </motion.div>
        
//         {/* Profile Image with Glassmorphism Effect */}
//         <motion.div 
//           className="md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="relative">
//             {/* Decorative rings */}
//             <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 animate-pulse" style={{ transform: 'scale(1.1)', filter: 'blur(8px)', opacity: 0.6 }}></div>
//             <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-3 border-white" style={{ transform: 'scale(1.05)' }}></div>
            
//             {/* Glassmorphism container */}
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
//               {/* Profile image */}
//               <img 
//                 src="https://media.licdn.com/dms/image/v2/D5603AQHbq6G5DzE1iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724775021779?e=1754524800&v=beta&t=cKP75sRP2Ly0UyW_G1kgxpJrZ_QSfIZE4VKWcnHIzw8" 
//                 alt="Nikhil Raghupathy - DevOps Engineer" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* AWS Badge - uncomment if needed */}
//             {/* <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-full shadow-lg">
//               <img 
//                 src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/clf-badge-resized.d641db1401f3fe13f9e67b68f29ea1f898757f8b.png" 
//                 alt="AWS Certified" 
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//             </div> */}
            
//             {/* Glassmorphism accent elements */}
//             {/* <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 bg-opacity-70 backdrop-blur-md border border-white border-opacity-30"></div>
//             <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-300 to-purple-500 bg-opacity-70 backdrop-blur-md border border-white border-opacity-30"></div> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { useState, useEffect, useRef } from 'react';
import { FileDown, ExternalLink, Cloud, Settings, Code } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const strings = [
    "DevOps Engineer",
    "AWS Certified Cloud Practitioner",
  ];

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentString.length) {
          setTypedText(currentString.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentStringIndex, isDeleting]);

  // Interactive wave mesh background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const drawWaveMesh = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      const cols = 20;
      const rows = 15;
      const cellWidth = canvas.offsetWidth / cols;
      const cellHeight = canvas.offsetHeight / rows;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.05)');
      gradient.addColorStop(1, 'rgba(34, 197, 94, 0.1)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      
      for (let row = 0; row <= rows; row++) {
        ctx.beginPath();
        for (let col = 0; col <= cols; col++) {
          const x = col * cellWidth;
          const baseY = row * cellHeight;
          
          const waveOffset = Math.sin(time * 0.01 + col * 0.3) * 10;
          const mouseInfluence = mousePosition.x && mousePosition.y ? 
            Math.exp(-((col * cellWidth / canvas.offsetWidth - mousePosition.x) ** 2 + 
                      (baseY / canvas.offsetHeight - mousePosition.y) ** 2) * 5) * 15 : 0;
          
          const y = baseY + waveOffset + mouseInfluence;
          
          if (col === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      for (let col = 0; col <= cols; col++) {
        ctx.beginPath();
        for (let row = 0; row <= rows; row++) {
          const baseX = col * cellWidth;
          const y = row * cellHeight;
          
          const waveOffset = Math.sin(time * 0.015 + row * 0.4) * 8;
          const mouseInfluence = mousePosition.x && mousePosition.y ? 
            Math.exp(-((baseX / canvas.offsetWidth - mousePosition.x) ** 2 + 
                      (y / canvas.offsetHeight - mousePosition.y) ** 2) * 5) * 12 : 0;
          
          const x = baseX + waveOffset + mouseInfluence;
          
          if (row === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      for (let row = 0; row <= rows; row += 2) {
        for (let col = 0; col <= cols; col += 2) {
          const baseX = col * cellWidth;
          const baseY = row * cellHeight;
          
          const waveOffsetX = Math.sin(time * 0.015 + row * 0.4) * 8;
          const waveOffsetY = Math.sin(time * 0.01 + col * 0.3) * 10;
          
          const mouseInfluenceX = mousePosition.x && mousePosition.y ? 
            Math.exp(-((baseX / canvas.offsetWidth - mousePosition.x) ** 2 + 
                      (baseY / canvas.offsetHeight - mousePosition.y) ** 2) * 5) * 12 : 0;
          const mouseInfluenceY = mousePosition.x && mousePosition.y ? 
            Math.exp(-((baseX / canvas.offsetWidth - mousePosition.x) ** 2 + 
                      (baseY / canvas.offsetHeight - mousePosition.y) ** 2) * 5) * 15 : 0;
          
          const x = baseX + waveOffsetX + mouseInfluenceX;
          const y = baseY + waveOffsetY + mouseInfluenceY;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      time += 1;
      animationFrameId = requestAnimationFrame(drawWaveMesh);
    };

    resizeCanvas();
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    drawWaveMesh();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  // Button magnetism effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <section className="min-h-screen flex items-center pt-16 pb-24 bg-gray-50 relative overflow-hidden">
      {/* Interactive Wave Mesh Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <Cloud 
          size={40} 
          className="absolute text-blue-300/20"
          style={{ 
            top: '15%',
            left: '10%',
            animation: 'slowFloat 8s ease-in-out infinite'
          }}
        />
        <Settings 
          size={32} 
          className="absolute text-purple-300/20"
          style={{ 
            top: '70%',
            right: '15%',
            animation: 'slowFloat 10s ease-in-out infinite reverse'
          }}
        />
        <Code 
          size={28} 
          className="absolute text-green-300/20"
          style={{ 
            top: '30%',
            right: '8%',
            animation: 'slowFloat 12s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30" style={{ zIndex: 3 }} />

      <div className={`container mx-auto px-4 flex flex-col-reverse md:flex-row items-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-10 md:mt-0">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            Hi, I'm Nikhil Raghupathy
          </h1>
          
          <div className={`text-xl md:text-2xl text-blue-600 mb-8 h-16 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className={`text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            Passionate about cloud infrastructure, containerization, and automated workflows.
            Transforming ideas into scalable, resilient systems.
          </p>
          
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href = "#projects" 
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-blue-500/20 relative overflow-hidden group magnetic-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <ExternalLink size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </a>
            <a 
              href="./Nikhil_Raghupathy_DevOps_Engineer.pdf" 
              target='_blank' 
              rel="noopener noreferrer"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              className="bg-white/80 hover:bg-white/90 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600/30 transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden group magnetic-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <FileDown size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
        
        {/* Profile Image with Tech-inspired Design */}
        <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="relative">
            {/* Hexagonal tech border */}
            <div className="absolute inset-0" style={{ transform: 'scale(1.1)' }}>
              <svg width="320" height="320" viewBox="0 0 320 320" className="w-64 h-64 md:w-80 md:h-80">
                <defs>
                  <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.3)" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="160" 
                  cy="160" 
                  r="140" 
                  fill="none" 
                  stroke="url(#techGradient)" 
                  strokeWidth="2" 
                  strokeDasharray="10,5"
                  style={{ animation: 'spin 20s linear infinite' }}
                />
              </svg>
            </div>
            
            {/* Outer glow ring with enhanced animation */}
            <div 
              className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full glow-ring"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 60%)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-2 border-white/50 backdrop-blur-sm">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHbq6G5DzE1iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724775021779?e=1754524800&v=beta&t=cKP75sRP2Ly0UyW_G1kgxpJrZ_QSfIZE4VKWcnHIzw8" 
                alt="Nikhil Raghupathy - DevOps Engineer" 
                className="w-full h-full object-cover"
              />
              
              {/* Tech overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10" />
            </div>
            
            {/* Floating tech elements with enhanced animations */}
            <div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-sm shadow-lg floating-element"
              style={{ 
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
            <div 
              className="absolute -bottom-3 -left-3 w-3 h-3 bg-green-500 rounded-full shadow-lg floating-element-reverse"
            />
            <div 
              className="absolute top-1/4 -left-4 w-2 h-2 bg-purple-500 shadow-lg floating-element-slow"
              style={{ 
                clipPath: 'polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-3deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes enhancedPulse {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1.1); 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.15); 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }
        
        .glow-ring {
          animation: enhancedPulse 4s ease-in-out infinite;
        }
        
        .floating-element {
          animation: float 3s ease-in-out infinite, rotate 8s linear infinite;
        }
        
        .floating-element-reverse {
          animation: float 4s ease-in-out infinite reverse, rotate 10s linear infinite reverse;
        }
        
        .floating-element-slow {
          animation: float 5s ease-in-out infinite, rotate 12s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg) translateY(0px); }
          to { transform: rotate(360deg) translateY(0px); }
        }
        
        .magnetic-button {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        
        .magnetic-button:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;