import { useState } from "react";

export default function Post({ post, isNew, onPost, onViewProfile }) {
  const [likes, setLikes] = useState(post?.likes || 0);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(
    post?.comments || [
      // for comment with replies

    ]
  );
  const [showComments, setShowComments] = useState(false);

  //post le artss
  if (isNew) {
    return (
      <section className="new-post">
        <h3>Create Post</h3>
        <input placeholder="Image URL" id="img" />
        <input placeholder="Caption" id="cap" />
        <button
          onClick={() =>
            onPost({
              id: Date.now(),
              user: "You",
              image: document.getElementById("img").value,
              caption: document.getElementById("cap").value,
              likes: 0,
              comments: [],
            })
          }
        >
          Post
        </button>
      </section>
    );
  }

  // Adding commentsss
  const addComment = () => {
    if (commentInput.trim() === "") return;
    setComments([
      ...comments,
      { id: Date.now(), text: commentInput.trim(), likes: 0, replies: [] },
    ]);
    setCommentInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addComment();
  };

  // Edit le comment
  const editComment = (id) => {
    const newText = prompt(
      "Edit your comment:",
      comments.find((c) => c.id === id).text
    );
    if (newText !== null && newText.trim() !== "") {
      setComments(
        comments.map((c) => (c.id === id ? { ...c, text: newText } : c))
      );
    }
  };

  // Deletions
  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  // Like
  const likeComment = (id) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  // to add repliez
  const addReply = (id, replyText) => {
    setComments(
      comments.map((c) =>
        c.id === id
          ? { ...c, replies: [...c.replies, { id: Date.now(), text: replyText }] }
          : c
      )
    );
  };

  return (
    <article className="post">
      <h4 onClick={() => onViewProfile({ username: post.user })}>
        {post.user}
      </h4>
      <img src={post.image} alt="artwork" />
      <p>{post.caption}</p>

      <div className="actions">
        <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
        <button onClick={() => setShowComments(!showComments)}>
          💬 Comments ({comments.length})
        </button>
        <button>🔁 Share</button>
      </div>

      {showComments && (
        <div className="comment-section">
          {comments.map((c) => (
            <div key={c.id} className="comment-wrapper">
              <p className="comment">{c.text}</p>
              <div className="comment-buttons">
                <button onClick={() => likeComment(c.id)}>❤️ {c.likes}</button>
                <button onClick={() => editComment(c.id)}>Edit</button>
                <button onClick={() => deleteComment(c.id)}>Delete</button>
              </div>

              {/* Reply section */}
              <div className="replies">
                {c.replies.map((r) => (
                  <p key={r.id} className="reply">
                    ↪ {r.text}
                  </p>
                ))}
                <input
                  placeholder="Reply..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                      addReply(c.id, e.target.value.trim());
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          ))}

          <input
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </article>
  );
}
