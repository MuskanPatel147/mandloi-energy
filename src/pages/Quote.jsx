import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HexSolarIcon, HexSavingsIcon, HexSupportIcon, LockIcon, CheckCircleIcon } from '../components/QuoteIcons';
import { WhatsappFilledIcon } from '../components/Icons';
import homeBg from '../assets/images/home-bg.png';

const BILL_RANGES = [
  'Less than ₹1500',
  '₹1500 - ₹2500',
  '₹2500 - ₹4000',
  '₹4000 - ₹8000',
  'More than ₹8000',
];

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    monthlyBill: '',
    pinCode: '',
    agreeTerms: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.whatsappNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.monthlyBill) {
      newErrors.monthlyBill = 'Please select your average monthly electricity bill';
    }

    const cleanPin = formData.pinCode.replace(/\D/g, '');
    if (!cleanPin || cleanPin.length !== 6) {
      newErrors.pinCode = 'Please enter a valid 6-digit PIN code';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Please agree to the Terms of use and Privacy Policy to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Structure client-side submission flow ready for future backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      whatsappNumber: '',
      monthlyBill: '',
      pinCode: '',
      agreeTerms: true,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="quote-page-wrapper site-wrapper">
      {/* Background Solar Backdrop & Atmospheric Lighting */}
      <div
        className="quote-bg-backdrop"
        style={{ backgroundImage: `url(${homeBg})` }}
        aria-hidden="true"
      />
      <div className="quote-bg-overlay" aria-hidden="true" />
      <div className="quote-ambient-top-left" aria-hidden="true" />
      <div className="quote-ambient-bottom-right" aria-hidden="true" />

      {/* 1. Global Header with Request a Quote active */}
      <Navbar activePage="quote" />

      {/* 2. Main Quote Section */}
      <main className="quote-main-section" id="quote-content">
        <div className="container quote-content-wrapper">
          {/* Top 2-Column Area: Benefits vs Form Card */}
          <div className="quote-hero-grid">
            {/* Left Side Content & Benefits */}
            <div className="quote-left-col">
              <div className="quote-badge-wrapper">
                <span className="quote-badge">REQUEST A QUOTE</span>
                <span className="quote-badge-line" aria-hidden="true" />
              </div>

              <h1 className="quote-heading">
                <span className="quote-heading-line1">TAKE THE FIRST STEP</span>
                <span className="quote-heading-line2">TOWARDS ENERGY</span>
                <span className="quote-heading-line2">INDEPENDENCE</span>
              </h1>

              <div className="quote-divider-bar" aria-hidden="true" />

              <p className="quote-description">
                Get a customized solar solution tailored to your needs. Fill out the form and our experts will connect with you shortly.
              </p>

              {/* 3 Benefit Blocks */}
              <div className="quote-benefits-list">
                {/* Benefit 1 */}
                <div className="quote-benefit-item">
                  <div className="quote-benefit-icon-box" aria-hidden="true">
                    <HexSolarIcon size={24} />
                  </div>
                  <div className="quote-benefit-content">
                    <h3 className="quote-benefit-title">CUSTOMIZED SOLAR SOLUTIONS</h3>
                    <p className="quote-benefit-desc">
                      Tailored systems designed to match your energy needs and budget.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="quote-benefit-item">
                  <div className="quote-benefit-icon-box" aria-hidden="true">
                    <HexSavingsIcon size={24} />
                  </div>
                  <div className="quote-benefit-content">
                    <h3 className="quote-benefit-title">MAXIMUM SAVINGS</h3>
                    <p className="quote-benefit-desc">
                      Reduce electricity bills and enjoy long-term savings with solar energy.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="quote-benefit-item">
                  <div className="quote-benefit-icon-box" aria-hidden="true">
                    <HexSupportIcon size={24} />
                  </div>
                  <div className="quote-benefit-content">
                    <h3 className="quote-benefit-title">EXPERT SUPPORT</h3>
                    <p className="quote-benefit-desc">
                      Our team of experts will guide you at every step, from consultation to installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form Card */}
            <div className="quote-right-col">
              <div className="quote-form-card">
                {isSubmitted ? (
                  <div className="quote-success-box">
                    <div className="quote-success-icon-box" aria-hidden="true">
                      <CheckCircleIcon size={34} />
                    </div>
                    <h2 className="quote-success-title">Consultation Requested!</h2>
                    <p className="quote-success-text">
                      Thank you, <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>. Our solar engineering expert will connect with you on WhatsApp at <strong style={{ color: '#38bdf8' }}>+91 {formData.whatsappNumber}</strong> shortly with your tailored solar plan.
                    </p>
                    <button
                      type="button"
                      className="quote-success-reset-btn"
                      onClick={resetForm}
                    >
                      Request Another Consultation
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="quote-form-header">
                      <h2 className="quote-form-title">
                        Book a <span className="highlight-orange">FREE</span> Solar Consultation
                      </h2>
                      <p className="quote-form-subtitle">
                        And save up to <span className="highlight-cyan">₹78,000</span> with subsidy
                      </p>
                    </div>

                    <form className="quote-form" onSubmit={handleSubmit} noValidate>
                      {/* Field 1: Full Name */}
                      <div className="quote-field-group">
                        <label className="quote-field-label" htmlFor="fullName">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className={`quote-input ${errors.fullName ? 'is-invalid' : ''}`}
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: null }));
                          }}
                        />
                        {errors.fullName && (
                          <span className="quote-error-msg">{errors.fullName}</span>
                        )}
                      </div>

                      {/* Field 2: WhatsApp Number */}
                      <div className="quote-field-group">
                        <label className="quote-field-label" htmlFor="whatsappNumber">
                          Whatsapp Number
                        </label>
                        <div className="quote-input-wrapper">
                          <span className="quote-phone-prefix" aria-hidden="true">+91</span>
                          <input
                            type="tel"
                            id="whatsappNumber"
                            maxLength={10}
                            className={`quote-input has-prefix ${errors.whatsappNumber ? 'is-invalid' : ''}`}
                            placeholder="Enter 10-digit mobile number"
                            value={formData.whatsappNumber}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                              setFormData((prev) => ({ ...prev, whatsappNumber: val }));
                              if (errors.whatsappNumber) setErrors((prev) => ({ ...prev, whatsappNumber: null }));
                            }}
                          />
                        </div>
                        {errors.whatsappNumber && (
                          <span className="quote-error-msg">{errors.whatsappNumber}</span>
                        )}
                      </div>

                      {/* Field 3: Monthly Electricity Bill */}
                      <div className="quote-field-group">
                        <span className="quote-field-label">
                          Monthly Electricity Bill
                        </span>
                        <div className="quote-bill-options-grid" role="radiogroup" aria-label="Monthly Electricity Bill">
                          {BILL_RANGES.map((range) => {
                            const isSelected = formData.monthlyBill === range;
                            return (
                              <label
                                key={range}
                                className={`quote-bill-pill ${isSelected ? 'is-selected' : ''}`}
                              >
                                <input
                                  type="radio"
                                  name="monthlyBill"
                                  value={range}
                                  checked={isSelected}
                                  className="quote-bill-radio-hidden"
                                  onChange={() => {
                                    setFormData((prev) => ({ ...prev, monthlyBill: range }));
                                    if (errors.monthlyBill) setErrors((prev) => ({ ...prev, monthlyBill: null }));
                                  }}
                                />
                                <span className="quote-bill-label-text">{range}</span>
                              </label>
                            );
                          })}
                        </div>
                        {errors.monthlyBill && (
                          <span className="quote-error-msg">{errors.monthlyBill}</span>
                        )}
                      </div>

                      {/* Field 4: PIN Code */}
                      <div className="quote-field-group">
                        <label className="quote-field-label" htmlFor="pinCode">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          id="pinCode"
                          maxLength={6}
                          className={`quote-input ${errors.pinCode ? 'is-invalid' : ''}`}
                          placeholder="Enter 6-digit PIN code"
                          value={formData.pinCode}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setFormData((prev) => ({ ...prev, pinCode: val }));
                            if (errors.pinCode) setErrors((prev) => ({ ...prev, pinCode: null }));
                          }}
                        />
                        {errors.pinCode && (
                          <span className="quote-error-msg">{errors.pinCode}</span>
                        )}
                      </div>

                      {/* Field 5: Terms Checkbox */}
                      <div className="quote-field-group">
                        <label className="quote-checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={formData.agreeTerms}
                            className="quote-checkbox-input"
                            onChange={(e) => {
                              setFormData((prev) => ({ ...prev, agreeTerms: e.target.checked }));
                              if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: null }));
                            }}
                          />
                          <span className="quote-checkbox-label">
                            I agree to SolarSquare{' '}
                            <span className="quote-legal-link">Terms of use</span> and{' '}
                            <span className="quote-legal-link">Privacy Policy</span>.
                          </span>
                        </label>
                        {errors.agreeTerms && (
                          <span className="quote-error-msg">{errors.agreeTerms}</span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="quote-submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Book a FREE Consultation'}
                      </button>

                      {/* Security Message */}
                      <p className="quote-security-msg">
                        <LockIcon size={14} />
                        <span>Your information is 100% secure and will never be shared.</span>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Trust / Statistics Strip (4 Columns) */}
          <div className="quote-trust-strip">
            {/* Item 1 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">250+</span>
              <span className="quote-trust-label">Happy Customers</span>
              <span className="quote-trust-subtext">Across MP</span>
            </div>

            {/* Item 2 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">4.9/5</span>
              <span className="quote-trust-label">Average Rating</span>
              <span className="quote-trust-subtext">On Google</span>
            </div>

            {/* Item 3 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">100%</span>
              <span className="quote-trust-label">Customer Satisfaction</span>
              <span className="quote-trust-subtext">Our Commitment</span>
            </div>

            {/* Item 4 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value cyan-text">Clean Energy</span>
              <span className="quote-trust-label">Better Tomorrow</span>
              <span className="quote-trust-subtext">For All</span>
            </div>
          </div>

          {/* Bottom Statement / Quote Card */}
          <div className="about-quote-card">
            <span className="about-quote-mark left" aria-hidden="true">“</span>
            <p className="about-quote-text">
              When you choose Mandloi Energy, you are choosing a{' '}
              <span className="highlight-cyan">trusted partner</span>, committed to delivering clean energy solutions that create{' '}
              <span className="highlight-orange">lasting value</span> for your home or business.
            </p>
            <span className="about-quote-mark right" aria-hidden="true">”</span>
          </div>
        </div>
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919669555550"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Mandloi Energy on WhatsApp"
      >
        <WhatsappFilledIcon size={30} />
      </a>
    </div>
  );
}
