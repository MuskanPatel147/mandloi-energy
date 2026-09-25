import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HexSolarIcon, HexSavingsIcon, HexSupportIcon, LockIcon, CheckCircleIcon } from '../components/QuoteIcons';
import { WhatsappFilledIcon } from '../components/Icons';
import homeBg from '../assets/images/home-bg.webp';

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
  const [submitError, setSubmitError] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const cleanPhone = formData.whatsappNumber.replace(/\D/g, '').slice(0, 10);
    const cleanPin = formData.pinCode.replace(/\D/g, '').slice(0, 6);
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const payload = {
      _subject: 'New Solar Consultation Request',
      'Full Name': formData.fullName.trim(),
      'WhatsApp Number': `+91 ${cleanPhone}`,
      'Monthly Electricity Bill': formData.monthlyBill,
      'PIN Code': cleanPin,
      'Submitted At': submittedAt,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mandloienergy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Form submission failed:', errorData);
        setSubmitError('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Submission network error:', err);
      setSubmitError('Something went wrong. Please check your connection and try again.');
      setIsSubmitting(false);
    }
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
    setSubmitError(null);
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
                            if (submitError) setSubmitError(null);
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
                              if (submitError) setSubmitError(null);
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
                                    if (submitError) setSubmitError(null);
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
                            if (submitError) setSubmitError(null);
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
                              if (submitError) setSubmitError(null);
                            }}
                          />
                          <span className="quote-checkbox-label">
                            I agree to Mandloi Energy{' '}
                            <span className="quote-legal-link">Terms of use</span> and{' '}
                            <span className="quote-legal-link">Privacy Policy</span>.
                          </span>
                        </label>
                        {errors.agreeTerms && (
                          <span className="quote-error-msg">{errors.agreeTerms}</span>
                        )}
                      </div>

                      {/* Submit Error Banner if failed */}
                      {submitError && (
                        <div className="quote-submit-error-banner" role="alert">
                          <span>{submitError}</span>
                        </div>
                      )}

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
            </div>

            {/* Item 2 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">25+</span>
              <span className="quote-trust-label">Years Clean Energy</span>
            </div>

            {/* Item 3 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">₹78,000</span>
              <span className="quote-trust-label">Max Govt. Subsidy</span>
            </div>

            {/* Item 4 */}
            <div className="quote-trust-item">
              <span className="quote-trust-value">0% EMI</span>
              <span className="quote-trust-label">From ₹1,466/Month</span>
            </div>
          </div>
        </div>
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action with Soft Hover Transition */}
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
