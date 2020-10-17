import React from "react";
import axios from "axios";
import { Button } from "antd";

class AllForms extends React.Component {
  state = {
    forms: [],
  };

  getForms = () => {
    axios.get("http://127.0.0.1:8000/testapi/").then((res) => {
    console.log(res.data)
      this.setState({
        forms: res.data,
      });
    });
  };

  componentDidMount() {
    this.getForms();
  }

  render() {
    return (
      <div>
        {this.state.forms.map((item) => {
          return (
            <div>
              <p style={{ textAlign: "center" }}>
               {"{"} {"id:"} {item.id} {"test_title:"} {"test_title:"} {item.test_title}
                {"test_data:"} {item.test_data} {"}"}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllForms;
