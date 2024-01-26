import "../Styles/Footer.css"

export default function Footer() {
    return (
        <div className="footer-section" id="CONTACT">
            <div className="footer-display">
                <div className="footer-contact">
                    <div className="footer-img">
                        <img src="https://srmrmp.edu.in/wp-content/uploads/2022/01/logo1.png" alt="" />
                    </div>
                    <div className="phone">
                        <i class="fa-solid fa-phone" style={{ fontSize: "27px", position: "relative", left: "-3px" }}></i>
                        <div className="phoneTo"> 1800 102 1525</div>
                    </div>
                    <div className="about-email">
                        <i class="fa-solid fa-envelope" style={{ fontSize: "27px" }}></i>
                        <div className="mailTo"><a href="mailto:helpdesk@srmrmp.edu.in">helpdesk@srmrmp.edu.in</a></div>
                    </div>
                </div>
                <div className="footer-about">
                    <div className="footer-about-desc">
                        <div className="footer-about-head">
                            About Us
                        </div>
                        <div className="footer-head-description" style={{ fontSize: "19px" }}>
                        Starting with this strong foundation at SRM Ramapuram, where we are currently undergrads pursuing our B.Tech degrees, our collective passion lies in creating and solving real-world problems. Passionate about making a meaningful impact, we actively seek opportunities to channel our enthusiasm into innovative projects and practical solutions. The dynamic environment at SRM Ramapuram provides us with the perfect platform to cultivate our skills and explore interdisciplinary approaches. As we navigate through our academic journey, we are committed to embracing challenges and contributing to positive change in the world.

                        </div>
                    </div>
                    <div className="footer-about-contribute">
                        <i class="fa-brands fa-github" style={{ fontSize: "27px", color:"rgb(12,82,159)" }}></i>
                        <a href="https://github.com/Muhammad-Owais-Warsi/Leave-Ease" style={{ padding: "12px", position: "relative", top: "-4px" }}> Contribute to our Projects</a>
                    </div>
                </div>
            </div>
            <div className="footer-credit">
                <div className="credit-copyright" style={{fontSize:"30px", color:"gray"}}>Copyright © 2024 | Designed and Developed by   <span style={{color:"rgb(12,82,159)", paddingLeft:"19px" ,paddingRight:"19px"}}> Owais </span>  |  <span style={{color:"rgb(12,82,159)", paddingLeft:"19px", paddingRight:"19px"}}> Deboneil </span>  |  <span style={{color:"rgb(12,82,159)", paddingLeft:"19px"}}> Aditya </span></div>
            </div>
        </div>



    )
}