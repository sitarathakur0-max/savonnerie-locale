import React, { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle2, AlertCircle, Clock, Shield } from 'lucide-react';
import { ContactFormState, ContactFormErrors } from '../types';
import { BUSINESS_DATA } from '../data/business';
import { RatingBadge } from '../components/RatingBadge';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select or enter a subject for your enquiry.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message detailing your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Client-side confirmation as no external backend server is configured for mail dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(
        `Thank you, ${formData.name}. Your enquiry regarding "${formData.subject}" has been formatted for our workshop records. For direct assistance or urgent matters, you may also contact us by telephone at ${BUSINESS_DATA.phone.display}.`
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C735B] font-semibold block">
            Direct Atelier Correspondence
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] font-bold tracking-tight">
            Contact Savonnerie Locale
          </h1>
          <p className="text-base sm:text-lg text-[#5F5045] leading-relaxed max-w-2xl mx-auto">
            We welcome your questions regarding our handmade soaps, scented creations, and everyday personal-care items produced in Marseille.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Prominently Displayed Business Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#E2D8CD] shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8A7156] font-semibold block">
                  Artisan Soap Maker
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#2A2420] mt-1">
                  {BUSINESS_DATA.name}
                </h2>
                <p className="text-xs text-[#736255] mt-1">
                  Handmade Soap & Body Care · 13006 Marseille
                </p>
              </div>

              <div className="pt-2">
                <RatingBadge size="sm" />
              </div>

              <div className="pt-4 border-t border-[#EAE0D4] space-y-5 text-sm text-[#4E4137]">
                {/* Exact Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE8DE] text-[#785E44] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2420] text-base">Workshop Location</h3>
                    <address className="not-italic text-[#594B41] leading-relaxed mt-0.5">
                      {BUSINESS_DATA.address.street}<br />
                      {BUSINESS_DATA.address.postalCode} {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.country}
                    </address>
                  </div>
                </div>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE8DE] text-[#785E44] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2420] text-base">Direct Telephone</h3>
                    <p className="text-xs text-[#7A6B5E] mt-0.5 mb-1">Click to call our workshop directly:</p>
                    <a
                      id="contact-main-phone-link"
                      href={`tel:${BUSINESS_DATA.phone.tel}`}
                      className="text-lg font-bold text-[#2A2420] hover:text-[#7A5A3D] hover:underline underline-offset-4 transition-colors"
                      aria-label={`Call Savonnerie Locale at ${BUSINESS_DATA.phone.display}`}
                    >
                      {BUSINESS_DATA.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Note on Direct Inquiries */}
              <div className="p-4 rounded-xl bg-[#F4EEE7] border border-[#E5DCD0] text-xs text-[#6B5A4E] space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-[#2A2420]">
                  <Shield className="w-4 h-4 text-[#8C6D4A]" />
                  <span>Verified Workshop Details</span>
                </div>
                <p className="leading-relaxed">
                  Savonnerie Locale produces personal-care goods in small artisan batches. For questions regarding current available pieces or specific requests, calling our workshop is always welcomed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] border border-[#E2D8CD] shadow-xs">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2420]">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-[#635347] mt-1.5 leading-relaxed">
                  Fill in the details below with your enquiry. We review messages and provide direct assistance.
                </p>
              </div>

              {submittedMessage ? (
                <div
                  id="form-success-alert"
                  className="p-6 rounded-xl bg-[#F2F7F2] border border-[#C5DDC5] text-[#224422] space-y-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2D662D] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-lg text-[#1B381B]">
                        Enquiry Received
                      </h3>
                      <p className="text-sm leading-relaxed text-[#2C4D2C]">
                        {submittedMessage}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmittedMessage(null)}
                    className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#2D662D] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Workshop Enquiry Form">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E37] mb-2">
                      Your Full Name <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Marie Laurent"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#2A2420] placeholder-[#A09388] transition-colors focus:ring-2 focus:ring-[#9C826B] focus:border-transparent ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC4]'
                      }`}
                    />
                    {errors.name && (
                      <p id="error-name" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E37] mb-2">
                      Your Email Address <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. marie@example.com"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#2A2420] placeholder-[#A09388] transition-colors focus:ring-2 focus:ring-[#9C826B] focus:border-transparent ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC4]'
                      }`}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Dropdown / Input */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E37] mb-2">
                      Enquiry Subject <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'error-subject' : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#2A2420] transition-colors focus:ring-2 focus:ring-[#9C826B] focus:border-transparent ${
                        errors.subject ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC4]'
                      }`}
                    >
                      <option value="">Select an inquiry topic...</option>
                      <option value="Handmade Soaps Availability">Handmade Soaps Availability</option>
                      <option value="Scented Products Information">Scented Products Information</option>
                      <option value="Everyday Personal-Care Creations">Everyday Personal-Care Creations</option>
                      <option value="Visiting Workshop in Marseille">Visiting Workshop at 33 Rue Paradis</option>
                      <option value="General Artisan Inquiry">General Artisan Inquiry</option>
                    </select>
                    {errors.subject && (
                      <p id="error-subject" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E37] mb-2">
                      Message Details <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please write your question or message for our Marseille atelier..."
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#2A2420] placeholder-[#A09388] transition-colors focus:ring-2 focus:ring-[#9C826B] focus:border-transparent ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D9CFC4]'
                      }`}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      id="submit-enquiry-btn"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#38302A] hover:bg-[#231D19] disabled:bg-[#8A796E] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Formatting Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#7A6B5E] text-center mt-3">
                      Savonnerie Locale · 33 Rue Paradis, 13006 Marseille · Tel: {BUSINESS_DATA.phone.display}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
