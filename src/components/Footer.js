import React from 'react';
import './styles/footer.css'

const contact = {
    icons: {
        phone: 'tel:4085084473',
        mail: 'mailto:wmaverick4@gmail.com',
        linkedin: "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png",
        github:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        facebook:"https://cdn-icons-png.flaticon.com/512/44/44646.png",
        instagram:"https://cdn-icons-png.flaticon.com/512/87/87390.png" ,
        twitter:"https://cdn-icons-png.flaticon.com/512/81/81609.png"
    },
    links: {
        phone: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
        mail: 'https://cdn-icons-png.flaticon.com/512/646/646094.png',
        linkedin: "https://www.linkedin.com/in/maverick-wong-4488b4241/",
        github:"https://github.com/maverickwong17",
        facebook:'https://www.facebook.com/maverickwong17',
        instagram:"https://www.instagram.com/whats_wong.maverick/",
        twitter:"https://twitter.com/wong_maverick"
    }
}

function Footer() {
  return (
    <footer>
    <h4>Find Me At:</h4>
    <ul class="links">
        <li>
            <a href= {contact.links.phone}>
                <img src={contact.icons.phone} alt="phone"/>
            </a>
        </li>
        <li>
            <a href= {contact.links.mail}>
            <img src={contact.icons.mail} alt="email"/>
            </a>
        </li>
        <li>
            <a href= {contact.links.linkedin} target="_blank"> 
            <img src={contact.icons.linkedin} alt="Linkdin" />
            </a>
        </li>
        <li>
            <a href= {contact.links.github} target="_blank"> 
            <img src={contact.icons.github} alt="Github"/>
            </a>
        </li>
        <li>
            <a href={contact.links.facebook} target="_blank"> 
            <img src={contact.icons.facebook} alt="Facebook"/> 
            </a>
        </li>
        <li>
            <a href={contact.links.instagram}target="_blank"> 
            <img src={contact.icons.instagram} alt="instagram"/>
            </a>
        </li>
        <li>
            <a href={contact.links.twitter} target="_blank"> 
            <img src={contact.icons.twitter} alt="Twitter"/>
            </a>
        </li>
    </ul>
    </footer>
  )
}
export default Footer