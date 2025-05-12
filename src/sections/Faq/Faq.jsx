import React from "react";
import { motion } from "motion/react";
import "./Faq.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import Button from "../../components/Button/Button";

const Faq = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-faq"
        >
            <div className="container">
                <div className="row xs-direction-column">
                    <div className="col">
                        <SectionHeader
                            label="FAQ'S"
                            title="Frequently Asked Questions"
                        />
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
                            }}
                        >
                                Escrowly.com is a cutting-edge crypto escrow service that equips individuals, enterprises, and business owners with the power to transfer their high-value assets safely in the decentralized space.
                        </motion.p>
                        <Button
                            text="Get Started"
                            url="/get-started"
                            icon="/img/btn-arrow-right.svg"
                            delay={1.6}
                        />
                    </div>
                    <div className="col">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 70 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }
                            }}
                        >
                            <AccordionItem
                                title="How does Escrowly guarantee the safety of my crypto?"
                                text="Escrowly employs smart contract escrow and blockchain escrow services technology to safeguard funds until all terms of an agreement are met."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } }
                            }}
                        >
                            <AccordionItem
                                title="What payment methods does Escrowly support?"
                                text="We accept payments in popular cryptocurrencies and stablecoins, such as USDT, USDC etc. Escrowly also has options for escrow wallets for crypto."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.1 } }
                            }}
                        >
                            <AccordionItem
                                title="Can I connect Escrowly.com to my website to accept crypto?"
                                text="Absolutely yes! Our Escrowly Plug and Play Simple Connect API makes it easy to integrate crypto escrow into e-commerce stores and other business platforms, helping businesses become crypto compliant."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }
                            }}
                        >
                            <AccordionItem
                                title="How quickly are funds released after a deal is done?"
                                text="Instantaneously. Once the terms of the transaction are met, funds are released via Escrowly secure crypto escrow system backed by smart contracts."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 } }
                            }}
                        >
                            <AccordionItem
                                title="Does Escrowly support international transactions?"
                                text="Yes. We promote cross-border crypto escrow and escrow for international business deals with complete international access and compliance."
                                active={false}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Faq;
