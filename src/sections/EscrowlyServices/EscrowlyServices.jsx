import React from "react";
import "./EscrowlyServices.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const EscrowlyServices = () => (

    <section className="section-escrowly-services">
        <div className="container">
            <SectionHeader 
                label="Escrowly Services"
                title="Secure & Transparent Crypto Escrow Services"
                className=""
            />
            <div className="escrowly-services-list row">
                <div className="col">
                    <ServiceCard
                        icon="/img/service-1.svg"
                        title="Crypto Escrow Services"
                        text="Secure crypto escrow transactions for goods, services, and contracts with full protection."
                        url="/crypto-escrow-services"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-2.svg"
                        title="Domain Name Escrow"
                        text="Guarantee a safe and smooth transfer of domain ownership with escrow protection."
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
                        text="Buy and sell high-value items like jewelry, watches, and collectibles with assurance."
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
    </section>
            
);

export default EscrowlyServices;