import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { login } from '../config/firebasemethodes';
import { useNavigate } from "react-router-dom"


const { Title } = Typography;

export default function Login() {
    const [model, setmodel] = useState<any>({})
    const loginUser = () => {
        login(model.email, model.password)
        navigate(`/Dashboard`)
    }


    const navigate = useNavigate()

    const navigateScreen = (route: string) => {
    }

    return <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card style={{ width: 300, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Title level={1} style={{ textAlign: 'center' }}>Login</Title>
                <Form
                    name="login_form"
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
                                setmodel({ ...model, email: e.target.value })
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
                                setmodel({ ...model, password: e.target.value })
                            }}
                            prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a style={{ float: 'right' }} href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={loginUser} type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        Or <a href="./Signup">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    </>
}