import React, { useEffect, useState } from 'react';
import { Table, Button, message, Spin, Space, Modal, } from 'antd';
import { getData, delRecord } from '../../config/firebasemethodes'; // Import your Firebase function

const { confirm } = Modal;


interface Booking {
    userID: string
    id: string;
    name: string;
    email: string;
    time: string;
    date: string;
    numberOfGuests: number;
    contactInfo: string;
}

const BookingList: React.FC = () => {
    const [users, setUsers] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const data = await getData('users');
            if (data) {
                setUsers(Object.values(data));
            }
        } catch (error) {
            message.error('Failed to fetch booking data.');
        } finally {
            setLoading(false);
        }
    };



    const handleDelete = (id: string) => {
        confirm({
            title: 'Are you sure you want to delete this Booking?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk: async () => {
                try {
                    await delRecord('users', id);
                    message.success('Booking deleted successfully!');
                    fetchBookings()
                } catch (error) {
                    message.error('Failed to delete Booking.');
                }
            },
        });
    };





    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Number of Guests',
            dataIndex: 'numberOfGuests',
            key: 'numberOfGuests',
        },
        {
            title: 'Contact Info',
            dataIndex: 'contactInfo',
            key: 'contactInfo',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_text: string, users: Booking) => (
                <Space size="middle">
                    <Button type="primary">
                        Edit
                    </Button>
                    <Button onClick={() => handleDelete(users.id)} type="default" danger>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Spin spinning={loading}>
            <Table
                columns={columns}
                dataSource={users}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                bordered
            />
        </Spin>
    );
};

export default BookingList;
