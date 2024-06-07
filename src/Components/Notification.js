import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, handleClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClose();
        }, 2000);

        return () => clearTimeout(timeout);
    }, [handleClose]);

    return (
        <div className="notification">
            <p>{message}</p>
            <button onClick={handleClose}>Close</button>
        </div>
    );
};

export default Notification;
