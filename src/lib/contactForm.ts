export interface InquiryFormValues {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  location: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof InquiryFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryForm(values: InquiryFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  }
  if (!values.message.trim()) {
    errors.message = "Please include a brief message about your inquiry.";
  }

  return errors;
}

export function buildMailtoDraft(values: InquiryFormValues): string {
  const subject = encodeURIComponent(
    `Survey inquiry — ${values.fullName.trim()}`,
  );
  const body = encodeURIComponent(
    [
      "Hello D.P. Land Surveying Services,",
      "",
      "I would like to inquire about a land survey.",
      "",
      `Full Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service Needed: ${values.serviceNeeded.trim() || "Not specified"}`,
      `Property / Project Location: ${values.location.trim() || "Not specified"}`,
      "",
      "Message:",
      values.message.trim(),
      "",
      "---",
      "Sent via website inquiry form (mailto draft).",
    ].join("\n"),
  );

  return `mailto:dplandsurveys@gmail.com?subject=${subject}&body=${body}`;
}
