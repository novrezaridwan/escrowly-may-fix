import React from "react";
import "./EscrowlyApi.scss";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import imgContent from "../../assets/img/escrowly-api.svg";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

const EscrowlyApi = () => {
  const dataWhatApi = [
    {
      icon: "ph:seal-check-fill",
      title: "Improved Conversion",
      desc: "Providing a negotiation feature increases user engagement, leading to higher conversion rates as buyers and sellers reach mutually agreeable terms.",
    },
    {
      icon: "solar:card-bold",
      title: "Easy Integration",
      desc: "Our developer-friendly API allows for quick and easy integration, enabling you to add escrowly negotiation capabilities to your platform.",
    },
    {
      icon: "ant-design:dollar-circle-filled",
      title: "Manage Multiple Offers",
      desc: "Sellers can efficiently handle multiple offers on a single listing, choosing to accept, reject, or counter each proposal within a streamlined interface.",
    },
    {
      icon: "material-symbols:trophy-rounded",
      title: "Award Winning-Workflow",
      desc: "The intuitive design ensures a smooth negotiation process, guiding users from offer submission to final agreement effortlessly.",
    },
  ];

  const dataBuilt = [
    {
      icon: "ph:seal-check-fill",
      title: "Comprehensive Documentation",
      desc: "Access detailed guides and references.",
    },
    {
      icon: "solar:card-bold",
      title: "Source Code Management",
      desc: "Stay updated with the latest tools & updates",
    },
    {
      icon: "ant-design:dollar-circle-filled",
      title: "Real-Time Payment Updates",
      desc: "Monitor transactions as they happen.",
    },
    {
      icon: "material-symbols:trophy-rounded",
      title: "Instant Sandbox Testing",
      desc: "Live alerts for every transaction",
    },
  ];

  const dataBenefit = [
    {
      icon: "mingcute:safe-lock-fill",
      title: "Increase Trust",
      desc: "Using Escrowly as an integrated service enables your users to access dependable escrow capabilities that boost their confidence in transactions, increase user satisfaction, and decrease fraud risks.",
    },
    {
      icon: "tabler:world",
      title: "Increase Liquidity",
      desc: "Our escrow solutions streamline transactions, which allows users to execute easier buys and sales, thereby increasing the liquidity of your website to perform well.",
    },
    {
      icon: "iconamoon:box-fill",
      title: "Increase Fulfillment",
      desc: "Our automated crypto escrow system executes transactions swiftly, which guarantees speedy payments and delivery of requirements by both parties involve.",
    },
    {
      icon: "material-symbols:info-rounded",
      title: "Increase Support",
      desc: "Your customers enjoy premium transaction support, Escrowly experienced team reviews shipping documents, title deeds, liens, domain transfer confirmation and much more.",
    },
    {
      icon: "material-symbols:check-circle-rounded",
      title: "Increase Compliance",
      desc: "As an officially registered Money Services Business (MSB) with FinCEN, your platform remains legally compliant for crypto transaction management.",
    },
    {
      icon: "tabler:presentation-filled",
      title: "Increase Insights",
      desc: "Insights from the detailed analytics at Escrowly help you understand transaction pathways while providing behavioral data to support your business choices.",
    },
    {
      icon: "material-symbols:chart-data-rounded",
      title: "Increase Conversion",
      desc: "Your customers will benefit from our secure crypto escrow services, which will improve their experience, boost conversion rates, and maintain a stable customer base.",
    },
    {
      icon: "ant-design:dollar-circle-filled",
      title: "Increase Revenue",
      desc: "If your company processing over $1 million a month, you’ll qualify for our custom revenue sharing program designed to reward high-volume partners.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Escrowly Pay - Secure Payment Integration | Escrowly</title>
        <meta
          name="description"
          content="Integrate secure escrow payments into your website with Escrowly Pay. Simple, secure, and reliable payment processing for your business."
        />
        <meta
          name="keywords"
          content="escrow payment integration, secure payment processing, Escrowly Pay, payment gateway, crypto payment integration, secure checkout, payment API, escrow API, payment processing, secure transactions"
        />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta
          property="og:title"
          content="Escrowly Pay – Secure Payment Integration"
        />
        <meta
          property="og:description"
          content="Add secure escrow payments to your website with Escrowly Pay. Protect your transactions with our reliable payment processing solution."
        />
        <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
        <meta property="og:url" content="https://escrowly.com/escrowly-pay" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <main className="main-content">
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", url: "/" },
              { title: "Partners", url: "/partner" },
              { title: "Escrowly API", url: "/escrowly-api" },
            ]}
          />

          <Jumbotron
            title="Easily integrate crypto escrow into your platform."
            desc="Escrowly API delivers absolute trust and protection throughout every transaction on websites that range from e-commerce to marketplaces."
            imgContent={imgContent}
            labelPrimary="Open Account"
            labelSecondary="Contact Sales"
          />
          <section className="section-escrowly-api">
            <div className="container section">
              <div className="row items-center justify-center">
                <div className="col">
                  <h3 className="text-center">What is Escrowly API?</h3>
                  <p className="text-center w-50 mx-auto">
                    Escrowly API empowers buyers and sellers to negotiate prices
                    for high-value items, such as real estate, vehicles, luxury
                    goods, and digital assets, directly through your platform.
                    By integrating our API, you can add a Make Offer or Buy Now
                    buttons, enabling users to propose, counter, and accept
                    offers securely.
                  </p>
                  <div class="box-card">
                    <div class="benefit-row">
                      {dataWhatApi.map((item, index) => (
                        <div class="benefit-item" key={index}>
                          <Icon icon={item.icon} />
                          <p class="title">{item.title}</p>
                          <p class="desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container section bg-minimal">
              <div className="row items-center justify-center">
                <div className="col">
                  <div className="flex flex-col gap-6 items-center">
                    <h3 className="text-center font-bold">
                      Over $10 million of transactions protected with Escrowly
                    </h3>
                    <p className="text-center w-50 mx-auto">
                      Escrowly.com is the world’s first fully and most secure
                      crypto escrow solution making and safeguarding both buyers
                      and sellers
                    </p>
                    <button className="btn-primary">Open Account</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container section">
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <div className="p-3 flex items-center justify-center box-icon">
                    <Icon icon="fluent:plug-disconnected-28-filled" />
                  </div>
                  <h3 className="text-left">Built by coders, for coders</h3>
                  <p className="text-left">
                    Integrating with Escrowly’s API makes it easy for any
                    business to accept crypto payments and scale faster. The
                    Escrowly API is designed and coded by the industry's best
                    coders to make it easier for other developers to connect
                    their platform easily and start accepting payments without
                    fear of chargebacks. Your platform should provide users with
                    an entirely decentralized escrow service that stands as a
                    reliable solution for handling deals requiring high-value
                    items, property, vehicles, or digital services, without
                    needing to ever exit your platform
                  </p>
                </div>
                <div className="col">
                  <div class="box-card">
                    <div class="coder-row">
                      {dataBuilt.map((item, index) => (
                        <div class="coder-item" key={index}>
                          <Icon icon={item.icon} />
                          <p class="title">{item.title}</p>
                          <p class="desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container section">
              <div className="row items-center sm-direction-column">
                <div className="col">
                  <img
                    src="/images/escrowly-pay.jpg"
                    alt="Escrowly Users"
                    className="img-content"
                  />
                </div>
                <div className="col">
                  <h3 className="text-left">
                    Integrate Escrowly Pay in under a minute
                  </h3>
                  <p className="text-left">
                    Simplify your payment processes with Escrowly Pay. Our
                    solution allows for one-line integration, enabling you to
                    quickly add secure, Stablecoin escrow payments to your
                    platform.
                    <br />
                    The Escrowly API functions as a universal solution for
                    platforms in any industry:
                  </p>
                  <ul className="list-content">
                    <li> E-commerce Platforms</li>
                    <li> Freelance Marketplaces</li>
                    <li> Real Estate Listing Portals</li>
                    <li> Digital Service Platforms</li>
                    <li> Luxury Item Resellers</li>
                    <li> Domain Name Marketplaces</li>
                    <li> High-Value Classifieds</li>
                  </ul>
                  <p className="text-left">
                    Through Escrowly Pay, users can access escrow for domain
                    name sales, escrow for real estate transactions, and secure
                    P2P crypto escrow transactions using an easy-to-use
                    interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="container section">
              <div className="row items-center justify-center">
                <div className="col">
                  <h3 className="text-center">
                    Benefits of using the Escrowly API
                  </h3>
                  <div class="box-card">
                    <div class="benefit-row">
                      {dataBenefit.map((item, index) => (
                        <div class="benefit-item" key={index}>
                          <Icon icon={item.icon} />
                          <p class="title">{item.title}</p>
                          <p class="desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container section">
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="section section-testimonials"
              >
                <div className="container">
                  <SectionHeader
                    label="Testimonials"
                    title="The future of secure crypto payments starts here"
                    desc="See how developers and businesses are leveraging Escrowly API to enhance trust, security, and efficiency in their platforms."
                  />

                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 0.6, delay: 0 },
                      },
                    }}
                  >
                    <Swiper
                      speed={"1000"}
                      slidesPerView={"auto"}
                      className="overflow-visible"
                      navigation={true}
                      modules={[Navigation, Scrollbar]}
                      scrollbar={{
                        hide: false,
                        dragSize: 250,
                      }}
                      breakpoints={{
                        320: {
                          spaceBetween: 12,
                          scrollbar: {
                            hide: false,
                            dragSize: 101,
                          },
                        },
                        768: {
                          spaceBetween: 20,
                          scrollbar: {
                            hide: false,
                            dragSize: 250,
                          },
                        },
                      }}
                    >
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 0.5 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-1.jpg"
                            title="Reliable and Secure Payment Solutions!"
                            text="Escrowly made everything so simple and secure. I can focus on growing my business without worrying about payments!"
                            name="John Doe"
                            address="New York, US"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 0.7 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-2.jpg"
                            title="Trustworthy Service for Online Sellers!"
                            text="As an online seller, I’ve never felt more confident. Escrowly's seamless platform ensures every transaction is safe!"
                            name="Sarah Lee"
                            address="London, UK"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 0.9 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-3.jpg"
                            title="Fast and Efficient Payment Processing!"
                            text="Working with Escrowly has been a game changer. Fast, reliable, and secure payments – exactly what I needed!"
                            name="Mark Taylor"
                            address="Toronto, Canada"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 1.1 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-1.jpg"
                            title="Reliable and Secure Payment Solutions!"
                            text="Escrowly made everything so simple and secure. I can focus on growing my business without worrying about payments!"
                            name="John Doe"
                            address="New York, US"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 1.3 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-2.jpg"
                            title="Trustworthy Service for Online Sellers!"
                            text="As an online seller, I’ve never felt more confident. Escrowly's seamless platform ensures every transaction is safe!"
                            name="Sarah Lee"
                            address="London, UK"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 1.5 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-3.jpg"
                            title="Fast and Efficient Payment Processing!"
                            text="Working with Escrowly has been a game changer. Fast, reliable, and secure payments – exactly what I needed!"
                            name="Mark Taylor"
                            address="Toronto, Canada"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 1.7 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-3.jpg"
                            title="Escrowly gave me peace of mind"
                            text="I once used Escrowly for a high-risk Bitcoin exchange and was amazed by the speed and transparency. Since then, it's the only platform I trust for crypto transactions."
                            name="James Kenedy"
                            address=" Crypto Trader, UK"
                          />
                        </motion.div>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: "auto" }}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 1, delay: 1.9 },
                            },
                          }}
                        >
                          <TestimonialCard
                            img="/images/client-3.jpg"
                            title="Finally - a platform that protects NFT creators!"
                            text="As an NFT creator, I've dealt with scams before. With Escrowly, my funds stay safe until receipt is confirmed  it's the only escrow service I trust."
                            name="Adam Kirschner"
                            address="NFT Artist, USA"
                          />
                        </motion.div>
                      </SwiperSlide>
                    </Swiper>
                  </motion.div>
                </div>
              </motion.section>
            </div>
            <div className="container ready-start gap-4">
              <div className="flex flex-col">
                <h2>Let's get you set up!</h2>
                <p>Open an account or get in touch with our sales team today</p>
              </div>
              <div className="flex flex-row gap-4">
                <button className="btn-primary">Open Account</button>
                <button className="btn-outline">Contact Sales</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default EscrowlyApi;
