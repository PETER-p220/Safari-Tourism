import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, InputNumber, Upload, message, List, Image, Typography, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;

type SafariPackage = {
  id: number;
  name: string;
  description: string;
  group_size_min: number;
  group_size_max: number;
  picture: string;
};

const SafariPackagesPage: React.FC = () => {
  const [form] = Form.useForm();
  const [packages, setPackages] = useState<SafariPackage[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch packages from Django backend
  const fetchPackages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/safari-packages");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
      message.error("Failed to load safari packages.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch packages on component mount
  useEffect(() => {
    fetchPackages();
  }, []);

  // Handle form submission
  const handleSubmit = async (values: SafariPackage) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("group_size_min", values.group_size_min.toString());
      formData.append("group_size_max", values.group_size_max.toString());
      if (values.picture) {
        formData.append("picture", values.picture.originFileObj || values.picture);
      }

      const response = await axios.post("http://127.0.0.1:8000/api/safari-packages", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      message.success("Safari package saved successfully!");
      // Refresh package list after saving
      await fetchPackages();
      form.resetFields();
    } catch (error: any) {
      console.error("Error saving package:", error);
      message.error("An error occurred while saving: " + (error.response?.data?.picture || error.message));
    }
  };

  // Validate file before upload
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
    return true;
  };

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Title level={2}>Safari Packages</Title>
      <Row gutter={[24, 24]}>
        {/* Form Card */}
        <Col xs={24} md={12}>
          <Card title="Register Safari Package">
            <Form
              layout="vertical"
              form={form}
              onFinish={handleSubmit}
              onFinishFailed={(errorInfo) => console.log("Validation failed:", errorInfo)}
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
                  if (Array.isArray(e)) return e[0];
                  return e && e.file;
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
        </Col>

        {/* Packages List Card */}
        <Col xs={24} md={12}>
          <Card title="Available Safari Packages">
            <List
              loading={loading}
              dataSource={packages}
              renderItem={(pkg: SafariPackage) => (
                <List.Item key={pkg.id}>
                  <List.Item.Meta
                    avatar={
                      pkg.picture ? (
                        <Image
                          src={`http://127.0.0.1${pkg.picture}`}
                          alt={pkg.name}
                          style={{ width: 80, height: 80, objectFit: "cover" }}
                        />
                      ) : null
                    }
                    title={pkg.name}
                    description={
                      <>
                        <p>{pkg.description}</p>
                        <p>
                          Group Size: {pkg.group_size_min} - {pkg.group_size_max}
                        </p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SafariPackagesPage;