import React from "react";
import "./EscrowlyOffer.scss";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import imgContent from "../../assets/img/escrowly-offer.svg";
import { Icon } from "@iconify/react";

const EscrowlyOffer = () => {
  const dataCard = [
    {
      icon: "material-symbols:chart-data-rounded",
      title: "Improved conversion",
      desc: "Buyers are more likely to connect with sellers when there is a room to negotiate.",
    },
    {
      icon: "mingcute:flash-fill",
      title: "Easy integration",
      desc: "Get started in minutes with Escrowly API documentation and button creator.",
    },
    {
      icon: "icon-park-solid:layers",
      title: "Manage multiple offers",
      desc: "Sellers can easily view and manage multiple offers on a single item.",
    },
    {
      icon: "clarity:organization-solid",
      title: "User friendly workflow",
      desc: "Escrowly makes it easy to make offers, users can submit, counter, accept, or reject.",
    },
    {
      icon: "mingcute:safe-lock-fill",
      title: "Safe and secure",
      desc: "Establish credibility & trust with your customers as Escrowly Pay is supported by the most trusted, licensed online crypto escrow service in the world.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Secure Crypto Escrow for Offers & Negotiated Deals | Escrowly.com Offer</title>
        <meta
          name="description"
          content="Escrowly Offer enables buyers, sellers, and brokers to negotiate deals safely through protected crypto escrow. Accept, reject, or counter offers with full fund protection using USDT or USDC."
        />
        <meta
          name="keywords"
          content="Escrowly Offer, crypto escrow offers, negotiate crypto deals, secure crypto transactions, USDT escrow, USDC escrow, offer-based escrow, buyer seller negotiation, safe crypto escrow, digital goods escrow"
        />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta
          property="og:title"
          content="Escrowly.com Offer | Protected Crypto Offers and Negotiations"
        />
        <meta
          property="og:description"
          content="Negotiate with confidence using Escrowly Offer. Our smart escrow process protects funds while buyers and sellers finalize deals. Perfect for digital items, services, and brokered sales."
        />
        <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
        <meta property="og:url" content="https://escrowly.com/escrowly-offer" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <main className="main-content">
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", url: "/" },
              { title: "Developer", url: "/api-guide" },
              { title: "Escrowly Offer", url: "/escrowly-offer" },
            ]}
          />

          <Jumbotron
            title="Escrowly"
            titleItalic="Offer"
            desc="Escrowly Offer provides the safest and smartest method to handle offers for your goods and services. Our system provides a protected negotiation process for buying, selling and brokerage through crypto escrow services."
            imgContent={imgContent}
            labelPrimary="Open Account"
            labelSecondary="Contact Sales"
          />
          <section className="section-escrowly-offer">
            <div className="container section">
              <div className="row items-center sm-direction-column-reverse">
                <div className="col">
                  <h3 className="text-left mb-6">Built for All Use Cases</h3>
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
                    src="/images/escrowly-offer-01-img.webp"
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
                    src="/images/escrowly-offer-02-img.webp"
                    alt="Escrowly Users"
                    className="img-content"
                  />
                </div>
                <div className="col">
                  <h3 className="text-left">
                    Lock In the Deal, Secure In the Funds
                  </h3>
                  <p className="text-left mb-20">
                    Once a contract deal is finalized, the funds enter an escrow
                    system for protection.
                  </p>
                  <p className="text-left mb-20">
                    After the offer is accepted, Escrowly creates a USDT or USDC
                    escrow wallet for crypto that holds funds until all parties
                    fulfill their obligations.
                  </p>
                  <p className="text-left">
                    Our crypto payment protection escrow enables you to make
                    offer meaningful deals and maintain secure fund storage.
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

export default EscrowlyOffer;
