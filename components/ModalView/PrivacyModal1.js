import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <div>
            
        <p >
        <br></br>​<br></br>
        PHASE 1: FOUNDATION​<br></br>​<br></br>
🚀 Smart Contract Development:Secure and audited smart contract for PMT token to ensure transparency and trust.
​<br></br>​<br></br>
🌐 Community Building: Telegram,  Twitter - Get ready for the hype train with a strong and engaged PMT community.
​​<br></br>​<br></br>
📣 Branding and Marketing: Spread the word about Public Meme Token with a comprehensive marketing campaign. Let's go viral!
​​<br></br>​<br></br>
💥 Merchandise and Swag: Rock the PMT style with branded merchandise and swag. Show off your Public Meme Token pride!
        </p>
        </div>
    );
    
    return (
        <>
            <p style={{
          
        }}
        className="" onClick={() => setOpen(true)}>
            Phase 1 
            </p>
            <Modal open={open} onClose={() => setOpen(false)} center>
                
                {policyText}
                
                
            </Modal>
        </>
    );
};

export default PrivacyModal;
