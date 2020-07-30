import React from 'react';
import { Col, Row } from "antd";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Row>
      <Col span={ 12 } offset={ 6 }>
        <LoginForm/>
      </Col>
    </Row>
  )
};

export default LoginPage;
