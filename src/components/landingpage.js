import React, { Component } from 'react';
import {  Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {

   
      return(
    
        <div> 
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
       
          <Grid className="landing-grid">
            <Cell col={12}>
              
              <div className="banner-text" >
               
                <h2>Looking for a Full Stack Web Developer?</h2>
                <h3>Look no more. I'm a Seattle-based developer ready to deploy.</h3>
              <hr/>
              <br />
            <p><i class="fab fa-html5"></i>  <i class="fab fa-css3-alt"></i>  <i class="fab fa-js"></i>  <i class="fab fa-react"></i>  <img src="gatsby.svg" alt="gatsbylogo" height="40px" width="40px" />  <i class="fab fa-node"></i></p>
  
  
          <div className="social-links">
          <br />
           <h3>Get to know me:</h3>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rusilah-gojali/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="https://github.com/rgojali" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github-square" aria-hidden="true" />
             
            </a>
  
          </div>
              </div>
            </Cell>
          </Grid>
        
          </div>
      )
    }
  }
  
  export default Landing;



