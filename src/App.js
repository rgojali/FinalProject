import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div style={{ position:'center'}}>
      
    <Layout style={{background: 'url(../background2.jpg) center / cover'}}>     
        <Header transparent title={<Link to="/">
                
                </Link>} style={{margin: '10px', color: 'black'}}
          > 
          <a href="/" rel="logo" ><img alt="logo" src="lula.png" height="70px" width="170px" /></a>

        </Header>
        <Drawer className="tab" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Rusilah's Portfolio</Link>}>
            <Navigation style={{fontSize:'22px'}}>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>

              <br />
              {/* LinkedIn */}
          
            <a href="https://www.linkedin.com/in/rusilah-gojali/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="https://github.com/rgojali" rel="noopener noreferrer" target="_blank" >
              <i className="fab fa-github-square" aria-hidden="true" />
             
            </a>
  
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;