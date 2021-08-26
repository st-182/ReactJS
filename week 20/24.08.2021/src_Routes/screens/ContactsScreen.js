import React, { useEffect } from "react";

const ContactsScreen = () => {
  useEffect(() => {
    document.title = "React: Contacts";
  }, []);
  return (
    <section>
      <h1>Contacts</h1>
    </section>
  );
};

export default ContactsScreen;
