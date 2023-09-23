import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <div>
            
        <p >
            
        <Image src="/tokenomics.png" width={640} height={320} alt="Platin Membership" />
        </p>
        </div>
    );
    
    return (
        <>
            <button style={{
          width:149,
          color: "white" ,
        }}
        className="item1" onClick={() => setOpen(true)}>
                PMT Tokenomics
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                
                {policyText}
                
                
            </Modal>
        </>
    );
};

export default PrivacyModal;