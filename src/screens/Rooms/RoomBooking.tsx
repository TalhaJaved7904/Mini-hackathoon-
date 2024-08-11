import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { sendData } from "../../config/firebasemethodes"


export default function RoomBooking() {
    const [loading, setLoading] = useState(false)
    const rooms = () => {

        const onComplete = async (values: any) => {
            setLoading(true)
            try {
                await sendData('rooms', values);
                message.success('Room Booking Added Successfully!')
            } catch {
                message.error('Failed to add Room Booking. Please try again')
            }
            finally {
                setLoading(false)
            }
        }
    }


    return <>
        <div>

            <Form
                onFinish={rooms}
                layout='vertical'
                initialValues={{ role: 'booking' }}
            >
                <Form.Item
                    name="Name"
                    label="Name"
                    rules={[{ required: true, message:'Please Input your Name!'}]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    </>
}