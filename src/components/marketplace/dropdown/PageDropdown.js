import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageDropdown = ({page}) => {
    const navigate = useNavigate();
    
    return (
        <Dropdown as="span" >
            <Dropdown.Toggle
            className="text-hl-cta"
            variant="null"
            as="span">
            { page === 'licenses' ? "License" : page === 'sales' ? 'Sale' : 'All' }
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item 
            eventKey="1"
            active={page === "licenses"} 
            onClick={page !== "licenses" ? () => navigate(`/explore/licenses`, {replace: true}) : null}
            >License</Dropdown.Item>
            <Dropdown.Item 
            eventKey="2" 
            active={page === "sales"}
            onClick={page !== "sales" ? () => navigate(`/explore/sales`, {replace: true}) : null}
            >Sale</Dropdown.Item>
            <Dropdown.Item 
            eventKey="2" 
            active={page === "all"}
            onClick={page !== "all" ? () => navigate(`/explore/all`, {replace: true}) : null}
            >All</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PageDropdown;
