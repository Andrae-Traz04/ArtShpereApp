import { useState } from "react";

export default function Profile({ user, isPublic }) {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user.username || "User");
  const [bio, setBio] = useState(user.bio || "This is your bio");
  const [medium, setMedium] = useState(user.medium || "Digital / Traditional");

  // For timeline: posts (own + shared)
  const [posts, setPosts] = useState(user.posts || []);
  const [sharedPosts, setSharedPosts] = useState(user.sharedPosts || []);

  const toggleEdit = () => setEditMode(!editMode);

  return (
    <main className="profile-page">
      <section className="profile-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5fUq6ZKoRn_BTE9RYCZIBg6OUljy6OOtCg&s"
          alt="Avatar"
          className="avatar"
        />
        {editMode ? (
          <div className="edit-fields">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <input
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
            <button onClick={toggleEdit}>Save</button>
          </div>
        ) : (
          <div className="profile-info">
            <h2>{username}</h2>
            <p>{bio}</p>
            <p>Art Medium: {medium}</p>
            {!isPublic && <button onClick={toggleEdit}>Edit Profile</button>}
          </div>
        )}
      </section>

      <section className="timeline">
        <h3>Timeline</h3>

        {posts.length === 0 && sharedPosts.length === 0 && (
          <p>No posts yet.</p>
        )}

        {posts.map((p) => (
          <div key={p.id} className="profile-post">
            <img src={p.image} alt="artwork" />
            <p>{p.caption}</p>
            <p className="post-type">Your Post</p>
          </div>
        ))}

        {sharedPosts.map((p) => (
          <div key={p.id} className="profile-post">
            <img src={p.image} alt="artwork" />
            <p>{p.caption}</p>
            <p className="post-type">Shared Post from {p.user}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
