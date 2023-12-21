/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PoppularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";

const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Detail"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged.
                                </p>
                                <blockquote>
                                  <p>
                                    Pluoresnts customize prancing apcentered
                                    customer service anding ands asing straelg
                                    Interacvely cordinate performe
                                  </p>
                                  <cite>
                                    <a href="#">... Melissa Huntter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now
                                </p>
                                <img src="/src/assets/images/blog/01.jpg" />
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now
                                </p>
                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" />
                                  <a
                                    href="https://youtu.be/QCkn25d9xXM?si=X0N7X3p1yIEGfuvA"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous
                            Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes via Technica Sound
                            Modals Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            Next Blog <i className="icofont-double-right"></i>
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes via Technica Sound
                            Modals Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PoppularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
