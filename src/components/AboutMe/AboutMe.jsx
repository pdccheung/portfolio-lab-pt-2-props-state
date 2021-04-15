import React from 'react';

function AboutMe(props) {
  return (
      <div className="AboutMe component">
        About me
        my name is {props.myName}
      </div>
  );
}

export default AboutMe;