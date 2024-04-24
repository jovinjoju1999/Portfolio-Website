import logo from "../assets/jjLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { linkedinURL } from "../constants";
import { githubURL } from "../constants";
import { instagramURL } from "../constants";
import { twitterURL } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={twitterURL} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
