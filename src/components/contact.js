import React, { Component } from 'react';



class Contact extends Component {
  render() {
    return(
      
        <div class="container" style={{margin: "100px", position:"static", width:"700px"}}>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
          <h2>Contact Me</h2>
            <hr/>
          
          <form action="/action_page.php">
             <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label for="lname">Last Name</label>
             <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

      

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

          <input type="submit" value="Submit" style={{fontSize:"20px"}}/>
        </form>
        <br />
        <br />
            <div className="contact-list">
            
                <p class="indent"
                   style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (206) 902-0262 
                    <span style={{paddingLeft:"1em"}}></span>
                  <i class="fas fa-envelope-square" aria-hidden="true"/>
                   rgojali@gmail.com            
                </p>
  
              
            </div>
            
          </div>
         
    
    );
  }
}
export default Contact;
