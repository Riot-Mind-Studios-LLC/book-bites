// Client islands
// Hydrated means a component has had its JavaScript loaded and attached in the browser, so it becomes interactive.
// Each hydrated component is called an island: an interactive spot in a sea of static HTML. That’s why Astro pages load fast.
import { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(3);

  // updates the likes state
  const handleClick = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="likes">
      <p>{likes} people like this client island.</p>
      <button onClick={handleClick}>Like</button>
    </div>
  );
};

export default Likes;
