import { useParams, Link } from "react-router-dom";
import { useRef } from "react";

const Post = ({ postsInfo, liked, addComment }) => {
  const userName = useRef();
  const comment = useRef();
  const param = useParams();
  // const navigate = useNavigate();
  const postInfo = postsInfo.find((info) => info.id === Number(param.id));
  let { image, isLike, like, comments, name } = postInfo;
  const likeHandler = (e) => {
    e.stopPropagation();
    isLike = !isLike;
    if (isLike) {
      like++;
    } else {
      like--;
    }

    liked(param.id, isLike, like);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(comments);
    const newComment = {
      name: userName.current.value,
      comment: comment.current.value,
    };
    comments.push(newComment);
    addComment(param.id, comments);
    e.target.reset();
    userName.current.focus();
  };

  return (
    <>
      <div className="container my-5">
        <div className="conatiner-fulid">
          <div className="row wrapper">
            <div className="col-md-8 ">
              <div className="card h-100 ">
                <img src={`../${image}`} alt={name} className="h-100" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card comments-wrapper p-3">
                <div className="like-com d-flex justify-content-between h4 pb-2 mb-3 border-bottom">
                  <h4 className="text-secondary">
                    <Link to="/">
                      <i
                        className="fa fa-arrow-left text-info me-2 h6"
                        style={{ cursor: "pointer", fontSize: "1.1rem" }}
                      ></i>
                    </Link>

                    {name}
                  </h4>
                  <div className="icons">
                    <i className="fa fa-comment-o h5"></i>

                    {isLike ? (
                      <>
                        <i
                          className="fa fa-heart mx-3"
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={likeHandler}
                        ></i>
                        <span>{like}</span>
                      </>
                    ) : (
                      <>
                        <i
                          className="fa fa-heart-o mx-3"
                          onClick={likeHandler}
                          style={{ cursor: "pointer" }}
                        ></i>
                        <span>{like}</span>
                      </>
                    )}
                  </div>
                </div>

                {comments.map((comment, i) => (
                  <div className="row" key={i}>
                    <div className="col-lg-3 ">
                      <h6
                        className="text-secondary d-inline px-1"
                        style={{ whiteSpace: "nowrap" }}
                      >{`${comment.name} :`}</h6>
                    </div>
                    <div className="col-lg-9">
                      <p className="text-secondary d-inline">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="my-3 border-top ">
                  <div className="text-primary p-1 my-2">
                    <i className="fa fa-plus"></i> Comment:
                  </div>
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-1 border-0 border-bottom "
                        placeholder="name"
                        ref={userName}
                        required
                      />
                      <input
                        type="text"
                        className=" form-control mb-3 border-0 border-bottom"
                        placeholder="comment"
                        required
                        ref={comment}
                      />
                    </div>
                    <input className="d-none" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
