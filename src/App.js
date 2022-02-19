import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import Posts from "./components/Posts";
import "./App.css";
const App = ({ postsInfo, liked, deletAnyPost }) => {
  return (
    <div>
      <div className="container my-5">
        <div className="container-fulid">
          <div className="row">
            {postsInfo.map((postInfo, i) => (
              <Posts
                postInfo={postInfo}
                index={i}
                key={i}
                liked={liked}
                deletAnyPost={deletAnyPost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
