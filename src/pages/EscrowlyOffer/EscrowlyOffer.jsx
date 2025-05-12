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
        <title>Escrowly Offer - Secure Negotiation Platform | Escrowly</title>
        <meta
          name="description"
          content="Facilitate secure negotiations and offers with Escrowly Offer. A platform designed for safe and transparent deal-making between buyers and sellers."
        />
        <meta
          name="keywords"
          content="escrow negotiation, secure offers, Escrowly Offer, deal negotiation, secure transactions, offer management, negotiation platform, secure deals, escrow platform, transaction security"
        />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta
          property="og:title"
          content="Escrowly Offer – Secure Negotiation Platform"
        />
        <meta
          property="og:description"
          content="Make and receive secure offers with Escrowly Offer. Our platform ensures safe and transparent negotiations for all parties involved."
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
              { title: "Developer", url: "/developer" },
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
