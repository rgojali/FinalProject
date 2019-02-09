import React from 'react';

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

export default NavBar;