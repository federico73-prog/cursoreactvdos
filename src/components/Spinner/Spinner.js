import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center ">
            <div className="spinner-border spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;