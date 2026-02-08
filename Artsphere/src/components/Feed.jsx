import { useState } from "react";
import Post from "./Post";

export default function Feed({ onViewProfile }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "deimos art",
      image: "https://pbs.twimg.com/media/G4gcA95bsAA8ojQ.jpg",
      caption: "2281 Overture",
      likes: 120,
      comments: [],
    },
    {
      id: 2,
      user: "samdoesart",
      image: "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1697499293277-U0GFDOZUTBCFI1TK7PQR/Art_of_Sam_Yang_38.jpeg",
      caption: "Water Rendering practice",
      likes: 89,
      comments: [],
    },
    {
      id: 3,
      user: "Hirohiko Araki",
      image: "https://static.jojowiki.com/images/thumb/5/56/latest/20200827050656/UomoBruno.png/600px-UomoBruno.png",
      caption: "Japanese men fashion brand \"Uomo\" is collaborating with JoJo's Bizarre Adventure for a new line of clothing. The first collection features designs inspired by the characters and aesthetics of the series, blending high fashion with the unique style of JoJo's, featuring Bruno Bucciarati if JJBA Part 5.",
      likes: 540,
      comments: [],
    },
    {
      id: 4,
      user: "Ashleigh Wue",
      image: "https://scontent.fceb6-4.fna.fbcdn.net/v/t51.82787-15/528423061_18012770621772866_2536109836081788184_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqcg6NoIgT85iqc8jDAZ2W6RDjdf9TobPpEON1_1Ohs2WvAIhwzykVgFOEjzqfk0wXz57WNQDowm2EreFoFK89&_nc_ohc=-VSDgZ8EAB0Q7kNvwF2drTu&_nc_oc=Adn9ZPrrSJ2t5BhjAHDROzzsVmuP7XtF9vv65XSDvaDU02Jm1EjXF3ae8qeCGIoL9hc&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=RF7IuwaW-ca5Qm8RDSADjA&oh=00_Afv1f6IlWkXI6pBGkqEJiYbzbDhP6phk0Y33XtBbtSXLsw&oe=698E1C2A",
      caption: "Where Sadness Swims",
      likes: 990,
      comments: [],
    },
  ]);

  const addPost = (post) => setPosts([post, ...posts]);

  return (
    <main className="feed">
      <Post isNew onPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onViewProfile={onViewProfile}
        />
      ))}
    </main>
  );
}
