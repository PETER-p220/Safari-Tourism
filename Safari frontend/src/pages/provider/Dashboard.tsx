import { useState } from "react";
import {
  Card,
  Tabs,
  Table,
  Tag,
  Form,
  Button,
  Row,
  Col,
  Typography,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import RegisterProvoder from "./RegisterProvoder";

const { Title } = Typography;

const Dashboard = () => {
  const [activeKey, setActiveKey] = useState("analytics");
  const [form] = Form.useForm();

  const mockData = {
    bookings: [
      {
        id: 1,
        customerName: "John Doe",
        date: "2024-02-20",
        status: "Confirmed",
      },
      {
        id: 2,
        customerName: "Jane Smith",
        date: "2024-02-22",
        status: "Pending",
      },
    ],
    analytics: {
      totalBookings: 25,
      completedTours: 18,
      upcomingTours: 7,
      revenue: 12500,
    },
  };

  const bookingsColumns = [
    {
      title: "Booking ID",
      dataIndex: "id",
      key: "id",
      render: (id: number) => `#${id}`,
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Confirmed" ? "green" : "gold"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <Button type="link">View Details</Button>,
    },
  ];

  const items = [
    {
      key: "analytics",
      label: "Analytics",
      children: (
        <Row gutter={[16, 16]}>
          {[
            {
              title: "Total Bookings",
              value: mockData.analytics.totalBookings,
              color: "blue",
            },
            {
              title: "Completed Tours",
              value: mockData.analytics.completedTours,
              color: "green",
            },
            {
              title: "Upcoming Tours",
              value: mockData.analytics.upcomingTours,
              color: "purple",
            },
            {
              title: "Total Revenue",
              value: `$${mockData.analytics.revenue}`,
              color: "gold",
            },
          ].map((item) => (
            <Col xs={24} sm={12} lg={6} key={item.title}>
              <Card style={{ borderLeft: `5px solid ${item.color}` }}>
                <Title level={5}>{item.title}</Title>
                <Title level={2}>{item.value}</Title>
              </Card>
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: "bookings",
      label: "Bookings",
      children: (
        <Card title="Recent Bookings" >
          <Table
            rowKey="id"
            columns={bookingsColumns}
            dataSource={mockData.bookings}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </Card>
      ),
    },
    {
      key: "profile",
      label: "Profile",
      children: <RegisterProvoder />,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ textAlign: "left", marginBottom: 24 }}>
        Service Provider Dashboard
      </Title>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={items}
        type="card"
        tabBarGutter={15}
      />
    </div>
  );
};

export default Dashboard;
