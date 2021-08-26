import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="copyright">
        <p>&copy; {date} - Organisation</p>
      </div>
    </footer>
  );
};

export default Footer;
