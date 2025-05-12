import React from "react";
import { motion } from "motion/react";
import "./Innovate.scss";
import Button from "../../components/Button/Button";

const Innovate = () => {

  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-innovate"
    >
        <div className="container">
            <div className="row xs-direction-column">
                <div className="col">
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0 } }
                        }}
                    >
                        Innovate together
                    </motion.span>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
                        }}
                    >
                        Join to secure your crypto and ensure regulation
                    </motion.h3>  
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }
                        }}
                    >
                        Join us in our journey to become the frontrunner of secure crypto deals - where every deal, whether for digital or traditional assets, is built on integrity, innovation, and peace of mind.
                    </motion.p>
                    <Button
                        text="Get Started Now"
                        url="/get-started"
                        icon="/img/btn-arrow-right-dark.svg"
                        className="btn-secondary"
                        delay={0.6}
                    />
                </div>
                <div className="col">
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, x: 40 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } }
                        }}
                        className="image-map" 
                        src="/images/map.svg" 
                        alt="" 
                    /> 
                </div>
            </div>
        </div>
    </motion.section> 
  );
};

export default Innovate;
