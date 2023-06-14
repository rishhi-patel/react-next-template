import Author from "../components/blogSingle/Author";
import Banner from "../components/blogSingle/Banner";
import BlogDetails from "../components/blogSingle/BlogDetails";
import RelatedPost from "../components/blogSingle/RelatedPost";

export default function BlogSingle() {
  return (
    <>
      <Banner />
      <BlogDetails />
      <Author />
      <RelatedPost />
    </>
  );
}
