import React, { Component } from "react";
import axios from "axios";

import ArticlePreview from "../components/articlePreview";


export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/ruedevelop.wordpress.com/posts/"
       
      )
      .then(res => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="blog">
        <div className="anchor" id="blog" />

        <h1 className="sectionTitle">Latest Posts</h1>
        
        {this.state.posts.map(post => <ArticlePreview post={post} />)}
        <div>
       
      </div>
      </div>
    ); 
  }
}