import React from "react";

const Footer = () => {
  return (
    <div className="mt-6">
      <p className="text-center  text-muted pb-2">
        <span className="text-primary">Kiira College Butiki</span> | All Rights
        Reserved &copy;<span>{new Date().getFullYear()} | LyteLink</span>
      </p>
    </div>
  );
};

export default Footer;
