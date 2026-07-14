export const COMPANY_SIZE_OPTIONS = [
  "1-50",
  "51-200",
  "201-1000",
  "1000+",
] as const;

export const DEVICE_COUNT_OPTIONS = ["<50", "50-200", "200-500", "500+"] as const;

export type CompanySize = (typeof COMPANY_SIZE_OPTIONS)[number];
export type DeviceCount = (typeof DEVICE_COUNT_OPTIONS)[number];

export interface LeadFormPayload {
  companyName: string;
  yourName: string;
  workEmail: string;
  phoneNumber: string;
  companySize: CompanySize;
  city: string;
  deviceCount?: DeviceCount;
  additionalDetails?: string;
}

export interface LeadValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof LeadFormPayload, string>>;
  data?: LeadFormPayload;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

export function validateLeadPayload(
  body: unknown,
): LeadValidationResult {
  const errors: Partial<Record<keyof LeadFormPayload, string>> = {};

  if (!body || typeof body !== "object") {
    return { valid: false, errors: { companyName: "Invalid request body." } };
  }

  const raw = body as Record<string, unknown>;

  const companyName =
    typeof raw.companyName === "string" ? raw.companyName.trim() : "";
  const yourName =
    typeof raw.yourName === "string" ? raw.yourName.trim() : "";
  const workEmail =
    typeof raw.workEmail === "string" ? raw.workEmail.trim() : "";
  const phoneNumber =
    typeof raw.phoneNumber === "string" ? raw.phoneNumber.trim() : "";
  const companySize = raw.companySize;
  const city = typeof raw.city === "string" ? raw.city.trim() : "";
  const deviceCount = raw.deviceCount;
  const additionalDetails =
    typeof raw.additionalDetails === "string"
      ? raw.additionalDetails.trim()
      : undefined;

  if (!companyName) errors.companyName = "Company name is required.";
  if (!yourName) errors.yourName = "Your name is required.";
  if (!workEmail) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_RE.test(workEmail)) {
    errors.workEmail = "Enter a valid work email address.";
  }
  if (!phoneNumber) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!PHONE_RE.test(phoneNumber)) {
    errors.phoneNumber = "Enter a valid phone number.";
  }
  if (
    !companySize ||
    typeof companySize !== "string" ||
    !COMPANY_SIZE_OPTIONS.includes(companySize as CompanySize)
  ) {
    errors.companySize = "Select a company size.";
  }
  if (!city) errors.city = "City is required.";

  if (
    deviceCount !== undefined &&
    deviceCount !== "" &&
    (typeof deviceCount !== "string" ||
      !DEVICE_COUNT_OPTIONS.includes(deviceCount as DeviceCount))
  ) {
    errors.deviceCount = "Select a valid device count range.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  const data: LeadFormPayload = {
    companyName,
    yourName,
    workEmail,
    phoneNumber,
    companySize: companySize as CompanySize,
    city,
  };

  if (
    deviceCount &&
    typeof deviceCount === "string" &&
    DEVICE_COUNT_OPTIONS.includes(deviceCount as DeviceCount)
  ) {
    data.deviceCount = deviceCount as DeviceCount;
  }

  if (additionalDetails) {
    data.additionalDetails = additionalDetails;
  }

  return { valid: true, errors: {}, data };
}
