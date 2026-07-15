import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { validateLeadPayload } from "@/lib/lead-validation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request
    const validation = validateLeadPayload(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }

    // Save lead to Supabase
    const { error } = await supabase
      .from("leads")
      .insert({
        company_name: validation.data.companyName,
        your_name: validation.data.yourName,
        work_email: validation.data.workEmail,
        phone_number: validation.data.phoneNumber,
        company_size: validation.data.companySize,
        city: validation.data.city,
        device_count: validation.data.deviceCount,
        additional_details: validation.data.additionalDetails,
      });

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to save lead.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully.",
    });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Invalid request.",
      },
      { status: 400 }
    );
  }
}