import React, { useState } from 'react';
import "./Guidlines.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GuideCard from '../../components/GuideCard/GuideCard';
import Button from '../../components/Button/Button';
// import Button from "../../components/Button/Button";

const Guidlines = () => { 
    const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className="section section-guidlines">
        <div className="container">
            <div className="row xs-direction-column guidlines-header">
                <div className="col">
                    <SectionHeader 
                        label="Guidelines"
                        title="Escrowly Guidelines for Secure Transactions"
                        className=""
                    />
                </div>
                <div className="col">
                    <p>In an effort to make every transaction on Escrowly safe and easy, we have laid out clear guidelines for buyers, sellers, and brokers. By doing things such as setting clear terms, confirming the identities of all participants in a transaction, and putting in place inspection periods, you contribute to upholding the integrity, transparency, and trust upon which our crypto-native platform is based.</p>
                </div>
            </div>
            
            <div className="tabs">
                <div className="tab-buttons">
                    <button
                        onClick={() => setActiveTab('tab1')}
                        className={activeTab === 'tab1' ? 'active' : ''}
                    >
                    Buyer Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab2')}
                        className={activeTab === 'tab2' ? 'active' : ''}
                    >
                    Seller Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab3')}
                        className={activeTab === 'tab3' ? 'active' : ''}
                    >
                    Broker Guide
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'tab1' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/guide-image-1.jpg", "/images/guide-image-2.jpg"]}
                                title="Buyer Guide"
                                subtitle="Buy with Confidence"
                                text="Escrowly.com enables buyers to trade safely using its secure crypto escrow service. Your funds are safe in escrow while you wait to receive and accept the product or service, which gives you peace of mind throughout the process."
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Escrowly.com gives you time to examine your purchase before disbursing funds. During this period, use this opportunity to ensure that the goods or services are as per your expectations. Approve payment only when you are more than satisfied with the quality being delivered."
                                type="image"
                            />
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/buyer_image2.avif", "/images/buyer_image.avif"]}
                                title="Seller Guide"
                                subtitle="Sell with Confidence"
                                text="Escrowly.com gives sellers the power to transact safely by holding buyer funds in escrow until all specified requirements are met. This guarantees payment, fraud prevention, and a reliable experience from initial offer to final delivery."
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Ensure About Specifications of Products or Services"
                                subtitle="Safeguards your Reputation"
                                text="Before shipping or delivering goods or services, ensure they are up to the specifications agreed upon. This step safeguards your reputation and negates the possibility of disputes, making it possible for escrow processes to continue uninterrupted and funds to be disbursed smoothly."
                                type="image"
                            />
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/Broker_image.avif", "/images/Broker_image2.avif"]}
                                title="Broker Guide"
                                subtitle="Facilitates and Safeguards Deals"
                                text="Escrowly.com enables brokers to conduct, track, and complete transactions safely. The use of escrow protects the interests of the two parties while making sure that terms are fulfilled before payment is released."
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Brokers should ensure that goods or services meet the standards agreed upon before approving release. Confirming quality safeguards all participants and maintains faith established in Escrowly’s secure crypto escrow transactions process."
                                type="image"
                            />
                        </div>
                    )}
                </div>
            </div>
            <Button 
                url="#get-started"
                text="Get Started"
                icon="/img/btn-arrow-right.svg"
                delay={0}
                className="btn btn-primary"
            />  
        </div>
    </section> 
  );
};

export default Guidlines;
