import React from 'react';
import { Avatar, Card, Divider } from "antd";
import CommentCard from "./CommentCard";
import CommentCreateCard from "./CommentCreateCard";

const PostCard = () => {
    return (
        <Card style={{margin: "8px 0px"}} bordered={false}>
            <Card.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="조광일"
                description="30분전 게시되었습니다."
            />
            <Divider />
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <Divider orientation="left">댓글</Divider>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCreateCard/>
        </Card>
)
};

export default PostCard;
