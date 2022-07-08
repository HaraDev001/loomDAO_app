import React from 'react'
import {Col, Card } from 'react-bootstrap';

export function MemberCard({headshot, name, title, socials, aboutText}) {
  return (
    <Col lg="3" md="4">
      <Card className="rounded-5 bg-hl-secondary bg-opacity-0 border border-hl-light-mild">
        <Card.Body>

          <img className="headshot rounded-circle" src={headshot} alt="..." />
          <div className="header d-flex flex-row">
            <div className="text-box text-left">
              <h5 className="">{name}</h5>
              <p className="text-sm text-muted">{title}</p>
              <ul className="list-inline d-flex inline-flex justify-content-start">
                  {socials.map(({link, icon}, index) => <li key={index}>
                    <a href={link} className="socials d-block me-3 text-hl-light" >
                      { icon() }
                  </a></li>)}
              </ul>
            </div>
          </div>


          {/* About member */}
          <div className="">
              <p className="text-xs text-muted ">{aboutText}</p>
          </div>

        </Card.Body>
      </Card>
    </Col>
  )
}
