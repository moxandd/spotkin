import { useState, useEffect, useCallback } from "react";
import Post from "../components/Post";

interface PostType {
  title: string;
  image: string;
  id: string;
}

const PostsPopular = () => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      title: "Куда сходить вечером в столице",
      image: "./assets/images/post-image5.jpg",
      id: "0",
    },
    {
      title: "Где лучше арендовать велосипед",
      image: "./assets/images/post-image2.jpg",
      id: "1",
    },
    {
      title: "Речной транспорт Москвы fdfdsdds fsdf sd fsdf dsf sdfsdf s d",
      image: "./assets/images/post-image3.jpg",
      id: "2",
    },
    // ... other posts
    {
      title: "Лепите снежинки на елки",
      image: "./assets/images/post-image1.jpg",
      id: "6",
    },
    {
      title: "Лепите снежинки на елки",
      image: "./assets/images/post-image1.jpg",
      id: "6",
    },
    {
      title: "Лепите снежинки на елки",
      image: "./assets/images/post-image1.jpg",
      id: "6",
    },
  ]);

  // State to keep track if there are more posts to load
  const [hasMore, setHasMore] = useState(true);
  // State to ensure we don't call fetch more than once before it resolves
  const [isFetching, setIsFetching] = useState(false);

  // Simulated fetching function
  const fetchMorePosts = useCallback(async () => {
    if (isFetching) return;

    setIsFetching(true);

    // Simulate fetching data
    setTimeout(() => {
      // Generate more posts with unique ids for simulation purposes
      const newPosts: PostType[] = posts.slice(-10).map((post, index) => ({
        ...post,
        id: (parseInt(post.id) + index + 1).toString(),
      }));

      setPosts((currentPosts) => [...currentPosts, ...newPosts]);

      setHasMore(newPosts.length > 0); // Set hasMore to false if no new posts are returned
      setIsFetching(false);
    }, 1000);
  }, [isFetching, posts]);

  // Infinite scroll event handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      isFetching ||
      !hasMore
    )
      return;

    fetchMorePosts();
  }, [isFetching, fetchMorePosts, hasMore]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="homepage-wrapper flex-grow">
      <div className="homepage-container default-container">
        <div className="homepage-inner">
          <section className="blog">
            <div className="blog-container">
              <h1 className="section-title | title cofo-sans-bold mb-[1rem]">
                ПОПУЛЯРНОЕ
              </h1>
              <div className="blog-inner-grid grid grid-cols-1 gap-[1.25em] md:grid-cols-2 md:[&>*:first-child]:col-span-2 lg:grid-cols-3 lg:[&>*:first-child]:row-span-2 lg:gap-[2em]">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </div>
            {isFetching && <p className="text-center mt-[2rem]">Загрузка...</p>}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostsPopular;
