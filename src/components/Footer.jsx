import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-100 py-6 text-center">
//       <div className="flex justify-center space-x-6 mb-2">
//         {/* <a
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-blue-500"
//         >
//           GitHub
//         </a> */}
//         <a
//           href="http://linkedin.com/in/yogeshwaran-backend/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-blue-500"
//         >
//           LinkedIn
//         </a>
//         <a href="tel:+91 9788622058" className="hover:text-blue-500">
//           Phone
//         </a>
//         <a href="mailto:yogeshshankar139@gmail.com" className="hover:text-blue-500">
//           Email
//         </a>
//       </div>
//       <p className="text-sm">&copy; {new Date().getFullYear()} yogeshwaran All rights reserved.</p>
//     </footer>
//   );
// };


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 text-center">
      <div className="flex justify-center space-x-6 mb-2 text-2xl">
        {/* <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaGithub />
        </a> */}
        <a
          href="http://linkedin.com/in/yogeshwaran-backend/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a href="tel:+919788622058" className="hover:text-blue-500 transition-colors duration-300">
          <FaPhone />
        </a>
        <a href="mailto:yogeshshankar139@gmail.com" className="hover:text-blue-500 transition-colors duration-300">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Yogeshwaran All rights reserved.</p>
    </footer>
  );
};
