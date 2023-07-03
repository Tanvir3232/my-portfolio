
import { FaGithub, FaLinkedin, FaEnvelope,FaFacebook, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00091A] text-white py-8">
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com/Tanvir3232" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanvir-ahmad-788303202" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          </li>
         
          <li>
            <a href="https://www.facebook.com/profile.php?id=100011693115758">
              <FaFacebook className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className='flex md:flex-row flex-col gap-6 items-center justify-center my-3'>
        <p className='flex gap-2 items-center'><FaEnvelope className="text-2xl"></FaEnvelope> Email: tanvirahmadstudent@gmail.com</p>
        <p className='flex gap-2 items-center'><FaPhone className='text-xl'></FaPhone> Phone: +8801648736464</p>
      </div>
      <div className="flex justify-center mt-4">
        <p>&copy; 2023 Tanvir Ahmad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
