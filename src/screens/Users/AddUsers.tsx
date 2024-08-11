import React, { useState } from 'react';
import { Form, Input, Button, Select, message, Typography } from 'antd';
import { sendData } from "../../config/firebasemethodes"
import { time } from 'console';

const { Option } = Select;
const {Title} = Typography

const AddUsers: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            await sendData('users', values);
            message.success('Booking Completed successfully!');
        } catch (error) {
            message.error('Failed to complete Booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div>
            <Title level={2}>Book Your Table Now</Title>

        <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ role: 'booking' }} // Default role
        >

            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input the Name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input the Email!', type: 'email' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Time"
                name="time"

                rules={[{ required: true, message: 'Please input the time!' }]}
            >
                <Input type='time' />
            </Form.Item>
            <Form.Item
                label="date"
                name="date"

                rules={[{ required: true, message: 'Please input the time!' }]}
            >
                <Input type='date' />
            </Form.Item>

            <Form.Item
                label="numberOfGuests"
                name="numberOfGuests"
                rules={[{ required: true, message: 'Please select the Number Of Guests!' }]}
            >
                <Select>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Contact Info"
                name="contactInfo"
                rules={[{ required: true, message: 'Please input the Contact Info!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default AddUsers;
