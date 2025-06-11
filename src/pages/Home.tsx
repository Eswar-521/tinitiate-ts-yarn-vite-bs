import React, { useState } from 'react';

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)',
    backgroundSize: '400% 400%',
    animation: 'gradientFlow 8s ease infinite',
    position: 'relative' as const,
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
    animation: 'floatingOverlay 10s ease-in-out infinite'
  };

  const heroStyle = {
    textAlign: 'center' as const,
    padding: '80px 20px',
    position: 'relative' as const,
    zIndex: 10
  };

  const heroTitleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold' as const,
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'rainbowWave 4s ease-in-out infinite, textFloat 3s ease-in-out infinite',
    marginBottom: '20px',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
  };

  const heroSubtitleStyle = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '50px',
    opacity: 0.9,
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  };

  const sectionStyle = {
    padding: '60px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative' as const,
    zIndex: 10
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    marginBottom: '40px',
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'titleShimmer 3s ease infinite'
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    animation: 'cardFloat 6s ease-in-out infinite'
  };

  const serviceIconStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block'
  };

  const serviceTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold' as const,
    color: '#ffffff',
    marginBottom: '15px'
  };

  const serviceDescStyle = {
    color: '#ffffff',
    opacity: 0.9,
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const featureItemStyle = {
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: '8px',
    paddingLeft: '20px',
    position: 'relative' as const
  };

  const comparisonTableStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '15px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const tableHeaderStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    fontWeight: 'bold' as const,
    color: '#ffffff',
    textAlign: 'center' as const,
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const tableCellStyle = {
    padding: '15px 20px',
    color: '#ffffff',
    textAlign: 'center' as const,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    opacity: 0.9
  };

  const contactFormStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '16px'
  };

  const buttonStyle = {
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
    color: '#ffffff',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: 'buttonGlow 2s ease-in-out infinite alternate'
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-10px) scale(1.02)';
    target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
    target.style.background = 'rgba(255, 255, 255, 0.15)';
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0) scale(1)';
    target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    target.style.background = 'rgba(255, 255, 255, 0.1)';
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1.05)';
    target.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.4)';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'scale(1)';
    target.style.boxShadow = 'none';
  };

  return (
    <>
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes rainbowWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes textFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes titleShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floatingOverlay {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes buttonGlow {
          0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
          100% { box-shadow: 0 0 30px rgba(255, 107, 107, 0.5); }
        }
        
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
      
      <div style={containerStyle}>
        <div style={overlayStyle} />
        
        
        <section style={heroStyle}>
          <h1 style={heroTitleStyle}>🏠 Tinitate it Solution Hub</h1>
          <p style={heroSubtitleStyle}>
            From A to Z - Everything you need for your Education
          </p>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 What We Do A-Z</h2>
          <div style={cardGridStyle}>
            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>📚</span>
              <h3 style={serviceTitleStyle}>A-Z Catalog Services</h3>
              <p style={serviceDescStyle}>Complete product and service cataloging from Analytics to Zendesk integration</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• API Development & Integration</li>
                <li style={featureItemStyle}>• Business Process Automation</li>
                <li style={featureItemStyle}>• Cloud Solutions & Deployment</li>
                <li style={featureItemStyle}>• Database Design & Management</li>
                <li style={featureItemStyle}>• E-commerce Solutions</li>
              </ul>
            </div>

            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>⚡</span>
              <h3 style={serviceTitleStyle}>Performance & Optimization</h3>
              <p style={serviceDescStyle}>Lightning-fast solutions built with modern technologies</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• Frontend Development (React, Vue, Angular)</li>
                <li style={featureItemStyle}>• GraphQL & REST API Services</li>
                <li style={featureItemStyle}>• Hardware Consultation</li>
                <li style={featureItemStyle}>• Infrastructure as Code</li>
                <li style={featureItemStyle}>• JavaScript/TypeScript Solutions</li>
              </ul>
            </div>

            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>🎨</span>
              <h3 style={serviceTitleStyle}>Design & User Experience</h3>
              <p style={serviceDescStyle}>Beautiful, functional designs that convert</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• Kubernetes & Container Orchestration</li>
                <li style={featureItemStyle}>• Logo Design & Branding</li>
                <li style={featureItemStyle}>• Mobile App Development</li>
                <li style={featureItemStyle}>• Network Security Solutions</li>
                <li style={featureItemStyle}>• OAuth & Authentication Systems</li>
              </ul>
            </div>

            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>🛡️</span>
              <h3 style={serviceTitleStyle}>Security & Maintenance</h3>
              <p style={serviceDescStyle}>Comprehensive protection and ongoing support</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• Python/PHP Backend Development</li>
                <li style={featureItemStyle}>• Quality Assurance & Testing</li>
                <li style={featureItemStyle}>• React Native Mobile Solutions</li>
                <li style={featureItemStyle}>• SEO & Digital Marketing</li>
                <li style={featureItemStyle}>• Third-party Integrations</li>
              </ul>
            </div>

            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>🚀</span>
              <h3 style={serviceTitleStyle}>Advanced Solutions</h3>
              <p style={serviceDescStyle}>Cutting-edge technology implementations</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• UI/UX Design & Prototyping</li>
                <li style={featureItemStyle}>• Version Control & Git Management</li>
                <li style={featureItemStyle}>• WordPress & CMS Solutions</li>
                <li style={featureItemStyle}>• XML/JSON Data Processing</li>
                <li style={featureItemStyle}>• Year-round Support & Maintenance</li>
                <li style={featureItemStyle}>• Zero-downtime Deployments</li>
              </ul>
            </div>

            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <span style={serviceIconStyle}>🔗</span>
              <h3 style={serviceTitleStyle}>Links & Integrations</h3>
              <p style={serviceDescStyle}>Seamless connectivity across all platforms</p>
              <ul style={featureListStyle}>
                <li style={featureItemStyle}>• Social Media Integration</li>
                <li style={featureItemStyle}>• Payment Gateway Setup</li>
                <li style={featureItemStyle}>• CRM & ERP Connections</li>
                <li style={featureItemStyle}>• Email Marketing Automation</li>
                <li style={featureItemStyle}>• Analytics & Tracking Setup</li>
              </ul>
            </div>
          </div>
        </section>


        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📊 Service Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={comparisonTableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Service Category</th>
                  <th style={tableHeaderStyle}>Basic Package</th>
                  <th style={tableHeaderStyle}>Professional</th>
                  <th style={tableHeaderStyle}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Web Development</td>
                  <td style={tableCellStyle}>Static Sites</td>
                  <td style={tableCellStyle}>Dynamic Web Apps</td>
                  <td style={tableCellStyle}>Full-Stack Solutions</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mobile Development</td>
                  <td style={tableCellStyle}>PWA</td>
                  <td style={tableCellStyle}>Native Apps</td>
                  <td style={tableCellStyle}>Cross-Platform</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Cloud Services</td>
                  <td style={tableCellStyle}>Basic Hosting</td>
                  <td style={tableCellStyle}>Scalable Infrastructure</td>
                  <td style={tableCellStyle}>Multi-Cloud Architecture</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Support Level</td>
                  <td style={tableCellStyle}>Email Support</td>
                  <td style={tableCellStyle}>Priority Support</td>
                  <td style={tableCellStyle}>24/7 Dedicated Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🔗 Quick Links</h2>
          <div style={cardGridStyle}>
            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <h3 style={serviceTitleStyle}>📋 Portfolio</h3>
              <p style={serviceDescStyle}>View our latest projects and case studies</p>
              <a href="/portfolio" style={{ color: '#ffd700', textDecoration: 'none' }}>Browse Projects →</a>
            </div>
            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <h3 style={serviceTitleStyle}>💰 Pricing</h3>
              <p style={serviceDescStyle}>Transparent pricing for all our services</p>
              <a href="/pricing" style={{ color: '#ffd700', textDecoration: 'none' }}>View Pricing →</a>
            </div>
            <div style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
              <h3 style={serviceTitleStyle}>📖 Documentation</h3>
              <p style={serviceDescStyle}>Comprehensive guides and API documentation</p>
              <a href="/docs" style={{ color: '#ffd700', textDecoration: 'none' }}>Read Docs →</a>
            </div>
          </div>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📞 Get In Touch</h2>
          <div style={contactFormStyle}>
            <h3 style={{ ...serviceTitleStyle, textAlign: 'center' as const, marginBottom: '30px' }}>
              Ready to Start Your Project?
            </h3>
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={inputStyle}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={inputStyle}
              />
              <input 
                type="text" 
                placeholder="Project Type" 
                style={inputStyle}
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                style={{...inputStyle, resize: 'vertical' as const}}
              />
              <div style={{ textAlign: 'center' }}>
                <button 
                  type="submit" 
                  style={buttonStyle}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  🚀 Start Your Project
                </button>
              </div>
            </form>
            
            <div style={{ marginTop: '40px', textAlign: 'center' as const }}>
              <h4 style={{ color: '#ffffff', marginBottom: '20px' }}>Connect With Us</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <span style={{ color: '#ffffff', opacity: 0.9 }}>📧 tinitiate@company.com</span>
                <span style={{ color: '#ffffff', opacity: 0.9 }}>📱 +1 (555) 123-4567</span>
                <span style={{ color: '#ffffff', opacity: 0.9 }}>🌐tinitiate.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;




// import React, { useState } from 'react';

// const Home: React.FC = () => {
//   const [activeService, setActiveService] = useState<string | null>(null);

//   const containerStyle = {
//     minHeight: '100vh',
//     background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)',
//     backgroundSize: '400% 400%',
//     animation: 'gradientFlow 8s ease infinite',
//     position: 'relative' as const,
//     overflow: 'hidden'
//   };

//   const overlayStyle = {
//     position: 'absolute' as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
//     animation: 'floatingOverlay 10s ease-in-out infinite'
//   };

//   const heroStyle = {
//     textAlign: 'center' as const,
//     padding: '40px 15px',
//     position: 'relative' as const,
//     zIndex: 10
//   };

//   const heroTitleStyle = {
//     fontSize: '2.2rem',
//     fontWeight: 'bold' as const,
//     background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
//     backgroundSize: '400% 400%',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     animation: 'rainbowWave 4s ease-in-out infinite, textFloat 3s ease-in-out infinite',
//     marginBottom: '12px',
//     textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
//   };

//   const heroSubtitleStyle = {
//     fontSize: '1rem',
//     color: '#ffffff',
//     marginBottom: '30px',
//     opacity: 0.9,
//     textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
//   };

//   const sectionStyle = {
//     padding: '40px 15px',
//     maxWidth: '1000px',
//     margin: '0 auto',
//     position: 'relative' as const,
//     zIndex: 10
//   };

//   const sectionTitleStyle = {
//     fontSize: '1.8rem',
//     fontWeight: 'bold' as const,
//     textAlign: 'center' as const,
//     marginBottom: '30px',
//     background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
//     backgroundSize: '200% 200%',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     animation: 'titleShimmer 3s ease infinite'
//   };

//   const cardGridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '20px',
//     marginBottom: '40px'
//   };

//   const cardStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '12px',
//     padding: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     animation: 'cardFloat 6s ease-in-out infinite'
//   };

//   const serviceIconStyle = {
//     fontSize: '2rem',
//     marginBottom: '10px',
//     display: 'block'
//   };

//   const serviceTitleStyle = {
//     fontSize: '1.2rem',
//     fontWeight: 'bold' as const,
//     color: '#ffffff',
//     marginBottom: '10px'
//   };

//   const serviceDescStyle = {
//     color: '#ffffff',
//     opacity: 0.9,
//     fontSize: '0.95rem',
//     lineHeight: '1.4',
//     marginBottom: '10px'
//   };

//   const featureListStyle = {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0
//   };

//   const featureItemStyle = {
//     color: '#ffffff',
//     opacity: 0.8,
//     fontSize: '0.9rem',
//     marginBottom: '6px',
//     paddingLeft: '15px',
//     position: 'relative' as const
//   };

//   const comparisonTableStyle = {
//     width: '100%',
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     fontSize: '0.85rem'
//   };

//   const tableHeaderStyle = {
//     background: 'rgba(255, 255, 255, 0.2)',
//     padding: '10px',
//     fontWeight: 'bold' as const,
//     color: '#ffffff',
//     textAlign: 'center' as const,
//     border: '1px solid rgba(255, 255, 255, 0.1)'
//   };

//   const tableCellStyle = {
//     padding: '10px',
//     color: '#ffffff',
//     textAlign: 'center' as const,
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     opacity: 0.9
//   };

//   const contactFormStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '12px',
//     padding: '30px',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     maxWidth: '500px',
//     margin: '0 auto'
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '15px',
//     background: 'rgba(255, 255, 255, 0.1)',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     borderRadius: '8px',
//     color: '#ffffff',
//     fontSize: '0.9rem'
//   };

//   const buttonStyle = {
//     background: 'linear-gradient(45deg, #ffd700, #ff6b6b)',
//     color: '#ffffff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '20px',
//     fontSize: '0.9rem',
//     fontWeight: 'bold' as const,
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     animation: 'buttonGlow 2s ease-in-out infinite alternate'
//   };

//   // ... (Hover handlers remain unchanged)

//   return (
//     <>
//       <style>{`
//         @keyframes gradientFlow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes rainbowWave {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes textFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes cardFloat {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-3px); }
//         }

//         @keyframes titleShimmer {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes floatingOverlay {
//           0%, 100% { opacity: 0.7; }
//           50% { opacity: 1; }
//         }

//         @keyframes buttonGlow {
//           0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.3); }
//           100% { box-shadow: 0 0 15px rgba(255, 107, 107, 0.5); }
//         }

//         input::placeholder, textarea::placeholder {
//           color: rgba(255, 255, 255, 0.6);
//         }
//       `}</style>

//       <div style={containerStyle}>
//         <div style={overlayStyle} />
//         <section style={heroStyle}>
//           <h1 style={heroTitleStyle}>🏠 Tinitate it Solution Hub</h1>
//           <p style={heroSubtitleStyle}>From A to Z - Everything you need for your Education</p>
//         </section>

//         {/* The rest of the sections (Services, Comparison, Quick Links, Contact) would go here using the updated styles above */}
//       </div>
//     </>
//   );
// };

// export default Home;
