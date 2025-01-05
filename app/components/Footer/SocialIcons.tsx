import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterSocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "https://facebook.com" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialIcons;