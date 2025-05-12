import React from "react";
import { Helmet } from "react-helmet-async";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Guidlines from "../sections/Guidlines/Guidlines";

const HomePage = () => (
    <>
        <Helmet>
            <title>Buyer, Seller & Broker Protection | Escrowly.com Guidelines for Safe Crypto</title>
            <meta name="description" content="Learn how Escrowly protects buyers, sellers, and brokers in every crypto escrow transaction. Follow our secure transaction guidelines for identity verification, inspection periods, and fraud prevention." />
            <meta name="keywords" content="crypto escrow guidelines, secure crypto transactions, buyer protection, seller escrow, broker transaction safety, Escrowly guide, safe crypto deals, identity verification, dispute prevention, inspection period" />
            <meta name="author" content="Escrowly.com Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly.com Secure Transaction Guide for Buyers, Sellers & Brokers" />
            <meta property="og:description" content="Follow Escrowly’s guidelines to ensure safe and secure crypto escrow transactions. Protect funds, confirm quality, and build trust in every deal." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "How It Works", url: "/how-it-works" },
                    ]}
                />
                <HowItWorks />
                <Guidlines />
                <Faq />
                <Innovate />
            </main>
        </div>
    </>
);

export default HomePage;
