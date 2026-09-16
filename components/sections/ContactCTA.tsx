'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/content/site';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function ContactCTA() {
  const [status, setStatus] = useState<'idle' | 'opening'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Project Enquiry — ${form.get('projectType') || 'New Project'}`;
    const body = [
      `Name: ${form.get('name') || ''}`,
      `Company / Organisation: ${form.get('company') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Phone: ${form.get('phone') || ''}`,
      `Project Type: ${form.get('projectType') || ''}`,
      `Project Location: ${form.get('location') || ''}`,
      '',
      `Project details:`,
      `${form.get('message') || ''}`,
    ].join('\n');

    setStatus('opening');
    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.setTimeout(() => setStatus('idle'), 900);
    }, 420);
  };

  return (
    <section className="cta-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="cta-grid">
          <ScrollReveal><h2 id="contact-title">{site.finalCta.title}</h2></ScrollReveal>
          <ScrollReveal delay={.1}>
            <div>
              <p className="cta-copy">{site.finalCta.body}</p>
              <div className="cta-callout">
                Prefer to speak directly? <a href={site.phoneHref}>Call {site.phone}</a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="project-enquiry">
          <div className="project-enquiry__heading">
            <span className="eyebrow">Project Enquiry</span>
            <p>Tell us what you’re planning and we’ll have the right context to start the conversation.</p>
          </div>
          <form className="project-form" onSubmit={handleSubmit}>
            <label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label>
            <label><span>Company / Organisation</span><input name="company" type="text" autoComplete="organization" /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label>
            <label><span>Project Type</span><input name="projectType" type="text" placeholder="Construction, renovation, landscaping…" /></label>
            <label><span>Project Location</span><input name="location" type="text" /></label>
            <label className="project-form__full"><span>Tell Us About Your Project</span><textarea name="message" rows={5} required /></label>
            <div className="project-form__submit">
              <button className={`action action--dark project-form__submit-button${status === 'opening' ? ' is-sent' : ''}`} type="submit" disabled={status === 'opening'}>
                <span>{status === 'opening' ? 'Opening email…' : 'Send Enquiry'}</span>
                <span aria-hidden="true">{status === 'opening' ? '✓' : '↗'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
