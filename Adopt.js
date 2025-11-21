import React from "react";
import "./Adopt.css";

const pets = [
  {
    name: "Buddy",
    breed: "Golden Retriever",
    description: "Friendly and energetic, loves playing fetch and long walks.",
    age: "3 years",
    location: "Main Shelter",
  },
  {
    name: "Luna",
    breed: "Domestic Shorthair",
    description: "Calm and affectionate, perfect for a quiet home environment.",
    age: "2 years",
    location: "Foster Care",
  },
  {
    name: "Max",
    breed: "Labrador Mix",
    description: "Gentle giant, great with kids and other pets.",
    age: "5 years",
    location: "Main Shelter",
  },
];

export default function Adopt() {
  return (
    <div className="adopt-container">
      {/* Heading */}
      <div className="adopt-header">
        <h2>Find Your Perfect Companion</h2>
        <p>
          Browse our wonderful animals looking for their forever homes. Each pet
          has been health-checked, vaccinated, and is ready to bring joy to your
          family.
        </p>
      </div>

      {/* Pet Cards */}
      <div className="pet-grid">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <div className="pet-card-header">
              <span className="heart">♡</span>
            </div>
            <div className="pet-card-body">
              <h3>{pet.name}</h3>
              <p className="breed">{pet.breed}</p>
              <p className="description">{pet.description}</p>
              <div className="pet-meta">
                <span>📅 {pet.age}</span>
                <span>📍 {pet.location}</span>
              </div>
              <button className="meet-btn">Meet {pet.name}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Adoption Process */}
      <div className="adoption-process">
        <h3>Adoption Process</h3>
        <div className="steps">
          {[
            { step: "1", title: "Browse", desc: "Find a pet that matches your lifestyle" },
            { step: "2", title: "Apply", desc: "Fill out our adoption application" },
            { step: "3", title: "Meet", desc: "Visit and spend time with your chosen pet" },
            { step: "4", title: "Adopt", desc: "Take your new family member home" },
          ].map((item, index) => (
            <div key={index} className="step">
              <div className="step-number">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
