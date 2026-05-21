import React from "react";

const ContactsPage = () => {
  return (
    <div className="bg-red-400 w-full h-screen flex  flex-wrap">
      {[1, 2, 3, 4, 1, 2, 3, 4].map((i) => (
        <div className="w-1/3 h-[50vh] border border-gray-950">
          Hi from yogesh
        </div>
      ))}
    </div>
  );
};

export default ContactsPage;
