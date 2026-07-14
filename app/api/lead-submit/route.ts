import { NextRequest, NextResponse } from "next/server";
import { validateLeadPayload } from "@/lib/lead-validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Server-side validation
    const validation = validateLeadPayload(body);
    
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }
    
    // Log the payload to server output as requested
    console.log("----------------------------------------");
    console.log("NEW LEAD SUBMISSION RECEIVED:");
    console.log("Company Name: ", validation.data?.companyName);
    console.log("Authorized Signatory: ", validation.data?.yourName);
    console.log("Email: ", validation.data?.workEmail);
    console.log("Phone: ", validation.data?.phoneNumber);
    console.log("Company Size: ", validation.data?.companySize);
    console.log("City: ", validation.data?.city);
    console.log("Retirement Volume: ", validation.data?.deviceCount || "N/A");
    console.log("Additional Details: ", validation.data?.additionalDetails || "N/A");
    console.log("----------------------------------------");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead submission API:", error);
    return NextResponse.json(
      { error: "Invalid payload or bad request." },
      { status: 400 }
    );
  }
}
