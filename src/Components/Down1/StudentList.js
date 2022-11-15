import Table from "react-bootstrap/Table";
import "./StudentList.css";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      name: "",
      email: "",
      phone: "",
    };
  }

  getApiData = async () => {
    try {
      const res = await axios.get("https://back-chess.vercel.app/add");
      this.setState({ datas: res.data.content });
      console.log(this.state.datas);
    } catch (e) {
      console.log("this is error", e);
    }
  };

  componentDidMount() {
    this.getApiData();
  }

  deleteStudentdata(id) {
    axios.delete("https://back-chess.vercel.app/add/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      datas: this.state.datas.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <h1>LIST OF PARTICIPANTS</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>P.Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/edit/" + data._id} id="linker">Update</Link> |{" "}
                    <button onClick={() => this.deleteStudentdata(data._id)} id="deleted">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
