import React from 'react'
import {Col, Card } from 'react-bootstrap';

export function MemberCard({headshot, name, title, socials, aboutText}) {
  return (
    <Col lg="3" md="5">
      <Card className="rounded-xl bd-3 bd-2 shadow-lg mt-5">
        <Card.Body>
          {/* member headshot */}
          <div className="position-relative mb-5">
            <div className="position-absolute top-100 start-50 translate-middle">
              <img className="img-fluid rounded-circle p-1 bg-dark" src={headshot} alt="..." width="85"/>
            </div>
          </div>

          {/* member title and details */}
          <div className="p-2 text-center">
            <h5 className="mb-1">{name}</h5>
            <p className="text-sm text-muted">{title}</p>
          </div>

          {/* member socials links */}
          <ul className="list-inline mb-0 d-flex inline-flex justify-content-center pb-4">
              {socials.map(({link, icon}, index) => <li key={index}><a className="social-link social-link-sm bg-hover-primary mx-1" href={link}><i className={icon}></i></a></li>)}
          </ul>

          {/* seperator */}
          <div className="bd-1"></div>

          {/* About member */}
          <div className="p-4">
              <p className="text-xs text-muted mb-0">{aboutText}</p>
          </div>

        </Card.Body>
      </Card>
    </Col>
  )
}
