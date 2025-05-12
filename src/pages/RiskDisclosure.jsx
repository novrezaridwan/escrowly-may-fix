import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const RiskDisclosure = () => (
    <>
        <Helmet>
            <title>Crypto Risk Disclosure | Escrowly.com</title>
            <meta name="description" content="Understand the risks of using cryptocurrency escrow services. Escrowly outlines market, security, legal, and platform risks users should be aware of." />
            <meta name="keywords" content="crypto risk disclosure, cryptocurrency escrow risk, Escrowly disclaimer, market risk crypto, security risk crypto, compliance risk crypto, counterparty risk, platform downtime risk, smart contract risk, blockchain transaction risk" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly Risk Disclosure – Stay Informed, Stay Secure" />
            <meta property="og:description" content="Review the potential risks associated with crypto transactions, platform use, and market volatility when using Escrowly’s secure escrow services." />
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
                        { title: "Risk Disclosure", url: "/risk-disclosure" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>Risk Disclosure</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Effective Date: [28 June 2024]</li>
                            </ul>
                            <span className="post-date">Last Updated: 04 Feb 2025</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />7 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <h3>1. Introduction</h3>
                            <p>Escrowly.com ("Escrowly," "we," "us," or "our") is a secure crypto only escrow services platform designed to facilitate secure cryptocurrency transactions.  The nature of cryptocurrency trading involves various potential risks for all participants. The risk disclosure statement introduced by Escrowly describes all potential risks affecting users who employ its service systems.</p>
                            <p>Your use of Escrowly implies full understanding of procedural risks and you explicitly release Escrowly from financial and security responsibility for any losses or breaches or damages that arise through platform usage. Users transacting through Escrowly accept there is no assurance or guarantee of successful outcomes from any platform transaction because the platform offers no warranties.</p>
                            <h3>2. Cryptocurrency Market Risks</h3>
                            <p>Cryptocurrency prices exhibit extreme volatility which leads to large price fluctuations during brief time periods. Escrowly bears no responsibility for financial losses which occur because of price variations.</p>
                            <p>The digital asset market remains susceptible to manipulation by fraudsters as well as external forces and market manipulation events. Users bear all risks when conducting transactions.</p>
                            <p>Certain cryptocurrencies have low liquidity levels which leads to difficulties in executing transactions at their expected prices. Digital asset availability and liquidity depends solely on marketplace dynamics since Escrowly takes no responsibility for asset market rates.</p>
                            <h3>3. Security Risks</h3>
                            <p>Even though Escrowly uses advanced security measures, it does not eliminate the possibility of hacking attempts or phishing attacks and other cyber threats. Escrowly bears no responsibility for any cases of unauthorized access as well as data breaches and fund theft.</p>
                            <p>All users need to follow security rules for their account by setting strong passwords alongside enabling two-factor authentication (2FA) while maintaining appropriate control of their account credentials. Escrowly neither undertakes recovery of lost credentials nor provides refunds because of user carelessness.</p>
                            <p>The management of private keys remains the responsibility of users because Escrowly cannot retrieve lost funds or replace lost access to wallets.</p>
                            <h3>4. Regulatory & Compliance Risks</h3>
                            <p>Changes in laws governing cryptocurrencies can influence Escrowly’s operating capability as well as affect current user access eligibility. Customers carry the duty to fulfill their obligations regarding local laws.</p>
                            <p>The usage of Escrowly might be restricted through local cryptocurrency regulations in certain regions which can block your access. Users need to check whether Escrowly services are legal in their specific jurisdiction.</p>
                            <p>The responsibility for tax compliance regarding cryptocurrency transactions falls only on users according to their individual local tax laws. The platform avoids giving guidance concerning tax regulations and financial or legal matters to users.</p>
                            <h3>5. Counterparty Risks</h3>
                            <p>Even though Escrowly performs verification on its platform, malicious parties might try to carry out scams or fraudulent transactions through the system. Users need to thoroughly investigate potential transactions prior to execution. Escrowly takes no responsibility for fraudulent conduct that occurs between its users.</p>
                            <p>The resolution of disputes and chargebacks through Escrowly exists only within their internal policy framework because cryptocurrency transactions cannot be reversed. Escrowly refuses to take responsibility for any money losses that result from customer disagreements.</p>
                            <blockquote>The usage of Escrowly might be restricted through local cryptocurrency regulations in certain regions which can block your access. Users need to check whether Escrowly services are legal in their specific jurisdiction.</blockquote>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/risk-disclosure-escrowly.webp" alt="Escrowly Risk Disclosure"/>
                            <h3>6. Platform Operational Risks</h3>
                            <p>System maintenance or technical failures or unexpected outages at Escrowly may cause service downtime which delays transactions. Escrowly takes no responsibility for financial losses that occur because the service becomes unavailable.</p>
                            <p>Smart contracts deployed for transactions may create risks due to their potential programming errors which affect the entire process. Escrowly takes no responsibility for securing the code of third-party sources.</p>
                            <p>Escrowly depends on third-party services (including blockchain networks) which could potentially fail through system breaches. Escrowly bears no responsibility for losses that occur because of problems with third-party systems.</p>
                            <h3>7. Risk Mitigation Strategies</h3>
                            <p>To minimize risks, Escrowly recommends:</p>
                            <ol>
                                <li>1. Customers should implement both 2FA authentication systems and hardware wallets as part of strong security practices.</li>
                                <li>2. Potential counterparties should undergo verification before initiating any transaction with Escrowly.</li>
                                <li>3. Users must monitor regulatory changes which affect their jurisdiction.</li>
                                <li>4. Using alternative cryptocurrencies in your portfolio will help protect your assets from potential loss</li>
                            </ol>
                            <h3>8. No Guarantee, Warranty, or Liability</h3>
                            <p>Escrowly does not guarantee profit, loss prevention, or the elimination of all risks. Users assume full responsibility for their investment and trading decisions.</p>
                            <p>Escrowly expressly disclaims all liability for:</p>
                            <ol>
                                <li>1. Financial losses resulting from market fluctuations, hacking incidents, fraud, regulatory actions, or third-party service failures.</li>
                                <li>2. Any errors, interruptions, or delays in services, whether due to system failures, maintenance, or unforeseen circumstances.</li>
                                <li>3. Legal, tax, or financial consequences arising from the use of its platform.</li>
                                <li>4. Any indirect, incidental, or consequential damages, even if Escrowly was advised of the possibility of such damages.</li>
                            </ol>
                            <h3>9. Indemnification</h3>
                            <p>The use of Escrowly platforms requires you to defend and keep Escrowly and its affiliates along with their employees and agents free from all lawsuits and resultant expenses (including legal costs) concerning the following conditions:</p>
                            <ol>
                                <li>1. Your use of the platform.</li>
                                <li>2. Any violation of this Risk Disclosure Statement or Escrowly’s Terms of Service.</li>
                            </ol>
                            <p>Users indemnify all potential claims and fees related to their platform interaction including disputes that arise from interactions with other users.</p>
                            <h3>10. Contact & Support</h3>
                            <p>For any inquiries regarding risk disclosures, please contact online or at:</p>
                            <p>To: Escrowly.com Support Team</p>
                            <p>Address: 701 Tillery Street Unit 12 STE 2962, Austin, TX 78702, USA</p>
                            <p>By using Escrowly, you acknowledge and accept all risks and agree that Escrowly bears no liability for any losses, damages, or legal consequences arising from your use of the platform.</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default RiskDisclosure;