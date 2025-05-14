import React, { useState } from "react";
import "./FeesTransactions.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeesTransactions = function () {
  const cryptoTabs = [
    { id: "tab1", icon: "/img/icon-crypto-tether.svg", label: "USDT" },
    // { id: 'tab2', icon: "/img/icon-crypto-cardano.svg", label: "Litecoin (LTC)" },
    // { id: 'tab3', icon: "/img/icon-crypto-bitcoin.svg", label: "Bitcoin (BTC)" },
    // { id: 'tab4', icon: "/img/icon-crypto-etherium.svg", label: "Ethereum (ETH)" },
    // { id: 'tab5', icon: "/img/icon-crypto-solana.svg", label: "Solana (SOL)" },
    // { id: 'tab6', icon: "/img/icon-crypto-binance.svg", label: "Binance Coin (BNB)" },
    // { id: 'tab7', icon: "/img/icon-crypto-xrp.svg", label: "XRP (XRP)" },
    {
      id: "tab8",
      icon: "/img/icon-crypto-usdc.svg",
      label: "USDC",
    },
  ];

  const [activeTab, setActiveTab] = useState(cryptoTabs[0].id);

  const transactionData = [
    {
      amount: "$1 - $500",
      standard: "3.5%",
      concierge: "$10",
      noCharges: "$0",
    },
    {
      amount: "$500.01 - $5,000",
      standard: "2.5%",
      concierge: "$15",
      noCharges: "$0",
    },
    {
      amount: "$5000.01 - $10,000",
      standard: "2.2%",
      concierge: "$75",
      noCharges: "$0",
    },
    {
      amount: "$10,000.01 - $100,000",
      standard: "1.8%",
      concierge: "$150",
      noCharges: "$0",
    },
    {
      amount: "$100,000.01 - $500,000",
      standard: "1.5%",
      concierge: "$600",
      noCharges: "$0",
    },
    {
      amount: "$500,000.01 - $1,000,000",
      standard: "1.0%",
      concierge: "$2000",
      noCharges: "$0",
    },
    {
      amount: "$1,000,000.01 - $5,000,000",
      standard: "0.7%",
      concierge: "$4,500",
      noCharges: "$0",
    },
    {
      amount: "$5,000,000.01 - $10,000,000",
      standard: "0.4%",
      concierge: "$7,500",
      noCharges: "$0",
    },
    {
      amount: "$10,000,000+",
      standard: "0.2%",
      concierge: "Custom Quote",
      noCharges: "$0",
    },
  ];

  return (
    <section className="section section-fees-transactions">
      <div className="container">
        <div className="transactions-tabs">
          <Swiper
            className="swipper"
            loop={false}
            speed={"1000"}
            slidesPerView={"auto"}
          >
            {cryptoTabs.map((tab) => (
              <SwiperSlide key={tab.id} style={{ width: "auto" }}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`transaction-btn ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  <img src={tab.icon} alt={tab.label} />
                  {tab.label}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h5>Fees for Transactions Using Escrowly (Crypto Payments)</h5>
        <div className="transactions-content">
          {activeTab === "tab1" && (
            <div className="transactions-table">
              <div className="th">
                <div className="td">Transaction Amount (Crypto Amount)</div>
                <div className="td">Fee Percentage</div>
                <div className="td">Minimum Fee</div>
                <div className="td">Concierge Charges</div>
              </div>
              {transactionData.map((row, index) => (
                <div className="tr" key={index}>
                  <div className="td">
                    <strong>Transaction Amount (Crypto Amount)</strong>
                    <span>{row.amount}</span>
                  </div>
                  <div className="td">
                    <strong>Standard</strong>
                    <span>{row.standard}</span>
                  </div>
                  <div className="td">
                    <strong>Concierge</strong>
                    <span>{row.concierge}</span>
                  </div>
                  <div className="td">
                    <strong>Payment Processing Fee</strong>
                    <span>{row.noCharges}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="transactions-content-item">2</div>
          )}
          {activeTab === "tab3" && (
            <div className="transactions-content-item">3</div>
          )}
          {activeTab === "tab4" && (
            <div className="transactions-content-item">4</div>
          )}
          {activeTab === "tab5" && (
            <div className="transactions-content-item">5</div>
          )}
          {activeTab === "tab6" && (
            <div className="transactions-content-item">6</div>
          )}
          {activeTab === "tab7" && (
            <div className="transactions-content-item">7</div>
          )}
          {activeTab === "tab8" && (
            <div className="transactions-table">
              <div className="th">
                <div className="td">Transaction Amount (Crypto Amount)</div>
                <div className="td">Fee Percentage</div>
                <div className="td">Minimum Fee</div>
                <div className="td">Concierge Charges</div>
              </div>
              {transactionData.map((row, index) => (
                <div className="tr" key={index}>
                  <div className="td">
                    <strong>Transaction Amount (Crypto Amount)</strong>
                    <span>{row.amount}</span>
                  </div>
                  <div className="td">
                    <strong>Standard</strong>
                    <span>{row.standard}</span>
                  </div>
                  <div className="td">
                    <strong>Concierge</strong>
                    <span>{row.concierge}</span>
                  </div>
                  <div className="td">
                    <strong>Payment Processing Fee</strong>
                    <span>{row.noCharges}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="blog-article-content max-w-full">
          <h3>
            Instantly Estimate Escrow Fees for Your Secure Crypto Transactions
          </h3>
          <p>
            Escrowly.com enables users to evaluate the cost of our crypto escrow
            service, client can get cost estimates before starting their secure
            crypto trade with Escrowly's Fee Calculator. Through its Fee
            Calculator system, Escrowly provides real-time estimates of payment
            costs that eliminate secret costs or unexpected charges.
          </p>
          <h3>How Escrowly Fees Work</h3>
          <p>
            Escrowly requires customers to pay a fee when using its services for
            secure crypto transactions. This fee covers:
          </p>
          <ul>
            <li>Transaction Monitoring</li>
            <li>Smart Contract Execution</li>
            <li>Dispute Resolution Services</li>
            <li>Buyer, Seller, and Broker Protection</li>
          </ul>
          <p>
            The fee gets taken from the escrow funds before the release of money
            to the parties involved. It depends on transaction size, currency
            type, and the additional agreed-upon services. Users can split,
            divide the fee payment or assign it to any party involved in the
            transaction. You can make these arrangements with complete
            transparency.
          </p>
          <h3>Crypto Curency We Currently Support:</h3>
          <p>Supporting stablecoins for crypto escrow.</p>
          <ul>
            <li>
              <strong>USDT (Tether)</strong>
            </li>
            <li>
              <strong>USDC (USD Coin)</strong>
            </li>
          </ul>
          <h6>Example Scenarios:</h6>
          <p>
            1 - Escrow for International Business Deals:{" "}
            <strong>$50,000</strong> in USDT → Estimated fee:{" "}
            <strong>$900</strong>
          </p>
          <p>
            2 - Escrow for Art and Collectables: <strong>$10,000</strong> in
            USDC → Estimated fee: <strong>$220</strong>
          </p>
          <p>
            3 - Escrow for Real Estate Closing: <strong>$250,000</strong> in
            USDT → Estimated fee: <strong>$3,750</strong>
          </p>
          <p>
            The calculator will allow you to simulate transaction processes and
            plan for future costs.
          </p>
          <h3>Transparent Crypto Escrow - No Surprises</h3>
          <p>
            Escrowly operates as a platform specifically designed to remove all
            hidden charges, complex contractual obligations, and payment
            visibility concerns. Our platform prides itself on being the first
            completely crypto-founded escrow platform which transforms trading
            safety standards during modern digital times.
          </p>
          <p>It is perfect for:</p>
          <ul>
            <li>Escrow for Real Estate Closings</li>
            <li>Escrow for E-commerce Stores</li>
            <li>Escrow for Domain Name Marketplaces</li>
            <li>Escrow for Digital items & Games and many more.</li>
          </ul>
          <p>No fiat. No volatility. Just stable, reliable crypto escrow.</p>
          <h6>Plan Smarter. Trade Safer. Only Pay What's Fair</h6>
        </div>
      </div>
    </section>
  );
};

export default FeesTransactions;
