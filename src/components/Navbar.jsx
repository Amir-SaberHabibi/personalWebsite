import logo from "../assets/logo2.png";
import cvDoc from "../assets/cv.pdf"; 
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import '../index.css';

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="logo-margin-left w-20 neon-border" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-1 text-2xl">
          <a href={cvDoc} 
             download="Amir_Saberhabibi_CV.pdf" 
             className="social-icon">
             CV
          </a>
          <a href="https://www.linkedin.com/in/amir-saberhabibi-2173a821a/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon">
             <FaLinkedin />
          </a>
          <a href="https://github.com/Amir-SaberHabibi" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon">
             <FaGithub />
          </a>
          <a href="mailto:amiirsbr@gmail.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon">
             <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/amirsaber1" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon">
             <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
