import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialLink() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://youtube.com/@milmapure?si=L_Oc0VbNolI-noZ_"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-red-500 hover:text-red-700"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faYoutube} style={{ height: '100%' }} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61561113150552&mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-500 hover:text-blue-700"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faFacebook} style={{ height: '100%' }} />
      </a>
      <a
        href="https://www.instagram.com/milmapure?igsh=MWdhbzJrZ2sxa3d5bQ%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-pink-500 hover:text-pink-700"
        style={{ height: '25px', width: '25px' }}
      >
        <FontAwesomeIcon icon={faInstagram} style={{ height: '100%' }} />
      </a>
    </div>
  );
}

export default SocialLink;
