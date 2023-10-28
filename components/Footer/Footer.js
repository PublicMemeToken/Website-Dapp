import React from "react";
import "./Footer.module.css";
import PrivacyModal from "../ModalView/PrivacyModal";
import PrivacyModal1 from "../ModalView/PrivacyModal1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    faDiscord,
    faTwitter,
    faTelegram,
    faInstagram,
    faGitbook,
     
    
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faCopyright, faHouse, faX } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                                      
                </div>
                

                <div className="item2">
                    <span style={{ paddingRight: 1 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 1 }}>
                        {new Date().getFullYear()} Public Meme Token. All Rights
                        Reserved.
                    </span>
                </div>
                
                <a
                    href="https://t.me/Publicmemetoken_GroupChat"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
               
                <a
                    href="https://twitter.com/publicmemetoken"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faX} />
                </a>
                <a
                    href="https://docs.publicmemetoken.xyz/public-meme-token-docs/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faBook} />
                </a>
                <a
                    href="https://www.publicmemetoken.xyz/"
                    target="_blank"
                    className="item6"
                >
                    <FontAwesomeIcon icon={faHouse} />
                </a>


                {false && <PrivacyModal click={true} />}
                
                
            </div>
        </footer>
    );
};

export default Footer;
