import React from 'react';

function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-text">
        <h1>Sunny Modha</h1>
        <h2>B. Eng</h2>
        <p>Montreal, Canada</p>
        <p>My passion for technology led me to earn a degree in Software Engineering. Throughout my studies, I gained extensive experience in various fields, including development, security, project management, and logical problem-solving. I also had the opportunity to work with multiple programming languages, which has enhanced my adaptability and approach to problem-solving. This portfolio showcases how I can effectively contribute to your team!</p>
      </div>
      <div className="profile-image">
        {/* Remplacer "profile.png" par le chemin de l'image */}
        <img src="/images/profile.png" alt="Profile" />
      </div>
    </section>
  );
}

export default Profile;
