import React from "react";
import { gtag_report_conversion } from './utils/gtag';

function WhatsAppIcon() {
    const openWhats = () => {
        var url = 'https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!';
        window.open('https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!', '_blank');
        
        const handleDownloadClick = () => {
            gtag_report_conversion('/');
          };
          handleDownloadClick()
      };
  return (
    <a
      className="whatsapp-icon"
    //   href="https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!"
    onClick={openWhats}
    //   target="_blank"
    //   rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppIcon;
