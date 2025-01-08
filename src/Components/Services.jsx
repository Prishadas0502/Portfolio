import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Website Design",
      description:
        "I create visually appealing, user-centric, and fully responsive website designs that enhance user experience and reflect your brand identity.",
    },
    {
      title: "Website Redesign",
      description:
        "Transform outdated websites into modern, high-performing platforms with improved functionality and aesthetics to meet current trends.",
    },
    {
      title: "Website Maintenance",
      description:
        "Ensure your website runs smoothly with regular updates, performance optimization, security checks, and bug fixes.",
    },
    {
      title: "Full-stack MERN Development",
      description:
        "Build powerful, scalable web applications using the MERN stack (MongoDB, Express, React, and Node.js) tailored to your business needs.",
    },
    {
      title: "WordPress Development",
      description:
        "Create custom WordPress websites, plugins, and themes for seamless content management and unique functionalities.",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website’s ranking with comprehensive On-Page and Off-Page SEO strategies to drive organic traffic and improve visibility.",
    },
  ];

  return (
    <section className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
