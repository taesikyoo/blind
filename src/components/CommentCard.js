import React from 'react';
import { Avatar, Card, Col, Divider, Row } from "antd";

const CommentCard = () => {
  return (
    <Card bodyStyle={ { padding: "8px" } } bordered={ false }>
      <Row>
        <Col>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        </Col>
        <Col flex="auto">
          <Card bodyStyle={ {
            padding: "8px",
            background: "#bdbdbd38",
            borderRadius: "8px"
          } }
                bordered={ false }>
            <p style={ { marginBottom: "8px" } }><b>이성훈</b></p>
            <p>나 때는 말이야</p>
          </Card>
        </Col>
      </Row>
    </Card>
  )
};

export default CommentCard;
