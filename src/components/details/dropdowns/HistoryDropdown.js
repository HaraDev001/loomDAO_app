import React, { useState } from 'react';
import { Dropdown} from 'react-bootstrap';

const HistoryDropdown = () => {
    const [timeline, setTimeline] = useState('all-time');
    const handleItemClicked = e => setTimeline(e.target.firstChild.data);

    return (
        <Dropdown as="span" >
            <Dropdown.Toggle
            className="price-dropdown"
            variant="null"
            as="span">
                { timeline.toLowerCase() }
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item 
            eventKey="1"
            active={false}
            onClick={handleItemClicked}
            >Past week</Dropdown.Item>
            <Dropdown.Item 
            eventKey="2" 
            active={false}
            onClick={handleItemClicked}
            >Past Month</Dropdown.Item>
            <Dropdown.Item 
            eventKey="2" 
            active={false}
            onClick={handleItemClicked}
            >All-time</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default HistoryDropdown;
