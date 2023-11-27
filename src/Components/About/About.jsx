import React from 'react'
import '../About/About.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (

        <>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
               
            </div>
            <h2 >Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        {/* <img src="/w3images/team1.jpg" alt="Jane"  /> */}
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                           
                            <p>jane@example.com</p>
                           <Link to='/contacts'><p><button className="button">Contact</button></p></Link> 
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        {/* <img src="/w3images/team2.jpg" alt="Mike"  /> */}
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                           
                            <p>mike@example.com</p>
                           <Link to='/contacts'><p><button className="button">Contact</button></p></Link> 
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        {/* <img src="/w3images/team3.jpg" alt="John" /> */}
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Designer</p>
                           
                            <p>john@example.com</p>
                           <Link to='/contacts'><p><button className="button">Contact</button></p></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About