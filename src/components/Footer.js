import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
const Footer = () => {
  const icons = [<FaSquareXTwitter />, <FaInstagram />, <FaFacebook />,<FaSnapchatGhost />];
  return (
    <div className="bg-white sticky border-t-2 shadow-md shadow-gray-300 flex justify-center w-full items-center bottom-0 h-20 gap-6">
      {icons.map((icons) =>(<div className="text-gray-600 text-[25px] hover:text-black duration-200 ease-out">{icons}</div>)) }
      
    </div>
  );
};

export default Footer;
