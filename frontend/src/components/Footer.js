import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <>
      <div className="copyright">
        <p>&copy; {date} - Organisation</p>
      </div>
    </>
  );
};

export default Footer;
