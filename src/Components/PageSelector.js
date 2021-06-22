import React, { Component } from "react";
import "../css/pageselector.css";

class PageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
    };
  }

  changePage = (page) => {
    this.props.changePage(page);
    this.setState({ page: page });
  };
  render() {
    return (
      <div>
        <div id="pageId_holder">
          <button
            className={`pageId ${this.state.page === 1 ? "current" : ""}`}
            onClick={() => this.changePage(1)}
          >
            1
          </button>
          <button
            className={`pageId ${this.state.page === 2 ? "current" : ""}`}
            onClick={() => this.changePage(2)}
          >
            2
          </button>
        </div>
      </div>
    );
  }
}

export default PageSelector;
