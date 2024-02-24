import React from 'react';

// Recursive component to render comments
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-text">
        {comment.id}. {comment.text}
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage of the Comment component
const Comments = () => {
  const commentsData = [
    {
      id: 1,
      text: 'First comment',
      replies: [
        {
          id: 2,
          text: 'First reply to first comment',
        },
        {
          id: 3,
          text: 'Second reply to first comment',
          replies: [
            {
              id: 4,
              text: 'Reply to Second reply',
            },
          ],
        },
        {
          id: 5,
          text: 'Third reply to first comment',
          replies: [
            {
              id: 6,
              text: 'Reply to Third reply',
            },
            {
              id: 7,
              text: 'Reply to Third reply',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      text: 'Second comment',
      replies: [
        {
          id: 11,
          text: 'Reply to second comment',
        },
      ],
    },
  ];

  return (
    <div className="comments">
      {commentsData.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
