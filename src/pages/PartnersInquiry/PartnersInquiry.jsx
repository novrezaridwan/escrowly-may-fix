import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Input from "../../components/Input/Input";
import DropdownCustom from "../../components/DropdownCustom/DropdownCustom";
import Textarea from "../../components/Textarea/Textarea";
import "./PartnersInquiry.scss";

const dataTitle = [
  {
    id: 1,
    label: "Mr",
  },
  {
    id: 2,
    label: "Ms",
  },
];

const dataPosition = [
  {
    id: 1,
    label: "Manager",
  },
  {
    id: 2,
    label: "Supervisor",
  },
  {
    id: 3,
    label: "Marketing",
  },
];

const dataIndustry = [
  {
    id: 1,
    label: "Agriculture and Mining",
  },
  {
    id: 2,
    label: "Consumer Goods",
  },
  {
    id: 3,
    label: "Construction",
  },
  {
    id: 4,
    label: "Education",
  },
  {
    id: 5,
    label: "Financial Services",
  },
  {
    id: 5,
    label: "Health, Pharmaceuticals, and Biotech",
  },
  {
    id: 6,
    label: "Manufacturing",
  },
  {
    id: 7,
    label: "Media and Entertainment",
  },
  {
    id: 8,
    label: "Non-profit",
  },
  {
    id: 9,
    label: "Other",
  },
  {
    id: 10,
    label: "Software and IT",
  },
  {
    id: 11,
    label: "Transportation and Logistics",
  },
  {
    id: 12,
    label: "Travel and Hospitality",
  },
];

const dataVolume = [
  {
    id: 1,
    label: "Less than $1M",
  },
  {
    id: 2,
    label: "$1M - $10M",
  },
  {
    id: 3,
    label: "$10M - $100M",
  },
  {
    id: 4,
    label: "$100M+",
  },
];

function PartnersInquiry() {
  const [dataCountry, setDataCountry] = useState([]);

  useEffect(() => {
    fetch("https://cdn.simplelocalize.io/public/v1/countries")
      .then((res) => res.json())
      .then((data) => {
        const formattedCountries = data.map((country, index) => ({
          id: index + 1,
          label: country.name,
          img: `https://flagcdn.com/${country.iso_3166_1_alpha2.toLowerCase()}.svg`,
        }));
        setDataCountry(formattedCountries);
      })
      .catch((error) => console.error("Failed to fetch countries:", error));
  }, []);
  return (
    <>
      <Helmet>
        <title>
          New Partner Inquiries | Partner with Escrowly for Secure Crypto
          Transactions
        </title>
        <meta
          name="description"
          content="Thank you for your interest in partnering with Escrowly. Fill out the form to start your partnership and help users with secure crypto escrow transactions."
        />
        <meta
          name="keywords"
          content="Escrowly partner inquiries, become a partner, secure crypto escrow partnership, partner with Escrowly, crypto transaction partners, Escrowly business inquiries"
        />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta
          property="og:title"
          content="Partner with Escrowly.com | Secure Crypto Escrow Partnership Inquiry"
        />
        <meta
          property="og:description"
          content="Submit your inquiry to partner with Escrowly and offer secure crypto escrow services. We’ll get back to you shortly to discuss collaboration opportunities."
        />
        <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
        <meta
          property="og:url"
          content="https://escrowly.com/partners-inquiry"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <main className="main-content">
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", url: "/" },
              { title: "Partners", url: "/our-partners" },
              { title: "Partners Inquiry", url: "/partners-inquiry" },
            ]}
          />

          <section className="section custom-class">
            <div className="tag">Partner's Inquiry Form</div>
            <h2>New Partner Inquiries</h2>
            <p>
              Thank you for your interest in partnering with Escrowly, please
              fill out the form below and we will get back to you.
            </p>
            <div className="card">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 flex-wrap">
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="font-medium text-sm text-primary">
                      Title
                    </label>
                    <DropdownCustom
                      users={dataTitle}
                      placeholder="Select Title"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="font-medium text-sm text-primary">
                      First Name
                    </label>
                    <Input type="text" placeholder="First Name" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <label className="font-medium text-sm text-primary">
                      Surname
                    </label>
                    <Input type="text" placeholder="Surname" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Email Address
                  </label>
                  <Input type="email" placeholder="example@domain.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Phone Number
                  </label>
                  <Input type="number" placeholder="+1 (302) 444-8419" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Company Name
                  </label>
                  <Input type="text" placeholder="Your Company Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Position
                  </label>
                  <DropdownCustom
                    users={dataPosition}
                    placeholder="Select Position"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Company Website
                  </label>
                  <Input type="text" placeholder="e.g www.escrowly.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Country of Operations
                  </label>
                  <DropdownCustom
                    users={dataCountry}
                    placeholder="Select Country"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Area of Operations
                  </label>
                  <DropdownCustom
                    users={dataIndustry}
                    placeholder="Select Industry"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Approximate Annual Volume
                  </label>
                  <DropdownCustom
                    users={dataVolume}
                    placeholder="Select approximate anual volume"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-primary">
                    Your Inquiry
                  </label>
                  <Textarea type="text" placeholder="Your Message" />
                </div>
              </div>
              <button className="btn-submit">Submit</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default PartnersInquiry;
