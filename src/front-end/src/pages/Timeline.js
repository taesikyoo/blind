import React from 'react';
import { Button, Col, Layout, Menu, Row } from "antd";
import { EditOutlined } from '@ant-design/icons';
import PostCard from "../components/PostCard";

const { Header, Content, Footer } = Layout;

const Timeline = () => {
    return(
        <Layout className="layout">
            <Header>
                <Button type="primary" icon={<EditOutlined />} shape="round">
                    글쓰기
                </Button>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Row>
                    <Col span={12} offset={6}>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </Col>
                </Row>
            </Content>
        </Layout>
)
};

export default Timeline;