import React from "react";
import "./EscrowlyButtons.scss";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import imgContent from "../../assets/img/escrowly-button.svg";
import imgSetLight from "../../assets/icons/ecsrowly-sets-light.svg";
import imgSetDark from "../../assets/icons/ecsrowly-sets-dark.svg";
import { Icon } from "@iconify/react";

const EscrowlyButtons = () => {
  const dataCard = [
    {
      icon: "mingcute:safe-lock-fill",
      title: "Trusted Transactions",
      desc: "Escrowly's crypto escrow and non-crypto escrow services fully protect both sellers and buyers during all transactions.",
    },
    {
      icon: "mdi:gear",
      title: "Streamlined Checkout",
      desc: "Our solution enables fast integration through plug-and-play API setup and quick buttons that require no developer assistance.",
    },
    {
      icon: "streamline:desktop-code-solid",
      title: "Easy Integration",
      desc: "Adding the Escrowly Button to your products, blog pages, or service listings requires only a quick pasting of a basic code block. Join the train of escrow-secured payments today.",
    },
    {
      icon: "material-symbols:target",
      title: "Flexible for Your Business",
      desc: "Our service supports the exclusive exchange of digital items, freelance services, domain names, physical objects, and many other items. Users ranging from sole entrepreneurs to growing marketplaces will find solutions with the Escrowly Button framework.",
    },
  ];

  const dataEscrowlyButton = [
    {
      icon: "ant-design:dollar-circle-filled",
      title: "Buy Now",
      desc: "Fast, one-click purchases at preset prices",
    },
    {
      icon: "cil:envelope-letter",
      title: "Make an Offer",
      desc: "Allows you negotiate about the sales price",
    },
    {
      icon: "healthicons:money-bag",
      title: "Both Options",
      desc: "Users can purchase directly or present an offer",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Escrowly Buttons - Easy Payment Integration | Escrowly</title>
        <meta
          name="description"
          content="Add secure escrow payment buttons to your website with Escrowly Buttons. Simple, customizable, and secure payment integration for any website."
        />
        <meta
          name="keywords"
          content="escrow buttons, payment buttons, Escrowly Buttons, secure checkout, payment integration, website buttons, escrow integration, secure payments, checkout buttons, payment processing"
        />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta
          property="og:title"
          content="Escrowly Buttons – Easy Payment Integration"
        />
        <meta
          property="og:description"
          content="Add secure escrow payment buttons to your website in minutes. Our customizable buttons make it easy to accept secure payments."
        />
        <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
        <meta
          property="og:url"
          content="https://escrowly.com/escrowly-buttons"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <main className="main-content">
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", url: "/" },
              { title: "Developer", url: "/developer" },
              { title: "Escrowly Buttons", url: "/escrowly-buttons" },
            ]}
          />

          <Jumbotron
            title="Escrowly"
            titleItalic="Button"
            desc="Create a personalized escrow button for your webpage, shop, or listings."
            imgContent={imgContent}
            labelPrimary="Open Account"
            labelSecondary="Contact Sales"
          />
          <section className="section-escrowly-button">
            <div className="container section">
              <div className="row items-center justify-center">
                <div className="col">
                  <h3 className="text-center">What is Escrowly Button?</h3>
                  <p className="text-center w-50 mx-auto">
                    The Escrowly Button acts a smart embeddable functionality
                    for adding secure payment features directly to your website
                    content, product listings, and online stores. Through simple
                    user interface activation, buyers and sellers can carry out
                    secure escrow-based transactions that safeguard every
                    participant.
                  </p>
                  <div class="box-card">
                    <div class="benefit-row">
                      {dataEscrowlyButton.map((item, index) => (
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
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left">Why Use Escrowly Button?</h3>
                  <div className="flex flex-col gap-3 mt-20">
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
                  <h3 className="text-left">Who is Escrowly Button For?</h3>
                  <p className="text-left">
                    Anyone can use the Escrowly Button to provide secure
                    cryptocurrency or conventional payment solutions through
                    escrow directly from their own platform. It is ideal for
                    eCommerce store owners, digital product sellers, domain name
                    traders, freelancers and agencies, online marketplaces, etc.
                    By integrating the Escrowly Button, you can eliminate
                    payment obstacles, create trust between parties, and
                    safeguard everyone from fraud and disputes.
                  </p>
                  <div className="flex gap-6 flex-row flex-wrap items-center justify-center">
                    <img
                      src={imgSetLight}
                      alt="Escrowly"
                      className="img-seat"
                    />
                    <img src={imgSetDark} alt="Escrowly" className="img-seat" />
                    {/* <div className="img-seat">
                    </div>
                    <div className="img-seat">
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default EscrowlyButtons;
