import React from "react";
import marianvsfLogo from "../../../assets/logo2.jpg"

const Footer = () => {
  return(
	<footer className="footer mt-auto py-3 text-center fixed-bottom" bg="dark" data-bs-theme="dark" 
  			style={{ color: 'grey'}} > 
			<p>Made by 
			<a href="https://github.com/Marianvsf"> Marian Suarez
			<img className="logo"
              src={marianvsfLogo}
              style={{
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "50%",
                width: "35px",
              }}
              alt="logo"
            />
✨</a>
			
		</p>
	</footer>
  );
}


export default Footer;
