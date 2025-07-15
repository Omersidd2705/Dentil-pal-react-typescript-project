import React, { useState, useEffect } from 'react';

const navbarStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
    padding: '0.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    color: 'black',
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'background 0.3s, color 0.3s',
};

const logoStyles: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'black',
};

const navContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
};

const navLinksStyles: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexDirection: 'row',
};

const navLinkStyles: React.CSSProperties = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.3s, background 0.3s',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    background: 'none',
};

const navLinkActiveStyles: React.CSSProperties = {
    color: 'white',
};

const hamburgerStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'none',
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const activePath = window.location.pathname;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav style={navbarStyles} className="navbar">
                <div style={logoStyles}>DentiPal</div>

                {isMobile && (
                    <div style={hamburgerStyles} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        ☰
                    </div>
                )}

                <div style={{ ...navContainerStyles, flexDirection: isMobile ? 'column' : 'row' }}>
                    <ul
                        style={{
                            ...navLinksStyles,
                            display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            width: isMobile ? '100%' : undefined,
                            alignItems: isMobile ? 'flex-start' : 'center',
                            gap: isMobile ? '1rem' : '2rem',
                        }}
                    >
                        <li>
                            <a
                                href="/"
                                style={{
                                    ...navLinkStyles,
                                    ...(activePath === '/' ? navLinkActiveStyles : {}),
                                    marginRight: '20rem',
                                }}
                                className="navbar-link"
                            >
                                Professional Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="/find-shift"
                                style={{
                                    ...navLinkStyles,
                                    ...(activePath === '/find-shift' ? navLinkActiveStyles : {}),
                                }}
                                className="navbar-link"
                            >
                                Find Shift
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                style={{
                                    ...navLinkStyles,
                                    ...(activePath === '/services' ? navLinkActiveStyles : {}),
                                }}
                                className="navbar-link"
                            >
                                Office Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                style={{
                                    ...navLinkStyles,
                                    ...(activePath === '/contact' ? navLinkActiveStyles : {}),
                                    marginRight: '2rem',
                                }}
                                className="navbar-link"
                            >
                                Post Shifts
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <style>
                {`
                .navbar:hover {
                    background: white !important;
                    color: black !important;
                }
                .navbar:hover .navbar-link {
                    color: black !important;
                }
                .navbar-link {
                    color: black;
                    background: none;
                }
                .navbar-link:hover {
                    color: #04AA6D;
                    background: rgba(6, 11, 9, 0.86);
                }

                @media (max-width: 768px) {
                    .navbar-link {
                        width: 100%;
                        display: block;
                    }
                    .hamburger {
                        display: block;
                    }
                }
                `}
            </style>
        </>
    );
};

export default Navbar;
