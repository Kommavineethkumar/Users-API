import React, { Component } from "react";
import "../css/users.css";
import PageSelector from "./PageSelector";

class Users extends Component {
  constructor(props) {
    super(props);
    // State to store the users array of objects and current page
    this.state = {
      users: [],
      page: 1,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    // Fetching data from API, after component mounting
    this.fetchData(1);
  }

  // Function to call the API
  fetchData = async (page) => {
    let data = [];
    // HTTP GET request
    try {
      let res = await fetch(`https://reqres.in/api/users?page=${page}`, {
        method: "GET",
      });
      // Convert the response to json
      res = await res.json();
      // Store the data to state
      data = res.data;
      this.setState({ users: data, page: page });
    } catch (e) {
      // In case of API down
      this.setState({ users: [], page: 0 });
    }
  };

  // Function to change the page and call the API
  changePage = (page) => {
    this.fetchData(page);
  };

  render() {
    return (
      <div id="users-holder">
        {this.state.users ? (
          // Iterate through the users and render the required JSX
          this.state.users.map((t) => (
            <div id="user" key={t.first_name + " " + t.last_name}>
              {" "}
              {/* To display user details*/}
              <img
                src={t.avatar}
                alt={t.first_name + " " + t.last_name}
                id="avatar"
              ></img>{" "}
              {/* To display user avatar*/}
              <p id="name">{t.first_name + " " + t.last_name}</p>{" "}
              {/* To display user full name*/}
              <p id="email">{t.email}</p> {/* To display user email*/}
              <div id="divider" style={{ marginTop: 15 }}></div>{" "}
              {/* To display the dividing line*/}
            </div>
          ))
        ) : (
          <span></span>
        )}
        {/* Page Selector is used to select the page*/}
        <PageSelector page={this.state.page} changePage={this.changePage} />
      </div>
    );
  }
}

export default Users;
