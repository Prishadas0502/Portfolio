import React from 'react';

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe 
        title="Google Map"  
        src="https://www.google.com/maps/embed/v1/place?q=Jaipuria+sunride+greens,+vip+road,+zirakpur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="100%" 
        height="300px" 
        style={{ border: 0 }}
      >
      </iframe>
    </div>
  );
};

export default GoogleMap;


