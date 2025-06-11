import React from "react";

const Header: React.FC = () => {
  const headerStyle = {
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 4s ease infinite',
    color: '#ffffff',
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    animation: 'floatingBubbles 6s ease-in-out infinite'
  };

  const logoStyle = {
    margin: 0,
    fontWeight: 'bold' as const,
    fontSize: '2.5rem',
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'rainbowText 3s ease-in-out infinite, textGlow 2s ease-in-out infinite alternate',
    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    textAlign: 'center' as const
  };

  const buttonContainerStyle = {
    position: 'absolute' as const,
    top: '15px',
    right: '20px',
    zIndex: 2
  };

  const loginButtonStyle = {
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
    backgroundSize: '200% 200%',
    animation: 'buttonColorShift 4s ease infinite',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    textDecoration: 'none',
    padding: '8px 20px',
    fontWeight: '600' as const,
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    marginRight: '8px'
  };

  const signupButtonStyle = {
    background: 'linear-gradient(45deg, #ffd700, #ffed4e, #ff6b6b)',
    backgroundSize: '200% 200%',
    animation: 'buttonColorShift2 3s ease infinite',
    color: '#1a365d',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    padding: '8px 20px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
  };

  const particleStyles = {
    particle1: {
      width: '8px',
      height: '8px',
      background: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '50%',
      animation: 'float1 4s ease-in-out infinite'
    },
    particle2: {
      width: '6px',
      height: '6px',
      background: 'rgba(255, 215, 0, 0.7)',
      borderRadius: '50%',
      position: 'absolute' as const,
      top: '-20px',
      left: '30px',
      animation: 'float2 3s ease-in-out infinite'
    },
    particle3: {
      width: '10px',
      height: '10px',
      background: 'rgba(255, 107, 107, 0.5)',
      borderRadius: '50%',
      position: 'absolute' as const,
      top: '10px',
      left: '-20px',
      animation: 'float3 5s ease-in-out infinite'
    }
  };

  const handleLoginHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-3px) scale(1.05)';
    target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
    target.style.filter = 'brightness(1.2)';
  };

  const handleLoginLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0) scale(1)';
    target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    target.style.filter = 'brightness(1)';
  };

  const handleSignupHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4)';
    target.style.color = '#ffffff';
    target.style.transform = 'translateY(-3px) scale(1.1)';
    target.style.boxShadow = '0 10px 30px rgba(78, 205, 196, 0.5)';
  };

  const handleSignupLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e, #ff6b6b)';
    target.style.color = '#1a365d';
    target.style.transform = 'translateY(0) scale(1)';
    target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes rainbowText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes textGlow {
          0% { filter: brightness(1) drop-shadow(0 0 5px rgba(255, 215, 0, 0.3)); }
          100% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)); }
        }
        
        @keyframes floatingBubbles {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-5px) translateX(-5px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(15px) rotate(180deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-10px) translateX(-10px) scale(1.2); }
          75% { transform: translateY(-5px) translateX(5px) scale(0.8); }
        }
        
        @keyframes buttonColorShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes buttonColorShift2 {
          0% { background-position: 0% 50%; }
          33% { background-position: 50% 100%; }
          66% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <header 
        className="d-flex justify-content-center align-items-center p-3 position-relative"
        style={headerStyle}
      >
        {/* Animated background overlay */}
        <div style={overlayStyle} />
        
        {/* Center - Animated Logo */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h3 style={logoStyle}>
            TS-Yarn-Vite-BS
          </h3>
        </div>
        
        {/* Center floating particles */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={particleStyles.particle1} />
          <div style={particleStyles.particle2} />
          <div style={particleStyles.particle3} />
        </div>

        {/* Top Right - Animated Buttons */}
        <div style={buttonContainerStyle}>
          <a 
            href="/login" 
            className="btn"
            style={loginButtonStyle}
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
          >
            Login
          </a>
          <a 
            href="/signup" 
            className="btn"
            style={signupButtonStyle}
            onMouseEnter={handleSignupHover}
            onMouseLeave={handleSignupLeave}
          >
            Signup
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;