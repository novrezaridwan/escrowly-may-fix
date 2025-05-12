import React from "react";
import "./EscrowlyApiGuide.scss";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import imgContent from "../../assets/img/escrowly-api-guide.svg";
import imgEscrowlyPay from "../../assets/img/escrowly-pay.svg";
import imgEscrowlyOffer from "../../assets/img/escrowly-offer.svg";
import imgEscrowlyApi from "../../assets/img/escrowly-api.svg";
import imgEscrowlyButton from "../../assets/img/escrowly-button.svg";
import { Icon } from "@iconify/react";
import textPay from "../../assets/img/text-pay.svg";
import textOffer from "../../assets/img/text-offer.svg";
import textApi from "../../assets/img/text-api.svg";
import textButton from "../../assets/img/text-button.svg";
import onlyLogo from "../../assets/img/logo.svg";

const EscrowlyApiGuide = () => {
  const dataCard = [
    {
      icon: "mingcute:safe-lock-fill",
      title: "Trusted Transactions",
      desc: "A seamless API integration enables you to immediately enhance user trust by protecting transactions that employ crypto or non-crypto escrow solutions. The platform functions as an impartial gateway service that maintains funds while different participants meet their expectations.",
    },
    {
      icon: "mdi:gear",
      title: "Streamlined Checkout",
      desc: "We provide simple documentation and developer tools that let businesses launch in less than a few minutes, whether they need to deploy marketplace features, SaaS solutions, or complex platforms.",
    },
    {
      icon: "streamline:desktop-code-solid",
      title: "Easy Integration",
      desc: "Your project will benefit from the Escrowly API either through straightforward copy-paste code integration or by implementing our available SDKs. Your existing payment system will remain unchanged, so you can enhance it with escrowly security.",
    },
    {
      icon: "material-symbols:target",
      title: "Flexible for Your Business",
      desc: "Your transaction workflows, dispute settlement rules, and milestone-driven payments can be customized through the Escrowly API.",
    },
  ];

  const dataEscrowlyButton = [
    {
      img: textPay,
      desc: "For Predetermined Payments",
    },
    {
      img: textOffer,
      desc: "For Preset Transfers",
    },
    {
      img: textApi,
      desc: "Enables to Negotiate Prices",
    },
    {
      img: textButton,
      desc: " Enabling to Purchase or Make an Offer",
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
              { title: "Escrowly API Guide", url: "/escrowly-api-guide" },
            ]}
          />

          <Jumbotron
            title="Escrowly"
            titleItalic="API Guide"
            desc="Build secure, customizable escrow workflows on your platform."
            imgContent={imgContent}
            labelPrimary="Open Account"
            labelSecondary="Contact Sales"
          />
          <section className="section-escrowly-api-guide">
            <div className="container section">
              <div className="row items-center justify-center">
                <div className="col">
                  <h3 className="text-center">Escrowly API Guide</h3>
                  <p className="text-center w-50 mx-auto">
                    Developers building websites and marketplace owners can use
                    the Escrowly API to embed secure and instant escrow payment
                    capabilities into their applications. Escrowly's API
                    provides a solution for automated escrow transactions,
                    enabling you to run escrow payments without using additional
                    external platforms.
                  </p>
                  <div class="box-card">
                    <div class="api-guide-row">
                      {dataEscrowlyButton.map((item, index) => (
                        <div class="api-guide-item" key={index}>
                          <div className="card-img">
                            <img
                              src={onlyLogo}
                              alt="Escrowly"
                              className="only-logo"
                            />
                            <img src={item.img} alt={item.desc} />
                          </div>
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
                  <h3 className="text-left">Escrowly API Quick Start Guide</h3>
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
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left">Escrowly Pay</h3>
                  <p className="text-left">
                    This payment system enables buyers to start instant payments
                    through escrow under fixed-price agreements with peace of
                    mind. The API integrates seamlessly into your product pages
                    or checkout system through which users can make secure
                    payments with ease.
                  </p>
                </div>
                <div className="col">
                  <img
                    src={imgEscrowlyPay}
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
                    src={imgEscrowlyOffer}
                    alt="Escrowly Users"
                    className="img-content"
                  />
                </div>
                <div className="col">
                  <h3 className="text-left">Escrowly Offer</h3>
                  <p className="text-left">
                    This product allows customers to propose decisions regarding
                    your products or services through negotiated offers, which
                    trigger secure escrow transactions. The secure launch of an
                    escrow transaction occurs automatically after both parties
                    accept the offer, thus providing them reassurance.
                  </p>
                </div>
              </div>
            </div>
            <div className="container section">
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left">Escrowly API</h3>
                  <p className="text-left">
                    Through Escrowly API, companies can embed secure automated
                    escrow payment handling for both crypto and non-crypto
                    assets into existing applications. The Escrowly platform
                    supports USDT and USDC, combined with real-time monitoring
                    and customizable payment processes, to deliver secure
                    transactions that build trust. Additionally, it safeguards
                    e-commerce providers and their clients in high-value digital
                    asset markets.
                  </p>
                </div>
                <div className="col">
                  <img
                    src={imgEscrowlyApi}
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
                    src={imgEscrowlyButton}
                    alt="Escrowly Users"
                    className="img-content"
                  />
                </div>
                <div className="col">
                  <h3 className="text-left">Escrowly Button</h3>
                  <p className="text-left">
                    Need a faster integration? Embedding the Escrowly Button on
                    your site allows users to click and browse store items with
                    immediate purchase or offer possibilities via the API.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default EscrowlyApiGuide;
