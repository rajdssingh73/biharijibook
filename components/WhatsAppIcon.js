import React from "react";

function WhatsAppIcon() {
  return (
    <a
      className="whatsapp-icon"
      href="https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppIcon;
