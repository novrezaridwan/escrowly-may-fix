import React from "react";
import { Helmet } from "react-helmet-async";
import "./Blog.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PostCard from "../../components/PostCard/PostCard";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ChipsFilter from "../../components/ChipFilter/ChipsFilter";

const Blog = () => (
  <>
    <Helmet>
      <title>Crypto Escrow Blog | Secure Bitcoin, Ethereum, USDT Escrow etc | Escrowly.com</title>
      <meta
        name="description"
        content="Explore insights on crypto escrow services including Bitcoin, Ethereum, USDT, smart contract escrow, decentralized platforms, NFT transactions, DeFi, token sales, and more. Stay informed with Escrowly's expert crypto security blog."
      />
      <meta
        name="keywords"
        content="crypto escrow service, bitcoin escrow service, secure crypto transactions, smart contract escrow, blockchain escrow service, crypto escrow platform, decentralized escrow service, crypto escrow for businesses, USDT escrow service, Ethereum escrow service, escrow wallet for crypto, escrow smart contracts crypto, secure P2P crypto escrow, escrow service for NFT transactions, crypto payment protection escrow, escrow for crypto traders, escrow account for cryptocurrency, how to use escrow for crypto, escrow for crypto mining rigs, escrow for DeFi transactions, cross-border crypto escrow, escrow payment for Bitcoin, escrow for crypto exchanges, best crypto escrow services, escrow for token sales, secure crypto escrow for ICO, escrow for NFT marketplaces"
      />
      <meta name="author" content="Escrowly Crypto Escrow Team" />
      <meta
        property="og:title"
        content="Escrowly.com Blog | The Future of Secure Crypto Escrow Services"
      />
      <meta
        property="og:description"
        content="Learn everything about crypto escrow – from smart contract safety to domain escrow to real estate crypto cross-border escrow strategies. Trusted insights from Escrowly.com"
      />
      <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
      <meta property="og:url" content="https://escrowly.com/blog" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <div>
      <main className="main-content">
        <Breadcrumbs
          breadcrumbs={[
            { title: "Home", url: "/" },
            { title: "Our Blog", url: "/blog" },
          ]}
        />

        <section className="blog-articles">
          <div className="container">
            <SectionHeader
              label="Our Blog"
              title="Crypto Insights & Resources"
              className="mb-0"
            />
            <ChipsFilter />
            <div className="row xs-direction-column">
              <div className="col">
                <PostCard
                  image="/images/post-image-1.jpg"
                  title="The Future of Secure Crypto Transactions"
                  category="Blockchain & Security"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
              <div className="col">
                <PostCard
                  image="/images/post-image-2.jpg"
                  title="How Escrowly Ensures Secure Crypto Payments"
                  category="Crypto Transactions"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
            </div>
            <div className="row xs-direction-column">
              <div className="col">
                <PostCard
                  image="/images/post-image-3.jpg"
                  title="How Escrow Enhances Online Transaction"
                  category="E-commerce & Finance"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
              <div className="col">
                <PostCard
                  image="/images/post-image-4.jpg"
                  title="The Role of Smart Contracts in Digital Payments"
                  category="FinTech & Automation"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
            </div>
            <div className="row xs-direction-column">
              <div className="col">
                <PostCard
                  image="/images/post-image-5.jpg"
                  title="Global Transactions Made Easy with Escrow"
                  category="International Business & Payments"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
              <div className="col">
                <PostCard
                  image="/images/post-image-6.jpg"
                  title="Preventing Fraud in the Crypto Space"
                  category="Blockchain & Security"
                  date="December 27, 2024"
                  url="/blog-article"
                />
              </div>
            </div>

            <nav className="blog-nav">
              <Button
                url="#get-started"
                text="Next"
                icon="/img/btn-arrow-right.svg"
                delay={0}
                className="btn-primary btn-next"
              />
            </nav>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default Blog;
