import React from 'react';
import './styles/footer.css'

var contact = [
    { name:"linkedin", icon:"https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png", link:"https://www.linkedin.com/in/maverick-wong/" },
    { name:"github", icon:"https://cdn-icons-png.flaticon.com/512/25/25231.png" , link:"https://github.com/maverickwong17" },
    { name:"facebook", icon:"https://cdn-icons-png.flaticon.com/512/44/44646.png" , link:"https://www.facebook.com/maverickwong17" },
    { name:"instagram", icon:"https://cdn-icons-png.flaticon.com/512/87/87390.png" , link:"https://www.instagram.com/whats_wong.maverick/" },
    { name:"twitter", icon:"https://cdn-icons-png.flaticon.com/512/81/81609.png" , link:"https://twitter.com/wong_maverick" },
]

var [ linkedin , github , facebook , instagram , twitter ] = contact


function Footer() {
  return (
    <footer>
    <h4>Contact Me</h4>
    <ul class="links">
        <li>
            <a href="tel:4085084473">
                <img src='https://cdn-icons-png.flaticon.com/512/15/15874.png' alt="phone"/>
            </a>
        </li>
        <li>
            <a href="mailto:wmaverick4@gmail.com">
            <img src='https://cdn-icons-png.flaticon.com/512/646/646094.png' alt="email"/>
            </a>
        </li>
        {contact.map((item, index) => (
                <li key={index}>
                    <a href= {item.link} target="_blank"> 
                    <img src={item.icon} alt={item.name} />
                    </a>
                </li>
        ))}
    </ul>
    </footer>
  )
}
export default Footer