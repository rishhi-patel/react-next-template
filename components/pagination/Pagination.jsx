import Link from "next/link";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center align-items-center">
        <li className="page-item">
          <Link className="page-link previous" href="#" aria-label="Previous">
            <i className="icon-c-left-double-arrow"></i>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            01
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link active" href="#">
            02
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            03
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            04
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link next" href="/#" aria-label="Next">
            <i className="icon-d-right-double-arrow"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
