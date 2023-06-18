import React, { useState } from 'react';
import "../Components/Style.css"

export const Age_Calculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const diff = today - birthDate;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    setAge({ years, months, days, hours, minutes });
  };

  return (
    <div id="age-calculator">
      <h1 id="title">Age Calculator</h1>
      <div>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          id="input"
        />
      </div>
      <div>
        <button onClick={calculateAge} id="button">
          Calculate
        </button>
      </div>
      {age.years >= 0 && (
        <p id="result">
          Your age is {age.years} years, {age.months} months, {age.days} days, {age.hours} hours, and {age.minutes} minutes.
        </p>
      )}
    </div>
  );
};
