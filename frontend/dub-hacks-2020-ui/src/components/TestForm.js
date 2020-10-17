import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

import "./index.css";

const layout = {
  wrapperCol: {
    span: 20,
  },
};

class TestForm extends React.Component {
  handleFormSubmit = async (values) => {
    const postObj = {
      test_title: values.test_title,
      test_data: values.test_data,
    };

    axios.defaults.headers = {
      "Content-Type": "application/json",
    };
    await axios
      .post("http://127.0.0.1:8000/testapi/create/", postObj)
      .then((res) => {
        console.log(res, "Posted!");
      });

    console.log(postObj);
  };

  render() {
    return (
      <div className="container">
        <h1>Test POST endpoint</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.handleFormSubmit}
        >
          <Form.Item
            label="test_title"
            name="test_title"
            rules={[
              {
                required: true,
                message: "Please input a test title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="test_data"
            name="test_data"
            rules={[
              {
                required: true,
                message: "Please input test data!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="container2">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}

export default TestForm;
