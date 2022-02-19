import { useNavigate } from "react-router-dom";
const Posts = ({
  postInfo: { image, name, isLike, like },
  index,
  liked,
  deletAnyPost,
}) => {
  const likeHandler = (e) => {
    e.stopPropagation();
    isLike = !isLike;
    if (isLike) {
      like++;
    } else {
      like--;
    }

    liked(index, isLike, like);
  };

  const deletePost = (e, index) => {
    e.stopPropagation();
    deletAnyPost(index);
  };

  const navigate = useNavigate();
  const gotoPost = () => {
    navigate(`/posts/${index}`);
  };
  return (
    <>
      <div
        className=" col-md-4  col-lg-4 my-md-3 my-lg-2"
        style={{ cursor: "pointer" }}
      >
        <div className="card h-100 p-2" onClick={gotoPost}>
          <img src={`${image}`} alt="post" />
          <div className="like-com d-flex justify-content-between">
            <h5>{name}</h5>
            <div className="icons">
              <i
                className="fa fa-trash h4 text-danger"
                onClick={(e) => deletePost(e, index)}
              ></i>

              {isLike ? (
                <>
                  <i
                    className="fa fa-heart m-2"
                    style={{ color: "red" }}
                    onClick={likeHandler}
                  ></i>
                  <span>{like}</span>
                </>
              ) : (
                <>
                  <i className="fa fa-heart-o m-2" onClick={likeHandler}></i>
                  <span>{like}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
