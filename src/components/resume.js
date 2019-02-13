import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="profilepic.png"
                alt="avatar"
                style={{ height: "300px", width: "250px" }}
              />
            </div>
            <div
              className="resume-left-col"
              style={{ margin: "25px", padding: "25px", background: "white", opacity: ".6", textAlign:"center", fontFamily:"'Times New Roman', Times, serif", fontSize:"25px"}}
            >
              <h2 style={{ paddingTop: "1em",  }}>Rusilah Gojali</h2>
              <h4 style={{ color: "black" }}>Web Developer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "100%"}} />
              <p>
              Motivated  developer who takes a project and delivers hard-working results. Looking for an opportunity to utilize skills and evolve by constantly learning and understanding the world of coding.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

              <h5>Phone</h5>
              <p>(206) 902-0262</p>
              <h5>Email</h5>
              <p>rgojali@gmail.com</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={"Oct. 2018"}
              endYear={"Feb. 2019"}
              schoolName="Skillspire"
              schoolDescription="It's an intense 16 week coding bootcamp that covers front-end development, server-side development, building responsive web applications with an understanding of HTML5 and CSS and adding functionality to websites using JavaScript and jQuery, learning fundamentals of programming, understanding data structures, DOM manipulation, solving algorithms, and using Git and Github."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            
            <Experience
              startYear={"October 2012"}
              endYear={"June 2015"}
              jobName="School Kitchen Staff"
              jobDescription="Makkah Islamic School | Seattle, WA |
              Revamped and motivated kitchen staff to be highly efficient and produce consistent quality.
              Responded to customer issues in a timely manner and resolved to complete satisfaction.
              Produced accurate and thorough management reports.
              Trained new team members.
              Received, organized and rotated paper goods and food ingredients.
              "/>
              <Experience
              startYear={"April 2013"}
              endYear={"June 2013"}
              jobName="Teacher Assistant"
              jobDescription="Makkah Islamic School | Seattle, WA
              Administered and graded tests and quizzes in a timely manner 1-2 times a week.
              Earned positive feedback from parents regarding classroom instruction and student learning success.
              Led a group of 20 first graders in discovery exercises and offered personalized support to individuals in need of extra assistance 4 days a week.
              Provided feedback on individual actions, behaviors and verbal responses to parents.
              "
            
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="JavaScript" progress={80} />
            <Skills skill="React" progress={55} />
            <Skills skill="NodeJS" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
