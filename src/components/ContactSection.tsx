import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/scEngineeringData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email address, and project message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
    } catch {
      // Fall back gracefully to confirmation state & direct email option outside Netlify
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    form.subject.trim() || 'New Project Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <section id="contact" className="bg-[#0A182D] text-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Firm Contact Info & Capabilities */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#A2BFEA] mb-3">
              Home: Contact
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-[1.12] tracking-[-0.02em] text-white">
              Connect With SC Engineering
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-white/78">
              Discuss upcoming commercial, industrial, educational, healthcare, or hospitality
              engineering projects directly with our Nashville team.
            </p>

            <div className="mt-10 space-y-6 pt-8 border-t border-white/15 text-sm">
              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#A2BFEA] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs text-white/55 mb-0.5">Call us</p>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="font-mono tabular-nums text-base font-medium text-white hover:text-[#A2BFEA] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-4 h-4 text-[#A2BFEA] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs text-white/55 mb-0.5">Email</p>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="text-base font-medium text-white hover:text-[#A2BFEA] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#A2BFEA] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs text-white/55 mb-0.5">Location</p>
                  <address className="not-italic text-base text-white/90 leading-relaxed">
                    {COMPANY_INFO.addressLine1}
                    <br />
                    {COMPANY_INFO.addressLine2}
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap gap-3">
              <a
                href={COMPANY_INFO.capabilitiesPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#0A182D] bg-white hover:bg-[#A2BFEA] transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Capabilities Statement</span>
              </a>
              <a
                href={COMPANY_INFO.siteLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-white border border-white/25 hover:border-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Apply for Careers</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-[#0A182D] p-7 sm:p-10">
            <h3 className="font-display font-semibold text-2xl text-[#0A182D]">
              Send an Inquiry
            </h3>
            <p className="text-sm text-[#0A182D]/70 mt-1.5">
              For any general inquiries, please fill in the following contact form.
            </p>

            {submitted ? (
              <div className="mt-8 border border-[#1F4A8A]/25 bg-[#F0F4F3] p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[#1F4A8A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-xl text-[#0A182D]">
                      Thanks for submitting!
                    </h4>
                    <p className="text-sm leading-[1.6] text-[#0A182D]/80 mt-2">
                      Your inquiry details for <span className="font-medium">{form.name}</span>{' '}
                      have been prepared. You can also send directly via your mail client or reach
                      us at{' '}
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="font-mono underline text-[#1F4A8A]"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      .
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0A182D] hover:bg-[#1F4A8A] transition-colors whitespace-nowrap"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="px-4 py-2.5 text-sm font-medium text-[#0A182D] border border-[#0A182D]/20 hover:border-[#0A182D] transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                noValidate
                className="mt-7 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 text-sm bg-red-50 border border-red-300 text-red-900"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium uppercase tracking-wider text-[#0A182D]/70 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm bg-[#F8F9F9] border border-[#0A182D]/20 text-[#0A182D] placeholder:text-[#0A182D]/40 focus:outline-none focus:border-[#1F4A8A] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium uppercase tracking-wider text-[#0A182D]/70 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 text-sm bg-[#F8F9F9] border border-[#0A182D]/20 text-[#0A182D] placeholder:text-[#0A182D]/40 focus:outline-none focus:border-[#1F4A8A] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium uppercase tracking-wider text-[#0A182D]/70 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project scope, third-party review, or general inquiry"
                    className="w-full px-4 py-3 text-sm bg-[#F8F9F9] border border-[#0A182D]/20 text-[#0A182D] placeholder:text-[#0A182D]/40 focus:outline-none focus:border-[#1F4A8A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium uppercase tracking-wider text-[#0A182D]/70 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your project timeline, location, or engineering discipline requirements..."
                    className="w-full px-4 py-3 text-sm bg-[#F8F9F9] border border-[#0A182D]/20 text-[#0A182D] placeholder:text-[#0A182D]/40 focus:outline-none focus:border-[#1F4A8A] focus:bg-white transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-7 py-3.5 text-sm font-medium text-white bg-[#0A182D] hover:bg-[#1F4A8A] disabled:opacity-60 transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A]"
                  >
                    {submitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>

                  <a
                    href={COMPANY_INFO.emailHref}
                    className="text-xs font-medium text-[#0A182D]/65 hover:text-[#1F4A8A] transition-colors"
                  >
                    Or email directly: {COMPANY_INFO.email}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
