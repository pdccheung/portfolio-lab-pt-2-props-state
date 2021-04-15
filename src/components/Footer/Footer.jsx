import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

function Footer(props) {
  return (
      <div className="Footer component">
        Footer
        <SocialMedia />
        <a href={props.imgURL} target="_blank">My image</a>
      </div>
  );
}

export default Footer;