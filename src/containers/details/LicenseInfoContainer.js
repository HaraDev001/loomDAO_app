import React from 'react';
import OverlayContainer from '../general/OverlayContainer';

const LicenseInfoContainer = ({children}) => {
  return (
    <OverlayContainer 
    className="py-5"
    circles={[
      { 
        class: "circle-one",
        style: {
          width: "15rem",
          height: "15rem",
          transform: "translateY(5rem)"
        } 
      },
    ]}
    >
      {children}
    </OverlayContainer>
  
  )
}

export default LicenseInfoContainer;