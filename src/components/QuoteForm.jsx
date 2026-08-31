import React, { useState } from 'react';
import { CheckCircleIcon } from './QuoteIcons';
import { WhatsappFilledIcon } from './Icons';

const SOLAR_SOLUTIONS = [
  'Residential Solar',
  'Commercial Solar',
  'Industrial Solar',
  'Agricultural Solar',
];

const BILL_TIERS = [
  'Less than ₹1500',
  '₹1500 – ₹2500',
  '₹2500 – ₹4000',
  '₹4000 – ₹8000',
  'More than ₹8000',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    solution: 'Residential Solar',
    monthlyBill: '₹2500 – ₹4000',
    pincode: '',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please enter your WhatsApp mobile number';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }

    if (!formData.solution) {
      errs.solution = 'Please select a solar solution';
    }

    const cleanPin = formData.pincode.replace(/\D/g, '');
    if (!cleanPin) {
      errs.pincode = 'Please enter your 6-digit PIN code';
    } else if (cleanPin.length !== 6) {
      errs.pincode = 'PIN code must be exactly 6 digits';
    }

    if (!formData.consent) {
      errs.consent = 'Please agree to be contacted regarding your solar requirement';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      solution: 'Residential Solar',
      monthlyBill: '₹2500 – ₹4000',
      pincode: '',
      message: '',
      consent: true,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="contact-quote-form-card is-success" role="status" aria-live="polite">
        <div className="quote-success-content animate-fade-in">
          <div className="quote-success-icon-box" aria-hidden="true">
            <CheckCircleIcon size={52} color="#ffa028" />
          </div>
          <h3 className="quote-success-title">Thank You, {formData.fullName}!</h3>
          <p className="quote-success-subtitle">
            Your request for <strong className="highlight-cyan">{formData.solution}</strong> has been received. Our team will review your requirement and connect with you shortly.
          </p>

          <div className="quote-success-summary-box">
            <div className="success-summary-row">
              <span className="summary-label">WhatsApp:</span>
              <span className="summary-val">+91 {formData.phone}</span>
            </div>
            <div className="success-summary-row">
              <span className="summary-label">Solution:</span>
              <span className="summary-val">{formData.solution}</span>
            </div>
            <div className="success-summary-row">
              <span className="summary-label">Monthly Bill:</span>
              <span className="summary-val">{formData.monthlyBill}</span>
            </div>
            <div className="success-summary-row">
              <span className="summary-label">PIN Code:</span>
              <span className="summary-val">{formData.pincode}</span>
            </div>
          </div>

          <div className="quote-success-actions">
            <a
              href="https://wa.me/919669555550"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary quote-whatsapp-btn"
            >
              <WhatsappFilledIcon size={18} />
              <span>Connect On WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary quote-reset-btn"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-quote-form-card" aria-label="Request a Solar Quote Form">
      {/* Form Header */}
      <div className="quote-form-header">
        <h2 className="quote-form-title">REQUEST A QUOTE</h2>
        <p className="quote-form-subtitle">Tell us about your solar requirement.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="quote-form-body">
        {/* 1. Full Name & WhatsApp Number Grid */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor="contact-fullName" className="form-label">
              Full Name <span className="req-star" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="contact-fullName"
              name="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: null });
              }}
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <span id="fullName-error" className="form-error-msg" role="alert">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">
              WhatsApp Number <span className="req-star" aria-hidden="true">*</span>
            </label>
            <div className="phone-input-wrap">
              <span className="phone-prefix" aria-hidden="true">+91</span>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="10-digit number"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, phone: val });
                  if (errors.phone) setErrors({ ...errors, phone: null });
                }}
                className={`form-input phone-input ${errors.phone ? 'has-error' : ''}`}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
            </div>
            {errors.phone && (
              <span id="phone-error" className="form-error-msg" role="alert">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* 2. Email Address & PIN Code */}
        <div className="form-row-grid">
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Email Address <span className="optional-tag">(Optional)</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              className={`form-input ${errors.email ? 'has-error' : ''}`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="form-error-msg" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contact-pincode" className="form-label">
              PIN Code <span className="req-star" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="contact-pincode"
              name="pincode"
              placeholder="e.g. 452001"
              maxLength={6}
              value={formData.pincode}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '');
                setFormData({ ...formData, pincode: val });
                if (errors.pincode) setErrors({ ...errors, pincode: null });
              }}
              className={`form-input ${errors.pincode ? 'has-error' : ''}`}
              aria-invalid={errors.pincode ? 'true' : 'false'}
              aria-describedby={errors.pincode ? 'pincode-error' : undefined}
            />
            {errors.pincode && (
              <span id="pincode-error" className="form-error-msg" role="alert">
                {errors.pincode}
              </span>
            )}
          </div>
        </div>

        {/* 3. Solar Solution Selector */}
        <div className="form-group">
          <label className="form-label">
            Solar Solution <span className="req-star" aria-hidden="true">*</span>
          </label>
          <div className="solutions-pill-grid" role="radiogroup" aria-label="Select Solar Solution">
            {SOLAR_SOLUTIONS.map((sol) => {
              const isSelected = formData.solution === sol;
              return (
                <button
                  type="button"
                  key={sol}
                  role="radio"
                  aria-checked={isSelected}
                  className={`solution-select-pill ${isSelected ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, solution: sol })}
                >
                  <span className="pill-radio-dot" aria-hidden="true" />
                  <span>{sol}</span>
                </button>
              );
            })}
          </div>
          {errors.solution && (
            <span className="form-error-msg" role="alert">
              {errors.solution}
            </span>
          )}
        </div>

        {/* 4. Monthly Electricity Bill Selector */}
        <div className="form-group">
          <label className="form-label">Monthly Electricity Bill</label>
          <div className="bill-tier-grid" role="radiogroup" aria-label="Select Monthly Electricity Bill Range">
            {BILL_TIERS.map((tier) => {
              const isSelected = formData.monthlyBill === tier;
              return (
                <button
                  type="button"
                  key={tier}
                  role="radio"
                  aria-checked={isSelected}
                  className={`bill-tier-pill ${isSelected ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, monthlyBill: tier })}
                >
                  <span>{tier}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Requirement / Message */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Requirement / Project Notes <span className="optional-tag">(Optional)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            placeholder="Tell us about your rooftop area, power requirements, or specific questions..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="form-input form-textarea"
          />
        </div>

        {/* 6. Consent Checkbox */}
        <div className="form-group consent-group">
          <label className="checkbox-label" htmlFor="contact-consent">
            <input
              type="checkbox"
              id="contact-consent"
              name="consent"
              checked={formData.consent}
              onChange={(e) => {
                setFormData({ ...formData, consent: e.target.checked });
                if (errors.consent) setErrors({ ...errors, consent: null });
              }}
              className="checkbox-input"
            />
            <span className="checkbox-custom" aria-hidden="true" />
            <span className="checkbox-text">
              I agree to be contacted regarding my solar requirement.
            </span>
          </label>
          {errors.consent && (
            <span className="form-error-msg" role="alert">
              {errors.consent}
            </span>
          )}
        </div>

        {/* 7. Submit Button */}
        <button
          type="submit"
          className="btn btn-primary form-submit-btn"
          aria-label="Submit Solar Quote Request"
        >
          <span>REQUEST A QUOTE →</span>
        </button>
      </form>
    </div>
  );
}
