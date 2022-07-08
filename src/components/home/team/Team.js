import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import { MemberCard } from './MemberCard';

// headshots
import fernandoHeadshot from '../../../template/img/team/f-headshot.jpg';
import marianoHeadshot from '../../../template/img/team/mariano-headshot.png';
import santiagoHeadshot from '../../../template/img/team/santiago-headshot.jpeg';
import joacinHeadshot from '../../../template/img/team/joacin-headshot.jpeg';

export function Team() {
    const members = [
        {
            headshot: marianoHeadshot,
            name: "Mariano",
            title: "CEO",
            socials: [
                {
                    link: "https://www.linkedin.com/in/mariano-maisterrena-995b20170/",
                    icon: "lab la-linkedin-in"
                }, // linkedin,
                {
                    link: "https://twitter.com/marianmaiste ",
                    icon: "lab la-twitter"
                }, // twitter
            ],
            aboutText: "Mariano is a Blockchain enthusiast with a passion for creating a more democratic banking system. He is an avid reader and entrepreneur who loves video games, French cinema, and the esports scene."
        },
        {
            headshot: fernandoHeadshot,
            name: "Fernando",
            title: "Lead Developer",
            socials: [
                {
                    link: "https://www.linkedin.com/in/ftrouw/",
                    icon: "lab la-linkedin-in"
                }, // linkedin,
                {
                    link: "https://twitter.com/RassenGUY",
                    icon: "lab la-twitter"
                }, // twitter
                {
                    link: "https://www.rasguymedia.com",
                    icon: "las la-link"
                } // website
            ],
            aboutText: "Fernando is a certified Ethereum Developer with over three years of experience in the space. He was a Co-Founder of the Caribbean Blockchain Network and has spent his time doing research and development on Decentralized Organizations."
        },
        {
            headshot: santiagoHeadshot,
            name: "Santiago",
            title: "Full-Stack Developer",
            socials: [
                {
                    link: "https://www.linkedin.com/in/santiagofontana00",
                    icon: "lab la-linkedin-in"
                } // linkedin,
            ],
            aboutText: "Santiago is a certified Full-Stack Developer, passionate about learning and implementing new technologies. He adore trying new things and enjoys sports, games and reading."
        },
        {
            headshot: joacinHeadshot,
            name: "Joaco",
            title: "Front-End Developer",
            socials: [
                {
                    link: "https://www.linkedin.com/in/joaquintrovato",
                    icon: "lab la-linkedin-in"
                }, // linkedin,
                {
                    link: "https://twitter.com/JoacoTrovato",
                    icon: "lab la-twitter"
                } // twitter
            ],
            aboutText: "Joaquín Andrés Trovato is a young developer, certified as Full-stack, with the desire to be in constant learning and contribute to a work team."
        }
    ]

    return (
        <>
            <header className="mb-5">
                <Row>
                    <Col>
                        <h2 className="text-center">Team</h2>
                    </Col>
                </Row>
            </header>
            <Container>
                <Row className="gy-5 justify-content-md-center justify-content-lg-center">
                    {
                        members.map((member, index) => <MemberCard key={index} {...member} /> )
                    }
                </Row>
            </Container>
        </>
      )
}
