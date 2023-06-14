import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const BlogContent = () => {
  return (
    <section className="latest-articles blog-contant">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            {/* Left side  */}
            <LeftSide />
            {/* Right side  */}
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
