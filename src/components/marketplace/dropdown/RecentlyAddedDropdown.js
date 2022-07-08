import React from 'react';
import { Dropdown} from 'react-bootstrap';

const PageDropdown = () => {
    
    return (
        <Dropdown as="div" >
            <Dropdown.Toggle
            className="text-hl-light-mild" // fix color
            variant="null"
            as="span">
            Recently added 
            </Dropdown.Toggle>
            <Dropdown.Menu>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PageDropdown;
