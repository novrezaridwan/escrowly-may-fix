import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const LegalSecurityPolicy = () => (
    <>
        <Helmet>
            <title>Legal Security Policy – Crypto Escrow Compliance | Escrowly</title>
            <meta name="description" content="Learn how Escrowly protects your crypto transactions through strong encryption, compliance with global regulations, and advanced legal security policies." />
            <meta name="keywords" content="crypto escrow legal policy, crypto compliance, Escrowly security, AML KYC crypto, GDPR crypto service, FATF compliant escrow, FinCEN crypto regulations, blockchain legal policy, crypto data protection, secure crypto transactions" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly Legal Security Policy – Trustworthy Crypto Escrow" />
            <meta property="og:description" content="Escrowly’s Legal Security Policy ensures your crypto transactions meet the highest legal, privacy, and cybersecurity standards globally." />
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
                        { title: "Legal Security Policy", url: "/legal-security-policy" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>Legal Security Policy</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Effective Date: [15 Sept 2024]</li>
                            </ul>
                            <span className="post-date">Last Updated: 19 April 2025</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />5 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <h3>1. Introduction</h3>
                            <p>Escrowly.com ("Escrowly," "we," "us," or "our") is a crypto only escrow services platform that prioritizes the security and legal integrity of transactions. This Legal Security Policy outlines our measures to protect users, data, and transactions from fraud, cyber threats, and unauthorized access.</p>
                            <p>To guarantee that Escrowly continues to be a secure and law-abiding escrow service for cryptocurrency transactions, we employ cutting-edge security measures and abide by international cybersecurity and legal compliance standards.</p>
                            <blockquote>Escrowly is committed to maintaining a fully secure, compliant, and legally protected online platform for cryptocurrency escrow transactions. Our continuous security enhancements ensure a safe experience for all users.</blockquote>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/legal-security-policy.webp" alt="Escrowly Legal Security Policy"/>
                            <h3>2. Security & Compliance Framework</h3>
                            <p>Escrowly conforms to stringent security laws and industry norms, such as:</p>
                            <ol>
                                <li>a. ISO/IEC 27001 (Information Security Management System): Application of international security best practices, among others.</li>
                                <li>b. General Data Protection Regulation (GDPR): Protecting EU users' data security and privacy.</li>
                                <li>c. California Consumer Privacy Act (CCPA): Ensuring user rights and transparency in data collecting.</li>
                                <li>d. The Financial Crimes Enforcement Network (FinCEN) AML/KYC Regulations: Enforcing transaction monitoring and identity verification.</li>
                                <li>e. Financial Action Task Force (FATF) Guidelines: Preventing illegal financial activity associated with transactions involving cryptocurrencies.</li>
                            </ol>
                            <h3>3. Encryption & Data Protection</h3>
                            <p>Escrowly implements robust encryption procedures and safeguards data, such as:</p>
                            <ol>
                                <li>a. End-to-end encryption: AES-256 encryption is used to protect all sensitive data.</li>
                                <li>b. MFA: All user logins and transaction approvals require multi-factor authentication.</li>
                                <li>c. Cold Wallet Storage: For further security, the majority of money are kept offline.</li>
                                <li>d. Frequent Security Audits: To guarantee platform security, third-party audits and penetration tests are conducted.</li>
                                <li>e. DDoS and Firewall Protection: State-of-the-art cybersecurity instruments to stop illegal access and hacking.</li>
                            </ol>
                            <h3>4. Security Measures for Users</h3>
                            <p>In order to safeguard their accounts and transactions, we provide consumers the following security features:</p>
                            <ol>
                                <li>a. Secure Login Processes: 2FA and the need for a strong password.</li>
                                <li>b. Real-time monitoring: identifying attempts by unauthorized users to access accounts.</li>
                                <li>c. Account Recovery Protocols: Safe practices for restoring lost access.</li>
                                <li>d. Phishing and Fraud Protection: Proactive fraud detection and educational resources.</li>
                            </ol>
                            <h3>5. Liability Protection & Legal Compliance</h3>
                            <p>Escrowly follows stringent legal requirements to guarantee adherence and reduce liability risks:</p>
                            <ol>
                                <li>a. Terms of Service & User Agreement: Describes users' obligations and rights.</li>
                                <li>b. Dispute Resolution Mechanism: An open procedure for settling disagreements over transactions.</li>
                                <li>c. Legal Protection Against Fraud: Assisting law enforcement when fraudulent activity occurs.</li>
                                <li>d. Regulatory Compliance: Respect for all relevant data security and financial regulations.</li>
                            </ol>
                            <h3>6. Risk Management & Incident Response</h3>
                            <p>When a security breach or suspicious behavior occurs, Escrowly has an extensive incident response process in place.</p>
                            <ol>
                                <li>a. Prompt Investigation: Every security event is examined and evaluated.</li>
                                <li>b. User Notification: Users who are impacted are swiftly notified.</li>
                                <li>c. Regulatory Reporting: If necessary, incidents are reported to the appropriate authorities.</li>
                                <li>d. Mitigation Strategies: System updates and security patches to stop future intrusions.</li>
                            </ol>
                            <h3>7. Contact & Security Officer Information</h3>
                            <p>For any security-related inquiries, You can contact us via online form or via regular US mail at:</p>
                            <p>Escrowly LLC</p>
                            <p>701 Tillery Street Unit 12 STE 2962, Austin, TX 78702, USA</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default LegalSecurityPolicy;