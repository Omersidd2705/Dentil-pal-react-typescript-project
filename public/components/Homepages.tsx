import React from 'react';
import Navbar from './Navbar';

const Homepages: React.FC = () => {
    const listItemStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        border: '2px solid #ccc',
        borderRadius: '18px',
        padding: '12px',
        background: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(6px)',
        transition: 'background 0.3s',
        cursor: 'pointer',
    };

    const blurPStyle = {
        fontSize: '3rem',
        fontFamily: 'sans-serif',
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: '#fff',
        background: 'transparent',
        padding: '8px 16px',
        borderRadius: '8px',
        marginBottom: '300px',
    };

    return (
        <div>
            <Navbar />

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    zIndex: 0,
                }}
            >
                <div style={{ flex: 1, position: 'relative' }}>
                    <img
                        src="/images/doctor.jpeg"
                        alt="Background 1"
                        className="homepage-image"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <p style={blurPStyle}>
                        Iam a dental Professional and I am here to help you.
                    </p>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '20px',
                            width: '90%',
                            background: 'transparent',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '16px',
                        }}
                    >
                        <div className="homepage-list-item" style={listItemStyle}>Registered dental hygiene</div>
                        <div className="homepage-list-item" style={listItemStyle}>Dental Assistants</div>
                        <div className="homepage-list-item" style={listItemStyle}>From Desk</div>
                        <div className="homepage-list-item" style={{ ...listItemStyle, gridColumn: '2' }}>Associate</div>
                        <div style={{ gridColumn: '1 / span 3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <input
                                type="text"
                                placeholder="Search dental services..."
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '8px 0 0 8px',
                                    border: '2px solid #1ad45b',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    width: '60%',
                                    maxWidth: '320px',
                                    background: 'rgba(255,255,255,0.3)',
                                    backdropFilter: 'blur(6px)',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: 'rgb(47, 219, 154)',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0.75rem 1.5rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    transition: 'background 0.3s',
                                    backdropFilter: 'blur(6px)',
                                    background: 'rgba(47, 219, 154, 0.3)',
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                    <img
                        src="/images/nurse.jpg"
                        alt="Background 2"
                        className="homepage-image"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <p style={blurPStyle}>
                        You can contact me for any dental related issues.
                    </p>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '20px',
                            width: '90%',
                            background: 'transparent',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '16px',
                        }}
                    >
                        <div className="homepage-list-item" style={listItemStyle}>Checkups</div>
                        <div className="homepage-list-item" style={listItemStyle}>Cleaning</div>
                        <div className="homepage-list-item" style={listItemStyle}>Whitening</div>
                        <div className="homepage-list-item" style={{ ...listItemStyle, gridColumn: '2' }}>Implants</div>
                        <div style={{ gridColumn: '1 / span 3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <input
                                type="text"
                                placeholder="Search dental services..."
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '8px 0 0 8px',
                                    border: '2px solid #1ad45b',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    width: '60%',
                                    maxWidth: '320px',
                                    background: 'rgba(255,255,255,0.3)',
                                    backdropFilter: 'blur(6px)',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: 'rgb(47, 219, 154)',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0.75rem 1.5rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    transition: 'background 0.3s',
                                    backdropFilter: 'blur(6px)',
                                    background: 'rgba(47, 219, 154, 0.3)',
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <style>
                    {`
                        .homepage-image {
                            opacity: 0.85;
                            filter: blur(16px);
                            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out, filter 0.5s;
                            background-color: transparent;
                        }
                        .homepage-image:hover {
                            opacity: 1;
                            filter: blur(0);
                            transform: scale(1.08);
                            background-color: rgba(26, 212, 91, 0.6);
                        }
                        .homepage-list-item:hover {
                            background: rgba(26, 212, 91, 0.6) !important;
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Homepages;
