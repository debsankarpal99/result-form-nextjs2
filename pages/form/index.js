import React, { useState } from 'react';
import { useRouter } from 'next/router';

const FormPage1 = () => {
  const router = useRouter();

  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    userId: '',
    mobileNumber: '',
    selectedCourse: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle course selection
  const handleCourseChange = (e) => {
    setFormData({ ...formData, selectedCourse: e.target.value });
  };

  // Handle "Next" button click
  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation: Check if a course is selected
    if (!formData.selectedCourse) {
      alert('Please select a course.');
      return;
    }

    // Navigate based on selected course
    // You'll need to create these pages (e.g., pages/form/cfa-level-1.js)
    switch (formData.selectedCourse) {
      case 'CFA - Level 1':
        router.push('/form/cfa-level-1');
        break;
      case 'CFA - Level 2':
        router.push('/form/cfa-level-2');
        break;
      case 'CFA - Level 3':
        router.push('/form/cfa-level-3');
        break;
      case 'FRM - Part 1':
        router.push('/form/frm-part-1');
        break;
      case 'FRM - Part 2':
        router.push('/form/frm-part-2');
        break;
      default:
        // Handle unexpected cases or show an error
        alert('Invalid course selected.');
    }
  };

  // Handle "Clear form" button click (optional)
  const handleClear = () => {
    setFormData({
      email: '',
      name: '',
      userId: '',
      mobileNumber: '',
      selectedCourse: '',
    });
  };

  return (
    <div className="container">
      <h1>Results | Aswini Bajaj</h1>
      <p>Kindly fill in the details below</p>

      {/* Info box similar to the image */}
      <div className="info-box">
        <p>debankarp474@gmail.com <a href="#">Switch accounts</a></p>
        <p>Unifi saved</p> {/* This text might need dynamic handling */}
        <p>The name, email address, and photo associated with your Google Account will be recorded when you upload files and submit this form.</p>
      </div>

      <p className="required-text">* Indicates required question</p>

      <form onSubmit={handleNext}>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* User ID Field */}
        <div className="form-group">
          <label htmlFor="userId">User ID *</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Registered Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobileNumber">Registered Mobile Number *</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Course Selection */}
        <div className="form-group">
          <label>Course *</label>
          <div className="course-options">
            <label>
              <input
                type="radio"
                name="course"
                value="CFA - Level 1"
                checked={formData.selectedCourse === 'CFA - Level 1'}
                onChange={handleCourseChange}
                required // Make selecting a course required
              />{' '}
              CFA - Level 1
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="CFA - Level 2"
                checked={formData.selectedCourse === 'CFA - Level 2'}
                onChange={handleCourseChange}
              />{' '}
              CFA - Level 2
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="CFA - Level 3"
                checked={formData.selectedCourse === 'CFA - Level 3'}
                onChange={handleCourseChange}
              />{' '}
              CFA - Level 3
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="FRM - Part 1"
                checked={formData.selectedCourse === 'FRM - Part 1'}
                onChange={handleCourseChange}
              />{' '}
              FRM - Part 1
            </label>
            <label>
              <input
                type="radio"
                name="course"
                value="FRM - Part 2"
                checked={formData.selectedCourse === 'FRM - Part 2'}
                onChange={handleCourseChange}
              />{' '}
              FRM - Part 2
            </label>
          </div>
        </div>

        {/* Navigation Buttons and Page Indicator */}
        <div className="form-navigation">
          <button type="submit">Next</button>
          {/* You might want a more complex progress indicator */}
          <div className="page-indicator">
            Page 1 of 10
            <div className="progress-bar"></div> {/* Add a basic progress bar div */}
          </div>
          <button type="button" onClick={handleClear}>Clear form</button> {/* Use type="button" to prevent form submission */}
        </div>
      </form>

      {/* Footer text */}
      <div className="footer-text">
        <p>Never submit passwords through Google Forms.</p>
        <p>This content is neither created nor endorsed by Google. Terms of Service. Privacy Policy.</p>
        <p>Report Abuse - <a href="#">Terms of Service</a></p>
        <p>Google Forms</p>
      </div>
    </div>
  );
};

export default FormPage1;
