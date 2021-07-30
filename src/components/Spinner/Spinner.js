import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="m-0 row justify-content-center align-items-center">
                    <div className="col-auto spinner-border spinner" role="status"></div>
            </div>
    );
};

export default Spinner;