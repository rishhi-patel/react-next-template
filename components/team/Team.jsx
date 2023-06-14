import teamData from "../../data/teamData";
import TeamCard from "../cards/TeamCard";

const Team = () => {
  return (
    <section className="our-team">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  The Amazing Team Behind Our Company
                </h5>
                <h2 className="title">
                  The right skills wielded by the right people to make anything
                  possible.
                </h2>
                <p>
                  Our diversity and youthfulness are the sources of our strength
                  as a team and shape our views.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-lg-9 col-md-12">
              <ul className="nav nav-tabs mb-60" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="board-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#board"
                    type="button"
                    role="tab"
                    aria-controls="board"
                    aria-selected="true"
                  >
                    Board
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="leaders-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#leaders"
                    type="button"
                    role="tab"
                    aria-controls="leaders"
                    aria-selected="false"
                  >
                    Leaders
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="designers-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#designers"
                    type="button"
                    role="tab"
                    aria-controls="designers"
                    aria-selected="false"
                  >
                    Designers
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="developers-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#developers"
                    type="button"
                    role="tab"
                    aria-controls="developers"
                    aria-selected="false"
                  >
                    Developers
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="hr-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hr"
                    type="button"
                    role="tab"
                    aria-controls="hr"
                    aria-selected="false"
                  >
                    HR
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="board"
                  role="tabpanel"
                  aria-labelledby="board-tab"
                >
                  <div className="row">
                    {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="leaders"
                  role="tabpanel"
                  aria-labelledby="leaders-tab"
                >
                  <div className="row">
                    {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="designers"
                  role="tabpanel"
                  aria-labelledby="designers-tab"
                >
                  <div className="row">
                    {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="developers"
                  role="tabpanel"
                  aria-labelledby="developers-tab"
                >
                  <div className="row">
                    {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="hr"
                  role="tabpanel"
                  aria-labelledby="hr-tab"
                >
                  <div className="row">
                    {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
