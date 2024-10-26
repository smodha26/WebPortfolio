import React from 'react';
import awsCertificate from '../images/aws-certificate.png';

const Certificate = () => {
  return (
    <section id="certificate" className="section-container">
      <h2 className="section-title">Certificate</h2>
      <div className="certificate-content">
        <div className="certificate-image-container">
          <img src={awsCertificate} alt="AWS Cloud Practitioner Certificate" className="certificate-image" />
          {/* Ajouter le lien vers Credly ici */}
        </div>
        <div className="certificate-info">
          <h3>AWS Certified Cloud Practitioner</h3>
          <p>
            Certification earned showcasing foundational knowledge of cloud services and AWS cloud platform concepts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
