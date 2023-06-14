import blogData from "../../data/blogData";
import GridBlogCard from "../cards/GridBlogCard";

const RelatedPost = () => {
  return (
    <section className="latest-articles blog-single">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Our latest articles.</h5>
                <h3 className="title">Related posts</h3>
                <p>Get more Latest News and Resources here ...</p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {blogData.slice(0, 3).map((singleBlog) => (
              <div key={singleBlog.id} className="col-lg-4 col-md-6">
                {/* Grid Blog Card */}
                <GridBlogCard singleBlog={singleBlog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;
