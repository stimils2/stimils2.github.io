

import React from "react";
import Table from 'react-bootstrap/Table'


const Skills = () => {
return (
    <div id="skills" className="jumbotron jumbotron-fluid m-0" >
      <div className="container container-fluid">
        
            {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
            <div className="d-inline align-self-center">
            <h1 className=" display-4 text-center">Skills</h1>
            <Table striped bordered hover>
        
  <tbody>
    <tr>
      <td>Programming Languages</td>
      <td>Python, R, SQL, Spark, C++, Java</td>
      
    </tr>
    <tr>
      <td>Machine Learning</td>
      <td>PyTorch, Keras, Scikit-learn, Scipy, Pandas, NumPy</td>
      
    </tr>
    <tr>
      <td>Web Technologies</td>
      <td>XML, JavaScript, HTML5, CSS3, Bootstrap</td>
      
    </tr>
    <tr>
      <td>Tools</td>
      <td>AWS (S3, EC2, EMR), Git, Minitab, MATLAB</td>
      
    </tr>
    <tr>
      <td>Visualization Tools</td>
      <td>PowerBI, Tableau</td>
      
    </tr>
   
  </tbody>
</Table>
     
            </div>
          
        </div>
      </div>
  );
};




export default Skills;