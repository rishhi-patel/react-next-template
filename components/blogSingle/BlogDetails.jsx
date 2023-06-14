import Image from "next/image";
import blog_single_img_1 from "/public/images/blog-single-img-1.png";
import blog_single_img_2 from "/public/images/blog-single-img-2.png";
import blog_single_img_3 from "/public/images/blog-single-img-3.png";

const BlogDetails = () => {
  return (
    <section className="blog-single">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="blog-contant mb-60 text-center">
                    <h2>
                      5 Tips to choose the right auto loan to buy your next
                      dream car
                    </h2>
                    <div className="info d-flex justify-content-center align-items-center">
                      <div className="item cus-bor d-flex align-items-center">
                        <span className="xlr">Loan</span>
                      </div>
                      <div className="item d-flex align-items-center">
                        <span className="xlr">December 19,2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-area-top">
                <Image src={blog_single_img_1} alt="images" />
              </div>
              <div className="contant-top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="blog-contant mt-60">
                      <div className="blog-text">
                        <h3>
                          Bankio is a next-gen banking experience looking to
                          disrupt the industry.
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla dolor at turpis porta elementum non
                          pulvinar. Elit eu, ante lobortis amet, tincidunt.
                          Bibendum blandit imperdiet tincidunt a ac tempor
                          adipiscing morbi erat. Fringilla ut nibh mattis fames.
                          Pellentesque gravida diam sodales eros, quis in amet.
                          Egestas enim tristique tincidun.
                        </p>
                      </div>
                      <div className="blog-text">
                        <h3>Learn how easy is to invest with Bankio</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla dolor at turpis porta elementum non
                          pulvinar. Elit eu, ante lobortis amet, tincidunt.
                          Bibendum blandit imperdiet tincidunt a ac tempor
                          adipiscing morbi erat. Fringilla ut nibh mattis fames.
                          Pellentesque gravida diam sodales eros, quis in amet.
                          Egestas enim tristique tincidun.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla dolor at turpis porta elementum non
                          pulvinar. Elit eu, ante lobortis amet, tincidunt.
                          Bibendum blandit imperdiet tincidunt a ac tempor
                          adipiscing morbi erat. Fringilla ut nibh mattis fames.
                          Pellentesque gravida diam sodales eros, quis in amet.
                          Egestas enim tristique tincidun.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-area-blog mb-60">
                <Image src={blog_single_img_2} alt="images" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="blog-contant">
                    <div className="single-item mb-60">
                      <h3>With Bankio, you can open an account today</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit purus vel, viverra facilisi neque quisque. Phasellus
                        aliquam ut id rhoncus. In viverra sed vitae.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. integer eu parturient faucibus morbi curabitur.
                          Sagittis in porttitor et proin euismod at pellentesque
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-contant">
                    <div className="single-item">
                      <h3>We are here to help your business grow</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit purus vel, viverra facilisi neque quisque. Phasellus
                        aliquam ut id rhoncus. In viverra sed vitae vivamus
                        amet, nunc. Magna tempus lacus, pellentesque lorem
                        lectus sem. Dictum aenean natoque purus, feugiat. Risus
                        pellentesque ornare sit hendrerit odio vel.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. integer eu parturient faucibus morbi curabitur.
                          Sagittis in porttitor et proin euismod at pellentesque
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-contant mt-60 mb-60">
                    <div className="single-item">
                      <h5>
                        Discover how easy it is to apply for business of
                        personal loans on Bankio. With our advanced loans
                        system, it’s easier than ever.
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit purus vel, viverra facilisi neque quisque. Phasellus
                        aliquam ut id rhoncus. In viverra sed vitae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-area-blog mb-60">
                <Image src={blog_single_img_3} alt="images" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="blog-contant">
                    <div className="single-item mb-60">
                      <h3>
                        Are you looking for a credit card? Discover new Bankio
                        credit options
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit purus vel, viverra facilisi neque quisque. Phasellus
                        aliquam ut id rhoncus. In viverra sed vitae.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. integer eu parturient faucibus morbi curabitur.
                          Sagittis in porttitor et proin euismod at pellentesque
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-contant section-bor">
                    <div className="single-item pb-120">
                      <h6>
                        At Bankio, we are transparent, supportive, and we always
                        put our customers first
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit purus vel, viverra facilisi neque quisque. Phasellus
                        aliquam ut id rhoncus. In viverra sed vitae.
                      </p>
                    </div>
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

export default BlogDetails;
