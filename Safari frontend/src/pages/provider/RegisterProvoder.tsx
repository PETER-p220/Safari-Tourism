import { Card, Form, Input, Button, InputNumber, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import axios from "axios";

type SafariPackage = {
  name: string;
  description: string;
  group_size_min: number;
  group_size_max: number;
  picture: any;
};

const RegisterProvider: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: SafariPackage) => {
    console.log("Safari Package Data:", values);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("group_size_min", values.group_size_min.toString());
      formData.append("group_size_max", values.group_size_max.toString());
      if (values.picture) {
        formData.append("picture", values.picture.originFileObj || values.picture);
        console.log("Picture file:", values.picture);
      }

      const response = await axios.post("http://127.0.0.1:8000/api/safari-packages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Safari package saved successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error saving package:", error.response?.data || error);
      message.error("An error occurred while saving: " + (error.response?.data?.picture || error.message));
    }
  };

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("Image must be smaller than 5MB!");
      return false;
    }
    console.log("Selected file:", file);
    return true;
  };

  return (
    <Card title="Register Safari Package">
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={(errorInfo) => {
          console.log("Validation failed:", errorInfo);
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the package name" }]}
        >
          <Input placeholder="Safari package name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea rows={4} placeholder="Describe the safari package" />
        </Form.Item>

        <Form.Item
          label="Group Size Min"
          name="group_size_min"
          rules={[{ required: true, message: "Please enter the minimum group size" }]}
        >
          <InputNumber min={1} placeholder="Minimum group size" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Group Size Max"
          name="group_size_max"
          rules={[{ required: true, message: "Please enter the maximum group size" }]}
        >
          <InputNumber min={1} placeholder="Maximum group size" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Picture"
          name="picture"
          valuePropName="file"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e[0]; // Handle file list
            }
            return e && e.file; // Return the file object
          }}
          rules={[{ required: true, message: "Please upload a picture" }]}
        >
          <Upload
            name="picture"
            listType="picture"
            maxCount={1}
            beforeUpload={beforeUpload}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Upload Picture</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save Safari Package
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterProvider;