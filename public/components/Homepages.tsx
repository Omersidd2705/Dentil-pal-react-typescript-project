import React, { useState, useEffect } from 'react';

// Mock Navbar component for demo
const Navbar = () => (
  <nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  }}>
    <h2 style={{ margin: 0, color: '#333', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>Dental Care</h2>
  </nav>
);

const Homepage: React.FC = () => {
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive styles
  const listItemStyle = {
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    border: '2px solid rgba(255,255,255,0.5)',
    borderRadius: isMobile ? '12px' : '18px',
    padding: isMobile ? '8px 12px' : '12px',
    background: 'rgba(255,255,255,0.3)',
    backdropFilter: 'blur(6px)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    minHeight: isMobile ? '40px' : '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textOverlayStyle = {
    fontSize: isMobile ? '1.2rem' : '2.5rem',
    fontFamily: 'sans-serif',
    position: 'absolute' as const,
    bottom: isMobile ? '220px' : '380px',
    left: isMobile ? '10px' : '20px',
    right: isMobile ? '10px' : '20px',
    color: '#fff',
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    padding: isMobile ? '12px 16px' : '16px 24px',
    borderRadius: isMobile ? '8px' : '12px',
    textAlign: 'center' as const,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    lineHeight: 1.3,
  };

  const searchContainerStyle = {
    position: 'absolute' as const,
    bottom: isMobile ? '10px' : '40px',
    left: isMobile ? '10px' : '20px',
    right: isMobile ? '10px' : '20px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: isMobile ? '12px' : '16px',
    padding: isMobile ? '16px' : '24px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
    maxHeight: isMobile ? '200px' : 'none',
    overflow: isMobile ? 'auto' : 'visible',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '8px' : '16px',
    marginBottom: isMobile ? '12px' : '20px',
  };

  const searchInputStyle = {
    padding: isMobile ? '10px 12px' : '12px 16px',
    borderRadius: '8px',
    border: '2px solid rgba(26, 212, 91, 0.6)',
    outline: 'none',
    fontSize: isMobile ? '0.9rem' : '1rem',
    width: '100%',
    maxWidth: isMobile ? '200px' : '320px',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(6px)',
    transition: 'all 0.3s ease',
  };

  const searchButtonStyle = {
    backgroundColor: 'rgb(26, 212, 91)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: isMobile ? '10px 16px' : '12px 24px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    fontSize: isMobile ? '0.9rem' : '1rem',
    transition: 'all 0.3s ease',
    marginLeft: isMobile ? '4px' : '8px',
    boxShadow: '0 4px 12px rgba(26, 212, 91, 0.3)',
    whiteSpace: 'nowrap' as const,
  };

  const handleSearch = (searchTerm: string, section: string) => {
    console.log(`Searching for "${searchTerm}" in ${section} section`);
    // Add your search logic here
  };

  const staffServices = [
    'Registered dental hygiene',
    'Dental Assistants', 
    'Front Desk',
    'Associate dentists'
  ];

  const dentalServices = [
    'Checkups',
    'Cleaning',
    'Whitening', 
    'Implants'
  ];

  const renderServiceGrid = (services: string[]) => (
    <div style={gridStyle}>
      {services.map((service, index) => (
        <div 
          key={service}
          style={{
            ...listItemStyle,
            ...(index === 3 && !isMobile ? { gridColumn: '2' } : {}),
            ...(index === 3 && isMobile ? { gridColumn: '1 / -1' } : {}),
            transform: hoveredImage !== null && !isMobile ? 'translateY(-2px)' : 'translateY(0)',
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background = 'rgba(26, 212, 91, 0.7)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(26, 212, 91, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
          onClick={(e) => {
            if (isMobile) {
              e.currentTarget.style.background = 'rgba(26, 212, 91, 0.7)';
              setTimeout(() => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              }, 200);
            }
          }}
        >
          {service}
        </div>
      ))}
    </div>
  );

  const renderSearchBar = (
    placeholder: string, 
    value: string, 
    onChange: (value: string) => void, 
    onSearch: () => void
  ) => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '8px' : '8px'
    }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={searchInputStyle}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgb(26, 212, 91)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 212, 91, 0.2)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(26, 212, 91, 0.6)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
      />
      <button
        onClick={onSearch}
        style={{
          ...searchButtonStyle,
          width: isMobile ? '100%' : 'auto',
          marginLeft: isMobile ? '0' : '8px',
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.backgroundColor = 'rgb(20, 184, 132)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(26, 212, 91, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.backgroundColor = 'rgb(26, 212, 91)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 212, 91, 0.3)';
          }
        }}
      >
        Search
      </button>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: 0,
      }}>
        {/* Left Panel - Staff Services */}
        <div 
          style={{ 
            flex: 1, 
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={() => setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: hoveredImage === 1 ? 'blur(0px) brightness(1.1)' : 'blur(8px) brightness(0.8)',
              transform: hoveredImage === 1 ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          
          <div style={{
            ...textOverlayStyle,
            opacity: hoveredImage === 1 ? 1 : 0.9,
            transform: hoveredImage === 1 ? 'translateY(-10px)' : 'translateY(0)',
          }}>
            I am a dental professional and I am here to help you.
          </div>
          
          <div style={{
            ...searchContainerStyle,
            opacity: hoveredImage === 1 ? 1 : 0.85,
            transform: hoveredImage === 1 ? 'translateY(-5px)' : 'translateY(0)',
          }}>
            {renderServiceGrid(staffServices)}
            {renderSearchBar(
              'Search staff services...', 
              searchTerm1, 
              setSearchTerm1, 
              () => handleSearch(searchTerm1, 'staff')
            )}
          </div>
        </div>

        {/* Right Panel - Dental Services */}
        <div 
          style={{ 
            flex: 1, 
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={() => setHoveredImage(2)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: hoveredImage === 2 ? 'blur(0px) brightness(1.1)' : 'blur(8px) brightness(0.8)',
              transform: hoveredImage === 2 ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          
          <div style={{
            ...textOverlayStyle,
            opacity: hoveredImage === 2 ? 1 : 0.9,
            transform: hoveredImage === 2 ? 'translateY(-10px)' : 'translateY(0)',
          }}>
            You can contact me for any dental related issues.
          </div>
          
          <div style={{
            ...searchContainerStyle,
            opacity: hoveredImage === 2 ? 1 : 0.85,
            transform: hoveredImage === 2 ? 'translateY(-5px)' : 'translateY(0)',
          }}>
            {renderServiceGrid(dentalServices)}
            {renderSearchBar(
              'Search dental services...', 
              searchTerm2, 
              setSearchTerm2, 
              () => handleSearch(searchTerm2, 'dental')
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;