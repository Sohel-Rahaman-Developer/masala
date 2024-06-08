import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialLink() {
  return (
    <div className="flex space-x-4 items-center">
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-700 flex items-center"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faYoutube} style={{ height: '100%' }} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 flex items-center"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faFacebook} style={{ height: '100%' }} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 flex items-center"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faInstagram} style={{ height: '100%' }} />
      </a>
    </div>
  );
}

export default SocialLink;
