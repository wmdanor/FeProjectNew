import * as React from 'react';

function Contacts() {
  return (
    <>
      <div className="container">
        <h2>Contacts</h2>
        <p>Address: lul</p>
      </div>
      <div className="fluid-container">
        <iframe
          title="Our location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5781.587254625391!2d32.58331254531559
          !3d46.066642440211815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c13bb512c03635%3A0x9
          d269bfb166fa720!2z0JTQttCw0YDQuNC70LPQsNGG0YzQutCwINC60L7RgdCw!5e0!3m2!1sru!2sua!4v1622572516899
          !5m2!1sru!2sua"
          style={{ border: 0, width: '100%', height: '500px' }}
          allowFullScreen=""
        />
      </div>
    </>
  );
}

export default Contacts;
