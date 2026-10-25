export interface InquiryFormValues {
  fullName: string;
  email: string;
  contactNo: string;
  lotArea: string;
  location: string;
  purposeOfSurvey: string;
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
  if (!values.contactNo.trim()) {
    errors.contactNo = "Please enter your contact number.";
  }
  if (!values.location.trim()) {
    errors.location = "Please enter the property or project location.";
  }
  if (!values.purposeOfSurvey.trim()) {
    errors.purposeOfSurvey = "Please describe the purpose of the survey.";
  }

  return errors;
}

export function buildMailtoDraft(values: InquiryFormValues): string {
  const subject = encodeURIComponent(
    `Survey inquiry — ${values.fullName.trim()}`,
  );
  const lotAreaLine = values.lotArea.trim()
    ? `${values.lotArea.trim()} sqm`
    : "Not specified";

  const body = encodeURIComponent(
    [
      "Hello D.P. Land Surveying Services,",
      "",
      "I would like to inquire about a land survey.",
      "",
      `Full Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Contact No.: ${values.contactNo.trim()}`,
      `Lot Area: ${lotAreaLine}`,
      `Location: ${values.location.trim()}`,
      `Purpose of Survey: ${values.purposeOfSurvey.trim()}`,
      "",
      "---",
      "Sent via website inquiry form (mailto draft).",
    ].join("\n"),
  );

  return `mailto:dplandsurveys@gmail.com?subject=${subject}&body=${body}`;
}
