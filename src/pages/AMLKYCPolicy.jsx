import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const AMLKYCPolicy = () => (
    <>
        <Helmet>
            <title>AML & KYC Policy – Escrowly Crypto Escrow Compliance</title>
            <meta name="description" content="Read Escrowly's AML and KYC Policy. Learn how we prevent fraud, money laundering, and financial crimes with secure identity verification and compliance protocols." />
            <meta name="keywords" content="AML policy, KYC policy, Escrowly compliance, crypto AML regulations, KYC verification crypto, secure crypto escrow, anti-money laundering, crypto identity check, beneficial ownership, PEPs, FATF high-risk countries, crypto compliance policy, blockchain due diligence" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="AML & KYC Policy – Escrowly Crypto Escrow Compliance" />
            <meta property="og:description" content="Escrowly's AML/KYC Policy outlines how we verify identities and monitor transactions to fight fraud and financial crimes. Stay compliant and secure with crypto escrow." />
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
                        { title: "AML & KYC Policy", url: "/aml-kyc-policy" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>AML & KYC Policy</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Effective Date: [09 October 2024]</li>
                            </ul>
                            <span className="post-date">Last Updated: 22 Feb 2025</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />8 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <h3>1. Introduction</h3>
                            <p>Welcome to Escrowly.com. We, at Escrowly, are a group of people who have been working on online transactions, who believe in secure crypto transactions and to do so we have adapted a complete AML and KYC policy to stop fraud, laundering, and financial crimes This policy is applicable to all our customers and users of our Escrowly platform.</p>
                            <h3>2. Why is compliance with AML and KYC important?</h3>
                            <p>The purpose of AML/KYC legislation is to forbid unlawful activities such as money laundering, identity theft, fraud, terrorist financing, and other financial crimes. By verifying client identities and keeping an eye on transactions, we contribute to the creation of a safe and secure ecosystem for all end users.</p>
                            <blockquote>This AML/KYC Policy reflects our commitment to our customers by ensuring compliance with the relevant regulation and maintaining the integrity of our platform</blockquote>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/kyc-data.webp" alt="Escrowly KYC"/>
                            <h3>3. Identity Checking (KYC Conditions)</h3>
                            <p>Before using our crypto escrow services, every Escrowly client base that exceeds the threshold amount must finish our KYC verification process. This comprises:</p>
                            <h4>Individual Users</h4>
                            <ol>
                                <li>1. Date of Birth</li>
                                <li>2. Government-Issued Identification (passport, driver's license, or national ID)</li>
                                <li>3. Proof of Address (utility bill, bank statement, or official document, no more than three months old)</li>
                                <li>4. Selfie Verification (a live photo or video with the submitted ID)</li>
                                <li>5. Full Name (matching government-issued ID)</li>
                            </ol>
                            <h4>Businesses or companies</h4>
                            <ol>
                                <li>1. List of Beneficial Owners & Directors (together with their KYC information)</li>
                                <li>2. Legal Entity Type (LLC, Corporation, etc)</li>
                                <li>3. Business Address Verification</li>
                                <li>4. Articles of Incorporation or Business License</li>
                            </ol>
                            <h3>4. EDD, or Enhanced Due Diligence</h3>
                            <p>Some clients could need Enhanced Due Diligence (EDD) because they are deemed high-risk. This pertains to:</p>
                            <ol>
                                <li>1. People who are politically exposed (PEPs) and users from high-risk countries (as determined by FATF)</li>
                                <li>2. Deals worth more than $10,000</li>
                                <li>3. Clients who made complex or unusual transactions</li>
                            </ol>
                            <p>Additional verification procedures, such a video call, the submission of more documents, or continuing transaction evaluations, might be included in EDD.</p>
                            <h3>5. Measures to Promote Anti-Money Laundering (AML)</h3>
                            <p>In addition to actively monitoring transactions to identify and stop questionable activity, Escrowly also ensures that the platform is being utilized in compliance with the company's terms and conditions.</p>
                            <h4>Transaction Tracking</h4>
                            <ol>
                                <li>1. Every transaction is examined for odd trends.</li>
                                <li>2. Transactions that seem suspicious and are large or quick will be marked for evaluation.</li>
                                <li>3. There are both automated and manual screening systems in place to identify transactions that pose a high risk.</li>
                            </ol>
                            <h4>Reporting Questionable Behavior</h4>
                            <p>Escrowly is required by law to notify the appropriate authorities of any suspicious activity. This comprises:</p>
                            <ul>
                                <li>When a transaction seems phony or includes unlawful activity, a Suspicious Activity Report (SAR) is filed.</li>
                                <li>Currency Transaction Reports (CTRs): These are submitted for transactions that total more than US $10,000.</li>
                            </ul>
                            <p>Users might be requested for more details about their purchases. Escrowly accounts that don't comply risk being suspended, terminated, or placed on hold</p>
                            <h4>Escrowly Maintains Data Records</h4>
                            <ul>
                                <li>All transaction data, client identification information, and compliance documentation are kept on file for a minimum of five years.</li>
                                <li>Regulatory bodies may receive access to these records upon request.</li>
                            </ul>
                            <h3>6. Activities That Are Restricted</h3>
                            <p>Escrowly.com forbids the following uses of our escrow services:</p>
                            <ol>
                                <li>Illegal Activities: Any transaction involving funds from criminal activity.</li>
                                <li>Payments connected to darknet markets, also known as "dark web transactions."</li>
                                <li>Token sales or unregistered initial coin offerings (ICOs): uncontrolled cryptocurrency investments.</li>
                                <li>Financing terrorist organizations or operations, otherwise known as terrorism financing.</li>
                            </ol>
                            <p>Any attempt to break these guidelines will result in you being immediately blocked from your account and reported to the appropriate authorities.</p>
                            <h3>7. Obligations of Customers</h3>
                            <p>As a customer of Escrowly.com, you must:</p>
                            <ol>
                                <li>Provide Accurate Information: Send in legitimate and genuine documentation.</li>
                                <li>Update Your Information: Notify us of any modifications to your business or personal data.</li>
                                <li>Adhere to AML Laws: Make use of Escrowly.com in compliance with all relevant rules.</li>
                                <li>Report Suspicious Activity: If you believe any transactions are unlawful or fraudulent, let us know.</li>
                            </ol>
                            <h3>8. Compliance & Policy Updates</h3>
                                <p>Escrowly is constant to revise and update this policy in response to new legal and regulation. Any substantial changes made to our AML & KYC policies will be communicated to our customers. If you have any questions or concerns about compliance, please contact us.</p>
                                <p>Your compliance with our AML/KYC policies and procedures is required by your use of Escrowly. Account restrictions or legal action may apply for continued violations.</p>
                                <p>Thank you for helping us create a safe and secure crypto escrow service</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default AMLKYCPolicy;