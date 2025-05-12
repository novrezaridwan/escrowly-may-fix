import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const TermsAndConditions = () => (
    <>
        <Helmet>
            <title>Terms and Conditions - Crypto Escrow Agreement | Escrowly.com</title>
            <meta name="description" content="Read the Terms and Conditions for using Escrowly.com – a crypto-only escrow service ensuring secure, compliant transactions between parties. Understand your rights and responsibilities." />
            <meta name="keywords" content="Escrowly terms and conditions, crypto escrow terms, crypto service agreement, escrow user agreement, digital asset transaction rules, Escrowly policies, AML compliance terms, KYC obligations, secure crypto platform rules, Escrowly legal agreement, crypto transaction safety" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Terms and Conditions – Escrowly Crypto Escrow Agreement" />
            <meta property="og:description" content="By using Escrowly, you agree to our crypto escrow Terms & Conditions including AML/KYC compliance, user eligibility, transaction responsibilities, and prohibited activities." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Privacy", url: "/privacy-policy" },
                        { title: "Terms And Conditions", url: "/terms-and-conditions" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>Escrowly Terms And Conditions</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Effective Date: [23 June 2024]</li>
                            </ul>
                            <span className="post-date">Last Updated: 02 May 2025</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />11 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <h3>1. Introduction</h3>
                            <p>Welcome to Escrowly.com ("Escrowly," "we," "us," or "our"). By accessing or using our crypto escrow services, you ("User," "you," or "your") agree to be bound by these Terms & Conditions. Our platform requires your agreement with these terms to allow access for users.</p>
                            <p>Escrowly operates as a only Crypto Based Escrow Service and does not provide fiat transactions, banking services, or traditional payment processing. Our services are designed to facilitate secure cryptocurrency transactions between parties while adhering to global regulatory standards.</p>
                            <blockquote>Escrowly allows users to conduct secure crypto escrow transactions. Escrowly maintains a neutral role during transactions while acting exclusively as a facilitator of escrow services but does not perform processing duties nor extend fund storage beyond escrow periods nor guarantee transaction success or loss prevention. Furthermore, the service allows users to maintain escrow funds after a transaction is concluded. Escrowly acts as an intermediary safeguarding both transaction success and loss prevention during escrow processes.</blockquote>
                            <h3>2. Key Policies & Agreements</h3>
                            <p>As an Escrowly user, you must follow all policies incorporated into these Terms & Conditions:</p>   
                            <ol>
                                <li>a. Privacy Policy: It defines the processes to collect and utilize your data as well as protect your information.</li>
                                <li>b. AML/KYC Policy: Our anti-money laundering and know-your-customer policy consists of two important documents for our regulatory compliance.</li>
                                <li>c. Regulatory Compliance Policy: Our adherence to financial and legal frameworks.</li>
                                <li>d. Legal Security Policy: This document maintains protection for users while managing their transactions.</li>
                                <li>e. Risk Disclosure Statement: This statement details the hazards that appear when dealing with cryptocurrency operations.</li>
                            </ol>
                            <h3>3. Eligibility & User Responsibilities</h3>
                            <p>To use Escrowly:</p>   
                            <ol>
                                <li>1. Users must reach the minimum age of 18 according to their jurisdiction's laws.</li>
                                <li>2. All users must successfully finalize their KYC verification steps.</li>
                                <li>3. Users must reside outside restricted locations or be absent from international sanction lists.</li>
                                <li>4. The Escrowly platform should be used exclusively for lawful financial transactions.</li>
                                <li>5. Users maintain full responsibility for keeping their accounts secure along with strict adherence to all existing legal requirements.</li>
                            </ol>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/escrowly-terms-conditions.webp" alt="Escrowly Terms & Conditions"/>
                            <h3>4. Services Provided</h3>
                            <p>The platform allows users to conduct secure crypto escrow transactions. Escrowly maintains a neutral role during transactions while acting exclusively as a facilitator of escrow services but does not perform processing duties nor extend fund storage beyond escrow periods nor guarantee transaction success or loss prevention. Furthermore, the service allows users to maintain escrow funds after a transaction is concluded. Escrowly acts as an intermediary safeguarding both transaction success and loss prevention during escrow processes.</p>
                            <h3>5. Prohibited Activities</h3>
                            <p>Users cannot use Escrowly to perform any of the following activities:</p>   
                            <ol>
                                <li>a. Fraudulent, illegal, or deceptive transactions.</li>
                                <li>b. Money laundering, terrorist financing, or any other illegal financial transactions.</li>
                                <li>c. The purchase or trade or exchange of goods or services that are restricted or prohibited under any local, state or international laws.</li>
                            </ol>
                            <p>A breach of these rules leads to account suspension and possible legal consequences.</p>
                            <h3>6. Fees & Payment Terms</h3>
                            <p>Before starting any escrow transaction, you must review the service fees Escrowly will charge since they are presented upfront. You must consent to pay every applicable fee during the transaction initiation process. Fees are non-refundable. While holding funds in escrow Escrowly does not bear any responsibility for payment costs that users must pay to the blockchain network.</p>
                            <h3>7. Transaction Process & Dispute Resolution</h3>
                            <h4>7.1 Transaction Flow</h4>
                            <ol>
                                <li>1. Throughout the transaction, funds remain in escrow storage until all duties are completely fulfilled by all participating parties.</li>
                                <li>2. After all conditions become satisfied, the crypto escrow service releases payment to the recipient.</li>
                                <li>3. Escrowly provides dispute mediation services yet makes no promises to resolve disputes in favor of any party.</li>
                            </ol>
                            <h4>7.2 Dispute Handling & Arbitration</h4>
                            <ol>
                                <li>1. Before Escrowly considers intervention, users need to try independently solving their disputes on their own.</li>
                                <li>2. Escrowly will make the decision on unresolved disputes but its discretion depends on reviewing available evidence.</li>
                                <li>3. Users may require arbitration services while the process continues which will result in separate arbitration fee payment. Each party will receive information about fees as well as the arbitration process before arbitration starts.</li>
                                <li>4. Any decision made by Escrowly.com becomes both mandatory and legally enforceable for all parties.</li>
                            </ol>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/escrowly-terms-conditions2.webp" alt="Escrowly Terms & Conditions"/>
                            <h3>8. Limitation of Liability</h3>
                            <ol>
                                <li>1. Users will not hold Escrowly accountable for any financial losses or market movement or transaction delays that occur during servicing.</li>
                                <li>2. Escrowly does not possess the capability to restore lost private keys together with passwords nor crypto assets.</li>
                                <li>3. The company bears no responsibility when users encounter issues flowing from third-party actions or hacking incidents or regulatory changes affecting transaction operations.</li>
                                <li>4. Users accept responsibility to protect Escrowly from all financial obligations and legal expenses which originate from the usage of the platform.</li>
                            </ol>
                            <h3>9. Account Termination</h3>
                            <p>Escrowly maintains authority to terminate accounts because of these reasons.</p>
                            <ol>
                                <li>a. Violation of these Terms & Conditions.</li>
                                <li>b. Not satisfying AML/KYC verification standards.</li>
                                <li>c. Suspicious activity or fraudulent transactions.</li>
                            </ol>
                            <h3>10. Regulatory Compliance & Legal Obligations</h3>
                            <p>Escrowly meets all applicable global regulatory standards, including:</p>
                            <ol>
                                <li>1. FinCEN MSB Registration (Processing) – Ensuring compliance with U.S. financial laws.</li>
                                <li>2. AML/KYC Requirements – Enforcing strict identity verification.</li>
                                <li>3. D-U-N-S® Number: 136876298 – Registered business identification for compliance.</li>
                            </ol>
                            <p>All users must familiarize themselves with their local crypto laws before utilizing Escrowly's services.</p>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/escrowly-terms-conditions3.webp" alt="Escrowly Terms & Conditions"/>
                            <h3>11. Security & Platform Protection</h3>
                            <p>Escrowly has implemented the following security features to provide secure crypto transactions:</p>
                            <ol>
                                <li>a. End-to-end encryption for sensitive data.</li>
                                <li>b. Multi-signature authentication for fund releases.</li>
                                <li>c. Two-Factor Authentication (2FA) for user accounts.</li>
                                <li>d. Cold storage for funds provides users the additional security needed to protect against potential cyberattacks.</li>
                                <li>e. Compatibility tests at regular intervals help detect potential risks to make necessary risk mitigation steps.</li>
                            </ol>
                            <p>Users bear full responsibility to protect their access credentials while Escrowly disclaims ownership of security breaches when users neglect safety measures.</p>
                            <h3>12. Disclaimers & No Warranties</h3>
                            <ol>
                                <li>1. The service from Escrowly exists ‘as is’ without any promise regarding the outcome of transactions.</li>
                                <li>2. We do not offer advice related to investments or legal matters or taxation matters.</li>
                                <li>3. Transacting through cryptocurrency involves significant risk because users might lose funds that exceed their control ability.</li>
                            </ol>
                            <h3>13. Amendments & Modifications</h3>
                            <p>The company holds authority to modify these Terms & Conditions whenever it sees fit. Users receive alerts about substantial modifications through automatic email notifications and platform alert systems. Updates made to Escrowly terms become effective as soon as users continue using the platform.</p>
                            <h3>14. Governing Law & Dispute Resolution</h3>
                            <p>The United States governs these Terms & Conditions under its legal framework. Any conflicting situations will be solved through binding arbitration at the customers' expense according to previously agreed upon terms. Any needed information about arbitration location and necessary procedures will be provided by Escrowly.</p>
                            <h3>15. Contact Information</h3>
                            <p>If you need legal support or want to contact Escrowly you can reach us either through online channels or by sending a letter to the following address:</p>
                            <p>Escrowly LLC</p>
                            <p>701 Tillery Street Unit 12 STE 2962, Austin, TX 78702, USA</p>
                            <p>By using Escrowly, you acknowledge and agree to these Terms & Conditions and all linked policies.</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default TermsAndConditions;