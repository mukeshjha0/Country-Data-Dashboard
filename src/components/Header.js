import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title} >Countries Dashboard</h1>
            <nav style={styles.nav}>
                <a href="/" style={styles.link}>Home</a>
                <a href="/about" style={styles.link}>About</a>
                <a href="/contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#007FFF',
        color: 'white',
    },
    title: {
        fontSize: '52px',
        margin: 10,
        color: 'blue',
    },
    nav: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
    },

     
      
};



export default Header;
