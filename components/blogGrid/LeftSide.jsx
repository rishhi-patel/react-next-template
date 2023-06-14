import blogData from "../../data/blogData";
import GridBlogCard from "../cards/GridBlogCard";
import Pagination from "../pagination/Pagination";

const LeftSide = () => {
  return (
    <div className="col-md-8">
      <ul className="nav nav-tabs mb-60" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="cmn-btn active"
            id="latest-tab"
            data-bs-toggle="tab"
            data-bs-target="#latest"
            type="button"
            role="tab"
            aria-controls="latest"
            aria-selected="true"
          >
            latest
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="cmn-btn"
            id="loan-tab"
            data-bs-toggle="tab"
            data-bs-target="#loan"
            type="button"
            role="tab"
            aria-controls="loan"
            aria-selected="false"
          >
            loan
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="cmn-btn"
            id="credit-tab"
            data-bs-toggle="tab"
            data-bs-target="#credit"
            type="button"
            role="tab"
            aria-controls="credit"
            aria-selected="false"
          >
            credit
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="cmn-btn"
            id="bussiness-tab"
            data-bs-toggle="tab"
            data-bs-target="#bussiness"
            type="button"
            role="tab"
            aria-controls="bussiness"
            aria-selected="false"
          >
            bussiness
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="latest"
          role="tabpanel"
          aria-labelledby="latest-tab"
        >
          <div className="blog-item-area">
            {blogData.map((singleBlog, i) => (
              <GridBlogCard key={i} singleBlog={singleBlog} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="loan"
          role="tabpanel"
          aria-labelledby="loan-tab"
        >
          <div className="blog-item-area">
            {blogData.map((singleBlog, i) => (
              <GridBlogCard key={i} singleBlog={singleBlog} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="credit"
          role="tabpanel"
          aria-labelledby="credit-tab"
        >
          <div className="blog-item-area">
            {blogData.map((singleBlog, i) => (
              <GridBlogCard key={i} singleBlog={singleBlog} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="bussiness"
          role="tabpanel"
          aria-labelledby="bussiness-tab"
        >
          <div className="blog-item-area">
            {blogData.map((singleBlog, i) => (
              <GridBlogCard key={i} singleBlog={singleBlog} />
            ))}
          </div>
        </div>

        {/* Pagination Here */}
        <Pagination />
      </div>
    </div>
  );
};

export default LeftSide;
