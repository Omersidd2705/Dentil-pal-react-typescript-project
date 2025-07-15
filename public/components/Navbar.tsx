import React from 'react';

const navbarStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    padding: '0.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    color: 'black',
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const logoStyles: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'black',
};

const navContainerStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
};

const navLinksStyles: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
};

const navLinkStyles: React.CSSProperties = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.3s, background 0.3s',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    background: 'none',
};

const navLinkActiveStyles: React.CSSProperties = {
  
    color: 'white',
};

const hoverColor = '#04AA6D';

const Navbar: React.FC = () => {
    const activePath = window.location.pathname;

    return (
        <>
            <nav style={navbarStyles}>
                <div style={logoStyles}>DentiPal</div>
                <div style={navContainerStyles}>
                    <ul style={navLinksStyles}>
                        <li>
                            <a
                                href="/"
                                style={{
                                    ...navLinkStyles,
                                    ...(activePath === '/' ? navLinkActiveStyles : {}),
                                    color: 'inherit', // Remove color for Professional Login
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
                                    marginLeft: '10rem',
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
                                marginLeft: '20rem', 
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
                               marginLeft: '1rem',
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
                .navbar-link {
                    color: black;
                    background: none;
                }
                .navbar-link:hover {
                    color: ${hoverColor};
                    background: rgba(4,170,109,0.08);
                }
                `}
            </style>
        </>
    );
};

export default Navbar;
