import React, {Component} from 'react';
import { fetchJSON } from "./utils/communication";

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  async componentDidMount() {
    await fetchJSON("/users")
      //.then(response => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
  }

  render() {
    const {error, isLoaded, users} = this.state;
    if (error) {
      return <div>{error.toString()}</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div>
          <ol>
            {
              users.map(user => (
                <li key={user.id} align="start">
                  <div>
                    <p>{user.username}</p>
                    <p>{user.password}</p>
                  </div>
                </li>
              ))
            }
          </ol>
        </div>
      );
    }
  }
}

export default Art;