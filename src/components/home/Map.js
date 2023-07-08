import React from "react";

const Map = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.417644191421!2d33.19858327239681!3d0.4930792375259933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e7d91a73e4889%3A0x92d4b1bb50355630!2sKiira%20College%20Butiki!5e0!3m2!1sen!2sug!4v1688732094541!5m2!1sen!2sug"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="text-center mt-4">
        <a
          id="largeMapLink"
          target="_blank"
          href="https://maps.google.com/maps?ll=0.493004,33.19919&z=18&t=m&hl=en&gl=UG&mapclient=embed&q=Kiira%20College%20Butiki"
          className="text-blue-500 underline"
        >
          View Larger Map
        </a>
        &nbsp; | &nbsp;
        <a
          id="dirMapLink"
          target="_blank"
          href="https://maps.google.com/maps/dir//Kiira+College+Butiki/@0.4929934,33.1992316,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x177e7d91a73e4889:0x92d4b1bb50355630"
          className="text-blue-500 underline"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Map;
