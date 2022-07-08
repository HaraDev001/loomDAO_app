import React, { useState } from 'react';
import { Dropdown} from 'react-bootstrap';

const FilterDropDown = ({title, options}) => {
    const [filterOption, setFilterOption] = useState();
    return (
        <Dropdown as="div" className="me-3" >
            <Dropdown.Toggle
            variant="outline-hl-light-mild" // something with outline here
            >
            { title }
            </Dropdown.Toggle>
            <Dropdown.Menu>
                { 
                    options.map((option, i) => (
                        <Dropdown.Item 
                        eventKey={String(i)}
                        key={i} 
                        onClick={() => setFilterOption(option.toLowerCase())}
                        active={filterOption === option.toLowerCase()}
                        >{option}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterDropDown;
