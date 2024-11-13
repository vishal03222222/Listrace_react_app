import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      },
      label: {
        marginBottom: '0.5rem',
        color: '#555',
      },
      input: {
        padding: '0.75rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
      },
      button: {
        padding: '0.75rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
      },
      buttonHover: {
        backgroundColor: '#0056b3',
      },
      buttonText: {
        fontWeight: 'bold',
      },
    };

    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Find the Best Place to Explore</h2>
        <form style={styles.form}>
          <label style={styles.label}>Name</label>
          <input type="text" style={styles.input} placeholder="Enter your name" />

          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} placeholder="Enter your email" />

          <label style={styles.label}>Message</label>
          <textarea style={{ ...styles.input, height: '100px' }} placeholder="Tell us what you're looking for" />

          <button type="submit" style={styles.button}>
            <span style={styles.buttonText}>Submit</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
