import React, { useState } from 'react';
import Comment from 'components/comment/Comment';
import CommentForm from 'components/comment/CommentForm';
import { apis } from 'api/api';
import { useEffect } from 'react';
import styled from 'styled-components';

const CommentList = ({ commentListData }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    commentListData && setCommentList(commentListData);
  }, [commentListData]);

  const addCommentHandler = async (content) => {
    try {
      const res = await apis.addComment(content);
      setCommentList([...commentList, res.data.data]);
    } catch (err) {
      alert(err);
    }
  };

  const editCommentHandler = async (data) => {
    try {
      const res = await apis.editComment(data);
      setCommentList(
        commentList.map((comment) =>
          comment.commentId === res.data.data.commentId ? (comment = res.data.data) : comment
        )
      );
    } catch (err) {
      alert(err);
    }
  };

  const deleteCommentHandler = async (id) => {
    try {
      await apis.deleteComment(id);
      setCommentList(commentList.filter((comment) => comment.commentId !== id));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ContainerStyle>
      {commentList?.map((comment) => (
        <Comment
          {...comment}
          key={comment.commentId}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
        />
      ))}
      <CommentForm addCommentHandler={addCommentHandler} />
    </ContainerStyle>
  );
};

export default CommentList;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  outline-color: #eaecee;

  @media (max-width: 750px) {
    min-width: 400px;
  }
`;
