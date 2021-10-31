import { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post(`${process.env.REACT_APP_API_URL}api/event/upload`, data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
        console.log(res.data.filename);
      });
  };
  render() {
    return (
      <div className="container2">
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button
          type="button"
          class="btn btn-success btn-block"
          onClick={this.onClickHandler}
        >
          Upload
        </button>
      </div>
    );
  }
}
export default Contact;
