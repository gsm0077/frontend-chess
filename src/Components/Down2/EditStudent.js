import "./AddStudent.css";
import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import withRouter from "./WithRouter";

class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      dob: "",
      phone: "",
      address: "",
      gender: "",
    };

    this.validator = new SimpleReactValidator();
  }

  handleSubmit = (event) => {
    if (this.validator.allValid()) {
      event.preventDefault();
      console.log(this.state);
      const studentdata = {
        name: this.state.name,
        email: this.state.email,
        dob: this.state.dob,
        phone: this.state.phone,
        address: this.state.address,
        gender: this.state.gender,
      };

      axios
        .post(
          "https://back-chess.vercel.app/add/update/" + this.props.params.id,
          studentdata
        )
        .then((res) => console.log(res.data));
      window.location = "/studentlist";

      alert("You submitted the form and stuff!");
    } else {
      event.preventDefault();
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  getApiData = async () => {
    try {
      const lastId = this.props.params.id;
      // console.log(lastId);
      const res = await axios.get(`https://back-chess.vercel.app/add/${lastId}`);
      // console.log(res.data);
      this.setState({
        id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        dob: res.data.dob,
        phone: res.data.phone,
        address: res.data.address,
        gender: res.data.gender,
      });
      // console.log(this.state);
    } catch (e) {
      console.log("this is error", e.message);
    }
  };

  componentDidMount() {
    this.getApiData();
  }

  changing = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="title">Student Details Form</div>
        <form className="row g-6">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.changing}
            />
          </div>
          {this.validator.message("name", this.state.name, "required|alpha")}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              required
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={this.state.email}
              onChange={this.changing}
            />
            {this.validator.message(
              "email",
              this.state.email,
              "required|email"
            )}
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="form-label">DOB</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={this.state.dob}
              onChange={this.changing}
            />
            {this.validator.message(
              "date",
              this.state.dob,
              "required|alpha_num_dash_space"
            )}
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="form-label">Gender</label>
            <select
              id="inputGender"
              className="form-select"
              type="text"
              name="gender"
              value={this.state.gender}
              onChange={this.changing}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {this.validator.message(
              "gender",
              this.state.gender,
              "required|alpha"
            )}
          </div>
          <div className="col-md-4 col-sm-6">
            <label className="form-label">Phone Number</label>
            <input
              required
              type="number"
              className="form-control"
              id="inputPhone"
              name="phone"
              onChange={this.changing}
              value={this.state.phone}
            />{" "}
            {this.validator.message(
              "phone",
              this.state.phone,
              "required|phone|max:10"
            )}
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Full address"
              required
              name="address"
              onChange={this.changing}
              value={this.state.address}
            />{" "}
            {this.validator.message(
              "address",
              this.state.address,
              "required|min:20|max:120"
            )}
          </div>
          <div
            className="col-12"
            style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditStudent);

// export default ;
