import React, { useState } from 'react';
import { CheckCircleIcon } from './QuoteIcons';

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
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please enter your WhatsApp mobile number';
    } else if (cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const cleanPhone = formData.phone.replace(/\D/g, '').slice(0, 10);
    const cleanPin = formData.pincode.replace(/\D/g, '').slice(0, 6);
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const payload = {
      _subject: `New Solar Consultation Request - ${formData.solution}`,
      'Full Name': formData.fullName.trim(),
      'WhatsApp Number': `+91 ${cleanPhone}`,
      'Email': formData.email.trim() || 'Not provided',
      'Solar Solution': formData.solution,
      'Monthly Electricity Bill': formData.monthlyBill,
      'PIN Code': cleanPin,
      'Message': formData.message.trim() || 'None',
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
        console.error('Contact form submission failed:', errorData);
        setSubmitError('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Submission network error:', err);
      setSubmitError('Something went wrong. Please check your connection and try again.');
      setIsSubmitting(false);
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
    setSubmitError(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="contact-quote-form-card is-success" role="status" aria-live="polite">
        <div className="quote-success-content animate-fade-in">
          <div className="quote-success-icon-box" aria-hidden="true">
            <CheckCircleIcon size={38} />
          </div>

          <h3 className="quote-success-title">Consultation Requested!</h3>
          <p className="quote-success-msg">
            Thank you, <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>. Your solar inquiry for <strong style={{ color: '#38bdf8' }}>{formData.solution}</strong> has been received. Our team will contact you at <strong style={{ color: '#ffa028' }}>+91 {formData.phone}</strong> shortly.
          </p>

          <button
            type="button"
            className="btn btn-secondary quote-reset-btn"
            onClick={handleReset}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-quote-form-card animate-fade-in">
      <div className="contact-form-header">
        <h2 className="contact-form-title">
          Book a <span className="highlight-orange">FREE</span> Solar Consultation
        </h2>
        <p className="contact-form-subtitle">
          Save up to <span className="highlight-cyan">₹78,000</span> with Government Subsidy
        </p>
      </div>

      <form className="contact-quote-form" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="quote-form-group">
          <label className="quote-label" htmlFor="contactFullName">
            Full Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="contactFullName"
            className={`quote-input ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, fullName: e.target.value }));
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: null }));
              if (submitError) setSubmitError(null);
            }}
          />
          {errors.fullName && <span className="quote-field-error">{errors.fullName}</span>}
        </div>

        {/* WhatsApp Mobile Number */}
        <div className="quote-form-group">
          <label className="quote-label" htmlFor="contactPhone">
            WhatsApp Mobile Number <span className="required-star">*</span>
          </label>
          <div className="quote-phone-input-wrap">
            <span className="quote-phone-prefix" aria-hidden="true">+91</span>
            <input
              type="tel"
              id="contactPhone"
              maxLength={10}
              className={`quote-input has-prefix ${errors.phone ? 'is-invalid' : ''}`}
              placeholder="Enter 10-digit mobile number"
              value={formData.phone}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData((prev) => ({ ...prev, phone: val }));
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
                if (submitError) setSubmitError(null);
              }}
            />
          </div>
          {errors.phone && <span className="quote-field-error">{errors.phone}</span>}
        </div>

        {/* Email Address (Optional) */}
        <div className="quote-form-group">
          <label className="quote-label" htmlFor="contactEmail">
            Email Address <span className="optional-tag">(Optional)</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            className={`quote-input ${errors.email ? 'is-invalid' : ''}`}
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
              if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              if (submitError) setSubmitError(null);
            }}
          />
          {errors.email && <span className="quote-field-error">{errors.email}</span>}
        </div>

        {/* 1. Solar Solution Category Radio Group */}
        <div className="quote-form-group">
          <label className="quote-label">
            Solar Solution <span className="required-star">*</span>
          </label>
          <div className="quote-pill-group" role="radiogroup" aria-label="Solar Solution Category">
            {SOLAR_SOLUTIONS.map((sol) => {
              const isSelected = formData.solution === sol;
              return (
                <label
                  key={sol}
                  className={`quote-solution-pill ${isSelected ? 'is-active' : ''}`}
                >
                  <input
                    type="radio"
                    name="solarSolution"
                    value={sol}
                    checked={isSelected}
                    className="quote-radio-input"
                    onChange={() => {
                      setFormData((prev) => ({ ...prev, solution: sol }));
                      if (errors.solution) setErrors((prev) => ({ ...prev, solution: null }));
                      if (submitError) setSubmitError(null);
                    }}
                  />
                  <span className="quote-radio-text">{sol}</span>
                </label>
              );
            })}
          </div>
          {errors.solution && <span className="quote-field-error">{errors.solution}</span>}
        </div>

        {/* 2. Average Monthly Electricity Bill Radio Group */}
        <div className="quote-form-group">
          <label className="quote-label">
            Average Monthly Electricity Bill
          </label>
          <div className="quote-bill-grid" role="radiogroup" aria-label="Average Monthly Bill">
            {BILL_TIERS.map((tier) => {
              const isSelected = formData.monthlyBill === tier;
              return (
                <label
                  key={tier}
                  className={`quote-bill-tier-pill ${isSelected ? 'is-active' : ''}`}
                >
                  <input
                    type="radio"
                    name="monthlyBillTier"
                    value={tier}
                    checked={isSelected}
                    className="quote-radio-input"
                    onChange={() => {
                      setFormData((prev) => ({ ...prev, monthlyBill: tier }));
                      if (submitError) setSubmitError(null);
                    }}
                  />
                  <span className="quote-radio-text">{tier}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* PIN Code */}
        <div className="quote-form-group">
          <label className="quote-label" htmlFor="contactPincode">
            PIN Code <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="contactPincode"
            maxLength={6}
            className={`quote-input ${errors.pincode ? 'is-invalid' : ''}`}
            placeholder="Enter 6-digit PIN code"
            value={formData.pincode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 6);
              setFormData((prev) => ({ ...prev, pincode: val }));
              if (errors.pincode) setErrors((prev) => ({ ...prev, pincode: null }));
              if (submitError) setSubmitError(null);
            }}
          />
          {errors.pincode && <span className="quote-field-error">{errors.pincode}</span>}
        </div>

        {/* 3. Additional Details / Rooftop Area Textarea */}
        <div className="quote-form-group">
          <label className="quote-label" htmlFor="contactMessage">
            Additional Details / Rooftop Area <span className="optional-tag">(Optional)</span>
          </label>
          <textarea
            id="contactMessage"
            rows={3}
            className="quote-textarea"
            placeholder="Tell us about your rooftop area or specific energy requirement..."
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          />
        </div>

        {/* 4. Consent Checkbox */}
        <div className="quote-form-group">
          <label className="quote-consent-wrap">
            <input
              type="checkbox"
              checked={formData.consent}
              className="quote-checkbox"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, consent: e.target.checked }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: null }));
                if (submitError) setSubmitError(null);
              }}
            />
            <span className="quote-consent-text">
              I agree to Mandloi Energy{' '}
              <a href="#about" className="quote-link">Terms</a> and{' '}
              <a href="#about" className="quote-link">Privacy Policy</a> and allow solar experts to contact me.
            </span>
          </label>
          {errors.consent && <span className="quote-field-error">{errors.consent}</span>}
        </div>

        {/* Submit Error Banner if failed */}
        {submitError && (
          <div className="quote-submit-error-banner" role="alert">
            <span>{submitError}</span>
          </div>
        )}

        {/* Submit Action Button */}
        <button
          type="submit"
          className="btn btn-primary quote-submit-action-btn"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Submitting...' : 'Request Solar Consultation'}</span>
          <span className="quote-btn-arrow" aria-hidden="true">→</span>
        </button>

        {/* Form Footer Privacy Note */}
        <p className="quote-privacy-note">
          🔒 100% Privacy Protected. No Spam. Zero Obligation.
        </p>
      </form>
    </div>
  );
}
