import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ServiceCard from "../components/ServiceCard/ServiceCard";

const GetStarted = () => (
    <>
        <Helmet>
            <title>Get Started| Trusted Crypto Escrow Services with Escrowly.com</title>
            <meta name="description" content="Start using Escrowly to securely buy, sell, or exchange assets with crypto escrow. Protect domain names, vehicles, real estate, luxury goods, and more. Get started in minutes." />
            <meta name="keywords" content="crypto escrow, Escrowly, secure crypto transactions, USDT escrow, USDC escrow, domain escrow, vehicle escrow, real estate escrow, milestone escrow, digital goods escrow, luxury item escrow" />
            <meta name="author" content="Escrowly Team" />
            <meta property="og:title" content="Get Started with Escrowly.com | The Global Leader in Crypto Escrow" />
            <meta property="og:description" content="Join Escrowly to protect your crypto transactions. Secure deals for domains, vehicles, real estate, and more with trusted USDT and USDC escrow." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com/get-started" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Partners", url: "/our-partners" },
                        { title: "Get Started", url: "/get-started" },
                    ]}
                />
                
<section className="section-escrowly-services">
        <div className="container">
            <SectionHeader 
                label="Get Started"
                title="Secure & Transparent Crypto Escrow – Get Started Today"
                className=""
            />
            <div className="escrowly-services-list row">
                <div className="col">
                    <ServiceCard
                        icon="/img/service-1.svg"
                        title="Crypto Escrow Services"
                        text="Secure crypto escrow for digital goods, services, and online items with full protection."
                        url="/crypto-escrow-services"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-2.svg"
                        title="Domain Name Escrow"
                        text="Guarantee a safe & smooth domain name ownership transfer with escrow protection."
                        url="/domain-name-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-3.svg"
                        title="Motor Vehicle Escrow "
                        text="Buy or sell vehicles confidently with crypto funds securely held until transfer."
                        url="/motor-vehicle-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-4.svg"
                        title="Milestone Transactions"
                        text="Release payments in stages for large projects with escrow, ensuring trust and accountability."
                        url="/milestone-transactions-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-5.svg"
                        title="Online Goods & Digital Items"
                        text="Secure online purchases by using crypto escrow, including software and other digital goods."
                        url="/online-goods-digital-items-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-6.svg"
                        title="Stock & Investment Escrow "
                        text="Secure stock trades and asset agreements with trusted crypto escrow services."
                        url="/stock-investment-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-7.svg"
                        title="Luxury Items Escrow "
                        text="Buy and sell high-value items like gold, jewelry, watches, and collectibles with assurance."
                        url="/luxury-items-escrow"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-8.svg"
                        title="Real Estate Escrow"
                        text="Protect real estate transfers with crypto escrow until all terms are fulfilled."
                        url="/real-estate-escrow"
                    />
                </div>
            </div>
        </div>
    </section>            </main>
        </div>
    </>
);

export default GetStarted;