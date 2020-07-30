import React from 'react';
import { Avatar, Card, Col, Divider, Input, Row } from "antd";

const CommentCreateCard = () => {
  return (
    <Card bodyStyle={ { padding: "8px" } } bordered={ false }>
      <Row>
        <Col>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        </Col>
        <Col flex="auto">
          <Card bodyStyle={ { padding: "8px", borderRadius: "8px" } }
                bordered={ false }>
            <Input/>
          </Card>
        </Col>
      </Row>
    </Card>
  )
};

export default CommentCreateCard;
