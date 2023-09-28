import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <h1 className="footer_title">Faisal</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portofolio" className="footer_link">Project</a>
                    </li>

                    <li>
                        <a href="#service" className="footer_link">Services</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/faisal.ardhni/" className="footer_social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://web.facebook.com/mar.sans.1675" className="footer_social-link" target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://github.com/FaisalArdhani" className="footer_social-link" target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Crypticalcode. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer