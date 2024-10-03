import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/components/services/PostServices";

const HomePage = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <Banner />
      <LatestPosts posts={posts} />
    </div>
  );
};

export default HomePage;
