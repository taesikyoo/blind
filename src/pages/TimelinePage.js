import React, { useState } from 'react';
import {
  Badge,
  Button,
  Col,
  Input,
  Layout,
  Modal,
  Row,
  Tooltip,
  Upload
} from "antd";
import { PictureTwoTone, EditOutlined, BellOutlined } from '@ant-design/icons';

import PostCard from "../components/PostCard";


const { Header, Content } = Layout;

const Timeline = () => {
  const [visible, setVisible] = useState(false);

  const onWriteButtonClick = () => {
    setVisible(true)
  }

  const onCancel = () => {
    setVisible(false)
  }


  return (
    <Layout className="layout">
      <Header>
        <Button type="primary" icon={ <EditOutlined/> } shape="round"
                onClick={ onWriteButtonClick }>
          글쓰기
        </Button>
        <Modal
          title="글쓰기"
          visible={ visible }
          centered
          onCancel={ onCancel }
          cancelText={ '취소' }
          okText={ '확인' }
          onOk={ onCancel }
        >
          <Upload accept={ "video/*" }>
            <Tooltip title="사진/동영상">
              <Button shape="circle" size={ "large" }
                      icon={ <PictureTwoTone/> }/>
            </Tooltip>
          </Upload>
          <Input.TextArea rows={ 16 }/>
        </Modal>
        <Badge count={ 5 }>
          <Button type="text" color={ "white" } shape="circle" size={ "large" }
                  icon={ <BellOutlined/> }/>
        </Badge>
      </Header>
      <Content style={ { padding: '0 50px' } }>
        <Row>
          <Col span={ 12 } offset={ 6 }>
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
