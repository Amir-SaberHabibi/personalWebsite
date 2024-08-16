import logo from "../assets/logo2.png";
import cvDoc from "../assets/cv.pdf"; // Import your CV PDF
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaRegFileAlt } from "react-icons/fa"; // Use FaRegFileAlt for a CV icon
import '../index.css';

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="logo-margin-left w-20 neon-border" src={logo} alt="logo" />
        </div>
        <div className="m-10 flex items-center justify-center gap-4 text-2xl">
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
            <a href="https://x.com/amiiiirsbr" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-icon">
               <FaTwitter />
            </a>
            <a href="https://www.instagram.com/amirsaber1" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-icon">
               <FaInstagram />
            </a>
            {/* CV Download Link with a more CV-like icon */}
            <a href={cvDoc} 
               download="Amir_Saberhabibi_CV.pdf" 
               className="social-icon">
               <FaRegFileAlt />
            </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
