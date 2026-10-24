import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { services } from "../../data/services";
import { sectionIds, siteConfig } from "../../data/site";
import {
  buildMailtoDraft,
  validateInquiryForm,
  type InquiryFormValues,
} from "../../lib/contactForm";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const initialValues: InquiryFormValues = {
  fullName: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  location: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState<InquiryFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormValues, string>>>({});
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateInquiryForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormNotice(null);
      return;
    }

    const mailto = buildMailtoDraft(values);
    window.location.href = mailto;
    setFormNotice(
      "Your email app should open with a pre-filled draft to dplandsurveys@gmail.com. Please review and send the message to complete your inquiry.",
    );
  };

  const field = (
    name: keyof InquiryFormValues,
    label: string,
    opts?: { type?: string; as?: "textarea" | "select"; required?: boolean },
  ) => {
    const id = `inquiry-${name}`;
    const error = errors[name];
    const common =
      "mt-2 w-full rounded-sm border bg-white px-4 py-3.5 text-base text-brand-text outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 md:text-lg";
    const border = error ? "border-red-500/70" : "border-brand-dark/15";

    return (
      <div>
        <label htmlFor={id} className="text-base font-medium text-brand-dark md:text-lg">
          {label}
          {opts?.required ? <span className="text-brand-primary"> *</span> : null}
        </label>
        {opts?.as === "textarea" ? (
          <textarea
            id={id}
            name={name}
            rows={5}
            value={values[name]}
            onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
            className={`${common} ${border} resize-y min-h-[120px]`}
          />
        ) : opts?.as === "select" ? (
          <select
            id={id}
            name={name}
            value={values[name]}
            onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
            className={`${common} ${border}`}
          >
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={name}
            type={opts?.type ?? "text"}
            value={values[name]}
            onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
            className={`${common} ${border}`}
          />
        )}
        {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
      </div>
    );
  };

  return (
    <section id={sectionIds.contact} className="section-pad bg-brand-cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              label="Contact"
              title="Let's discuss your survey requirements."
              description="Reach out by phone or email, or send an inquiry using the form. We will follow up based on the details you provide."
            />

            <Reveal className="mt-8 space-y-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center gap-3 rounded-sm border border-brand-dark/10 bg-white px-4 py-4 text-brand-dark transition hover:border-brand-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
              >
                <Phone size={18} className="text-brand-primary" aria-hidden />
                <span className="text-lg font-medium md:text-xl">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-sm border border-brand-dark/10 bg-white px-4 py-4 text-brand-dark transition hover:border-brand-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
              >
                <Mail size={18} className="text-brand-primary" aria-hidden />
                <span className="text-lg font-medium md:text-xl">{siteConfig.email}</span>
              </a>
            </Reveal>

            <Reveal delay={0.1} className="text-section-body mt-6">
              <p>
                Before contacting us, it helps to prepare your property or project
                location, intended use of the survey, and any available lot or plan
                references.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-sm border border-brand-dark/10 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">{field("fullName", "Full Name", { required: true })}</div>
                <div>{field("email", "Email", { type: "email", required: true })}</div>
                <div>{field("phone", "Phone Number", { type: "tel", required: true })}</div>
                <div className="sm:col-span-2">
                  {field("serviceNeeded", "Service Needed", { as: "select" })}
                </div>
                <div className="sm:col-span-2">
                  {field("location", "Property / Project Location")}
                </div>
                <div className="sm:col-span-2">
                  {field("message", "Message", { as: "textarea", required: true })}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
                Submitting opens your email application with a draft message. No
                message is sent automatically from this website.
              </p>

              {formNotice ? (
                <p className="mt-4 rounded-sm border border-brand-secondary/25 bg-brand-cream px-4 py-3 text-base text-brand-dark md:text-lg">
                  {formNotice}
                </p>
              ) : null}

              <Button type="submit" className="mt-6 w-full sm:w-auto">
                Open Email Draft
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
