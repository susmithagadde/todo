import React, { Component } from "react";

class TodoResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { title, description, status, dueDate } = this.props.location;
    return (
      <div className="project-overlay">
        <div className="container ff">
          <a href="/" className="previous round pull-left">
            &#8249;
          </a>
          <div className="clearfix"></div>
          <div className="row justify-content-center align-items-center h-100 card-content">
            <div className="col-md-12">
              <h4 className="news-title">{title}</h4>
              <p className="test">{status}</p>
              <p className="test">Published At: {dueDate}</p>

              <h5 className="desc">Description</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoResults;
