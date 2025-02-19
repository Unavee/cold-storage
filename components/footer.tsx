"use client"

import React from 'react';
import ShinyText from './bits/shiny';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle} className="font-semibold">
            <span>
                &copy; Powered by  
                <ShinyText text=" Ultra Sense Technologies" disabled={false} speed={4.5} className="custom-class ml-2" /> 
                . {new Date().getFullYear()}{" "}
            </span>
        </footer>
    ); 
};

const footerStyle: React.CSSProperties = {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
};

export default Footer;
