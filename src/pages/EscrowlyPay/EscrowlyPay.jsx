import React from "react";
import "./EscrowlyPay.scss";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import imgContent from "../../assets/img/escrowly-pay.svg";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

const EscrowlyPay = () => {
  const dataCard = [
    {
      icon: "mingcute:flash-fill",
      title: "Easy integration",
      desc: "Get started in minutes with our API documentation and Escrowly button",
    },
    {
      icon: "bi:people-fill",
      title: "Buyer friendly workflow",
      desc: "Buyers can simply make payments in a few simple steps",
    },
    {
      icon: "mingcute:safe-lock-fill",
      title: "Safe and secure ",
      desc: "Through Escrowly Pay, you can secure funds for digital purchases, professional services, and collectible sales securely",
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
              { title: "Developer", url: "/developer" },
              { title: "Escrowly Pay", url: "/escrowly-pay" },
            ]}
          />

          <Jumbotron
            title="Escrowly"
            titleItalic="Pay"
            desc="Escrowly Pay provides you with a safe platform for performing your crypto transactions. The platform serves individual users and businesses with the best crypto escrow services allowing to transfer high-value assets securely."
            imgContent={imgContent}
            labelPrimary="Open Account"
            labelSecondary="Contact Sales"
          />
          <section className="section-escrowly-pay">
            <div className="container section">
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left">What is Escrowly Pay?</h3>
                  <p className="mb-20 text-left">
                    The payment system, Escrowly Pay, implements smart contract
                    escrow technology to manage secure transactions between
                    buyers and sellers. It enables the secure storage of
                    Stablecoins, including USDT and USDC, until the completion
                    of both conditions by parties, which creates safety for
                    users across this industry, which is renowned for
                    irreversible payments.
                  </p>
                  <div className="flex flex-col gap-3">
                    {dataCard.map((item, index) => (
                      <div className="flex card-pay gap-3" key={index}>
                        <Icon icon={item.icon} />
                        <div className="flex flex-col">
                          <p className="title">{item.title}</p>
                          <p className="desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col">
                  <img
                    src="/images/escrowly-pay.jpg"
                    alt="Escrowly Users"
                    className="img-content"
                  />
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
                    Perfect for Businesses and Platforms
                  </h3>
                  <p className="text-left">
                    You can connect your business with Escrowly Pay through our
                    advanced Escrowly API to deliver payment protection escrow
                    directly from your websites or platforms, We support:
                  </p>
                  <ul className="list-content">
                    <li>E-commerce Stores</li>
                    <li>Domain Selling Sites</li>
                    <li>Web3 Apps and DeFi Platforms</li>
                    <li>Online Service Marketplaces</li>
                    <li>Crypto Trades, Exchanges, and Many more</li>
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
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left">Fast. Transparent. Reliable</h3>
                  <p className="text-left">
                    The versatility and scalability of Escrowly Pay allow users
                    to execute blockchain escrow services for startups and
                    escrow for online marketplace transactions
                  </p>
                  <ul className="list-content">
                    <li>
                      Escrowly Pay verifies and secures funds instantly into an
                      escrow.
                    </li>
                    <li>
                      Escrow smart contracts execute secure crypto transactions,
                      which minimizes the chances of fraud occurrence.
                    </li>
                    <li>
                      Once terms are confirmed, this product generates automatic
                      payments without needing any middle person or prolonging
                      the payment duration.
                    </li>
                    <li>
                      Escrowly Pay is available worldwide for cross-border
                      crypto escrow transactions.
                    </li>
                  </ul>
                  <p className="text-left">
                    The system accepts only USDT and USDC while maintaining fund
                    stability during transactions. No fiat. No worries.
                  </p>
                </div>
                <div className="col">
                  <img
                    src="/images/escrowly-pay.jpg"
                    alt="Escrowly Users"
                    className="img-content"
                  />
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
                  <h3 className="text-left">Built-In Protections</h3>
                  <p className="text-left">Escrowly Pay features:</p>
                  <ul className="list-content">
                    <li>Dispute Resolution Tools</li>
                    <li>Inspection Periods for Buyer Review</li>
                    <li>Fraud Prevention Protocols</li>
                    <li>Secure Escrow Wallets for Crypto</li>
                  </ul>
                  <p className="text-left">
                    With Escrowly Pay, you can enjoy extensive security systems
                    for brokers handling car sales and sellers completing
                    jewelry and luxury watch deals.
                  </p>
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
                    desc="Escrowly.com is the recommended payment system of top eCommerce platforms. Simply open an account to get started today!"
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
                <h2>Ready to get started?</h2>
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

export default EscrowlyPay;
