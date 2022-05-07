import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(props) {

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2022 NZ Louis</p>
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="https://nzlouis.com" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">About Me</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;