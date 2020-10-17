import React from "react";
import axios from "axios";

class FormDetail extends React.Component {
  state = {
    form: {},
  };

  getForm = () => {
    const formID = this.props.match.params.formID;
    axios.get(`http://127.0.0.1:8000/testapi/${formID}`).then((res) => {
      this.setState({
        form: res.data,
      });

      console.log(this.state.form);
    });
  };

  componentDidMount() {
    this.getForm();
  }

  render() {
    return (
      <div>
        {"{"} {"id:"} {this.state.form.id} {"test_title:"} {"test_title:"}{" "}
        {this.state.form.test_title}
        {"test_data:"} {this.state.form.test_data} {"}"}
      </div>
    );
  }
}

export default FormDetail;
