import { Link } from "react-router-dom";

type PostProps = {
  post: {
    id: string;
    title: string;
    image: string;
  };
};

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-wrapper | dropdown-link">
      <Link to={`/posts/${post.id}`}>
        <div className="post-container | h-full">
          <div className="post-inner | flex flex-col justify-between h-full">
            <div
              style={{ backgroundImage: `url(src/${post.image})` }}
              className="post-image dropdown-link | min-h-[10rem] flex-grow bg-center bg-cover bg-no-repeat rounded-xl sm:min-h-[14rem] lg:min-h-[7rem] lg:rounded-lg"
            ></div>
            <div className="post-body | flex  flex-col justify-between gap-[0.25em] mt-[1em] lg:mt-0 lg:gap-0">
              <p className="category-name | text-[1rem] font-semibold mt-[0.5em] cofo-sans-regular">
                ТЕХНОЛОГИИ
              </p>
              <p className="post-title | title lg:text-[1rem]">{post.title}</p>
              <div className="credentials | flex justify-between text-[0.75rem] text-subtitle mt-[0.2em]">
                <p className="publication-date | ">13 Марта 15:24</p>
                <p className="author |">Иванов Иван</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
