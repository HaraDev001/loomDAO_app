import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { MemberCard } from './MemberCard';

// headshots
import fernandoHeadshot from '../../../static/img/landing/team/fernando-headshot.png';
import marianoHeadshot from '../../../static/img/landing/team/mariano-headshot.png';
import santiagoHeadshot from '../../../static/img/landing/team/santiago-headshot.png';
import juanHeadshot from '../../../static/img/landing/team/juan-headshot.png';
import maraHeadshot from '../../../static/img/landing/team/mara-headshot.png';

// socials
import {TwitterCircle} from '../../../static/img/icons/socials'; 
import {LinkedinCircle} from '../../../static/img/icons/socials'; 

const Team = () => {
    const members = [
        {
            headshot: marianoHeadshot,
            name: "Mariano",
            title: "CEO",
            socials: [
                {
                    link: "https://www.linkedin.com/in/mariano-maisterrena-995b20170/",
                    icon: LinkedinCircle
                }, // linkedin,
                {
                    link: "https://twitter.com/marianmaiste ",
                    icon: TwitterCircle
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
                    icon: LinkedinCircle
                }, // linkedin,
                {
                    link: "https://twitter.com/RassenGUY",
                    icon: TwitterCircle
                }
            ],
            aboutText: "Fernando is a certified Ethereum Developer. He was a Co-Founder of the Caribbean Blockchain Network and has spent his time doing research and development on Decentralized Organizations."
        },
        {
            headshot: santiagoHeadshot,
            name: "Santiago",
            title: "Full-Stack Developer",
            socials: [
                {
                    link: "https://www.linkedin.com/in/santiagofontana00",
                    icon: LinkedinCircle
                } // linkedin,
            ],
            aboutText: "Santiago is a certified Full-Stack Developer, passionate about learning and implementing new technologies. He adores trying new things and enjoys sports, games and reading."
        },
        {
            headshot: juanHeadshot,
            name: "Juan",
            title: "UX/UI",
            socials: [
                {
                    link: "https://www.linkedin.com/in/juanzubiaurredesigner",
                    icon: LinkedinCircle
                }, // linkedin,
            ],
            aboutText: "Juan is a certified UX/UI designer with over 15 years of experience. He's detail-oriented and passionate about creating visual experiences, always willing to explore new horizons."
        },
        {
            headshot: maraHeadshot,
            name: "Mara",
            title: "Digital Marketing",
            socials: [
                {
                    link: "https://www.linkedin.com/",
                    icon: LinkedinCircle
                }, // linkedin,
            ],
            aboutText: "JoaquínMara Scalesciani is a Digital Marketing & Communication expert. She is the Founder of Happy, and Leads and develops innovative marketing strategies to meet consumer need — and maximize profits."
        }
    ]

    return (
        <Col lg="10">
            <Row className="gy-5 justify-content-md-center justify-content-lg-center">
                {
                    members.map((member, index) => <MemberCard key={index} {...member} /> )
                }
            </Row>
        </Col>
      )
}

export default Team;