"use client";

import React from "react";
import "./_main03.scss";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Main03 = () => {
  const identites = [
    {
      id: 1,
      name: "James Manwel",
      designation: "Frontend Developer",
      image: "/pics/pic1.png",
    },
    {
      id: 2,
      name: "Hitesh Kumar",
      designation: "UI/UX Designer",
      image: "/pics/pic2.png",
    },
    {
      id: 3,
      name: "Alex Stone",
      designation: "Project Manager",
      image: "/pics/pic3.png",
    },
  ];
  return (
    <main className="main03">
      <section className="for-center-main03">
        <div className="left-side-div">
          <div className="small-yellow-capsule-two">
            <h4>Feature</h4>
          </div>

          <h5>Streamline your business operations.</h5>

          <div className="handling-three-small-divs">
            <div className="three-circles-headings-one">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>Add a feature section about the product.</p>
            </div>

            <div className="three-circles-headings-two">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>Add a feature section about the product.</p>
            </div>

            <div className="three-circles-headings-three">
              <div className="cicle-icon">
                <i className="ri-check-line"></i>
              </div>
              <p>Single upfront payment.</p>
            </div>
          </div>

          <div className="handling-component-button">
            <GetStartedButton text="Get started" />
          </div>
        </div>

        <div className="right-side-div">
          <div className="upper-div">
            <div className="left-side">
              <h3>Task management</h3>

              <div className="heading-paragraphs-tags">
                <h4>Curious george</h4>
                <p>UI UX designer</p>
              </div>

              <div className="straight-line"></div>

              <div className="heading-icon-tag">
                <h5>1 days Ago</h5>

                <i className="ri-star-s-line"></i>
              </div>
            </div>

            <div className="right-side">
              <h3>Progress Tracking</h3>

              <div className="handling-image">
                <div className="relative w-fit flex items-center justify-center">
                  <svg
                    className="size-[176px] max-[426px]:size-32"
                    viewBox="0 0 176 176"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4106 38.2529C5.02285 53.4103 -0.359462 71.4393 0.0186306 89.8107C0.396723 108.182 6.51625 125.974 17.5188 140.692C28.5213 155.409 43.8549 166.313 61.3685 171.874C78.8822 177.434 97.6973 177.373 115.175 171.699C132.652 166.025 147.914 155.022 158.821 140.234C169.728 125.445 175.732 107.614 175.991 89.2404C176.25 70.8669 170.751 52.8732 160.265 37.7834C149.78 22.6937 134.833 11.2648 117.523 5.10011L116.189 8.84623C132.717 14.7324 146.988 25.6448 157 40.0526C167.012 54.4605 172.262 71.6411 172.015 89.1843C171.768 106.728 166.035 123.753 155.621 137.873C145.207 151.993 130.634 162.499 113.947 167.917C97.2591 173.335 79.2942 173.393 62.572 168.083C45.8497 162.774 31.2091 152.363 20.7037 138.31C10.1984 124.258 4.35538 107.27 3.99437 89.7289C3.63337 72.1876 8.77246 54.9734 18.6908 40.5009L15.4106 38.2529Z"
                      fill="url(#paint0_linear_3092_23898)"
                    />
                    <path
                      d="M20 88C20 102.069 24.3636 115.791 32.4893 127.275C40.615 138.76 52.1028 147.442 65.3695 152.124C78.6361 156.806 93.0283 157.258 106.563 153.417C120.097 149.577 132.107 141.633 140.937 130.681C149.767 119.729 154.983 106.307 155.866 92.2666C156.749 78.2257 153.255 64.2567 145.866 52.2849C138.476 40.313 127.556 30.9277 114.609 25.4225C101.663 19.9173 87.3271 18.5632 73.5785 21.5468L74.4337 25.4873C87.367 22.6805 100.852 23.9543 113.031 29.1331C125.21 34.3119 135.483 43.1407 142.434 54.4027C149.385 65.6646 152.672 78.8053 151.842 92.0136C151.011 105.222 146.105 117.847 137.798 128.15C129.491 138.453 118.194 145.926 105.462 149.538C92.7302 153.151 79.1913 152.726 66.7114 148.321C54.2314 143.917 43.4248 135.75 35.7809 124.947C28.137 114.143 24.0322 101.234 24.0322 88H20Z"
                      fill="url(#paint1_linear_3092_23898)"
                    />
                    <path
                      d="M115.552 48.6952C110.391 45.077 104.567 42.5109 98.4138 41.1433C92.2605 39.7757 85.8981 39.6335 79.6899 40.7248C73.4816 41.8161 67.5491 44.1196 62.231 47.5036C56.9129 50.8876 52.3135 55.286 48.6952 60.4476C45.077 65.6091 42.5109 71.4328 41.1433 77.5861C39.7757 83.7395 39.6335 90.1019 40.7248 96.3101C41.8161 102.518 44.1196 108.451 47.5036 113.769C50.8876 119.087 55.286 123.687 60.4476 127.305L62.756 124.012C58.0268 120.697 53.997 116.483 50.8965 111.61C47.7959 106.738 45.6855 101.302 44.6856 95.6139C43.6858 89.9258 43.816 84.0964 45.069 78.4586C46.322 72.8209 48.6732 67.4851 51.9883 62.756C55.3034 58.0268 59.5175 53.997 64.39 50.8965C69.2625 47.7959 74.698 45.6855 80.3861 44.6856C86.0742 43.6858 91.9036 43.816 97.5414 45.069C103.179 46.322 108.515 48.6732 113.244 51.9883L115.552 48.6952Z"
                      fill="url(#paint2_linear_3092_23898)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3092_23898"
                        x1="166.222"
                        y1="87.9976"
                        x2="2.31009e-06"
                        y2="87.9976"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#864FFE" />
                        <stop
                          offset="1"
                          stopColor="#864FFE"
                          stopOpacity="0.28"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_3092_23898"
                        x1="148.444"
                        y1="87.9982"
                        x2="20"
                        y2="87.9982"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#864FFE" />
                        <stop
                          offset="1"
                          stopColor="#864FFE"
                          stopOpacity="0.28"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_3092_23898"
                        x1="130.667"
                        y1="87.9987"
                        x2="40"
                        y2="87.9987"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#864FFE" />
                        <stop
                          offset="1"
                          stopColor="#864FFE"
                          stopOpacity="0.28"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <figure className="inline-block size-14 max-[426px]:size-10 rounded-full ring-4 ring-white bg-[linear-gradient(135deg,#ffffff_0%,#a585ff_100%)] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img
                      src="/pics/hero-shape-1.png"
                      alt="avatar"
                      className="max-w-full"
                    />
                    <img
                      src="images/avatar/author-avatar-bg.png"
                      alt="avatar background"
                      className="absolute top-0 left-0 -z-10"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="lower-div">
            <div className="people-identites">
              <AnimatedTooltip items={identites} />
            </div>

            <div className="h4-p-tags">
              <h4>Mischievous</h4>
              <p>UI UX designer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main03;
