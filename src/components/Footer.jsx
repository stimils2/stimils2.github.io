

import React from "react";
import {
  
} from "../editable-stuff/configurations.json";

  const Footer = () => {
    // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);

  return (
    <div id="contact">
    <div className="container container-fluid">
          <div className="d-inline align-self-center">
          <h2 className=" text-center">Get In Touch</h2>
          <p className="lead text-center" style={{fontSize:'22px'}}>I'm open to Opportunities. I can be reached at
    
            <a href="mailto:sandeeptimilsina@gmail.com">{" "}
               sandeeptimilsina@gmail.com
            </a>
          </p>
          
            {}
    <footer style={{backgroundColor:'white'}} className="mt-auto py-3 text-center">
    </footer>
    </div>
      </div>
      </div>
  );
};

export default Footer;
