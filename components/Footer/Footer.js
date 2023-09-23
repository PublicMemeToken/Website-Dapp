import React from "react";
import "./Footer.module.css";
import PrivacyModal from "../ModalView/PrivacyModal";

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
import { faCopyright, faInbox, faX } from "@fortawesome/free-solid-svg-icons";

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
                    href="https://telegram.com"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                    href="http://discord.com"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a
                    href="https://twitter.com/publicmemetoken"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faX} />
                </a>
                <a
                    href="https://www.instagram.com/public_meme_token/"
                    target="_blank"
                    className="item6"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                {false && <PrivacyModal click={true} />}
                
            </div>
        </footer>
    );
};

export default Footer;