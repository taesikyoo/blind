import React from 'react';
import { Button, Card, Input } from "antd";

const LoginForm = () => {
    const cardStyle={
        marginTop: "50%"
    }
    return (
        <Card style={cardStyle}>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
            <Button block>로그인 하기</Button>
        </Card>
    )
};

export default LoginForm;
