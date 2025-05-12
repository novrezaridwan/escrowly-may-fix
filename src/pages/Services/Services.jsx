import React from "react";
import { Helmet } from "react-helmet-async";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import EscrowlyServices from "../../sections/EscrowlyServices/EscrowlyServices";

const Services = () => (
    <>
        <Helmet>
            <title>Secure Crypto Escrow for Domains, Vehicles, Real Estate & More | Escrowly.com</title>
            <meta name="description" content="Escrowly.com provides secure crypto escrow services for domain names, motor vehicles, real estate, luxury items, digital goods, milestone payments, and investments. Trusted protection for every transaction." />
            <meta name="keywords" content="crypto escrow, domain name escrow, vehicle escrow, real estate escrow, luxury item escrow, digital goods escrow, milestone transactions, investment escrow, secure crypto transactions, blockchain escrow service" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Trusted Crypto Escrow for Every Transaction | Escrowly.com" />
            <meta property="og:description" content="Protect your crypto deals with Escrowly. From domains to vehicles and real estate, we offer secure and transparent escrow solutions for every type of digital and physical asset." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Escrowly Services", url: "/services" },
                    ]}
                />
    
                <EscrowlyServices/>
                
                
                <Faq/>
                <Innovate/>
            </main>
        </div>
    </>
);

export default Services;