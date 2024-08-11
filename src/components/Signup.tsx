import { useState } from "react"
import { signup } from "../config/firebasemethodes";
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Card, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';


const { Title } = Typography;



export default function Signup() {
    const [model, setModel] = useState<any>({});
    const signupUser = () => {
        signup(model.email, model.password)
        navigate(`/Dashboard`)
    }


    const navigate = useNavigate()
    return <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card style={{ width: 300, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Title level={1} style={{ textAlign: 'center', paddingBottom: "10px" }}>Signup</Title>
                <Form
                    name="signup_form"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 300 }}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            value={model.email}
                            onChange={(e) => {
                                setModel({ ...model, email: e.target.value })
                            }}
                            prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            value={model.password}
                            onChange={(e) => {
                                setModel({ ...model, password: e.target.value })
                            }}
                            prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={signupUser} type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Signup
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    </>
}