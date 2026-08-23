interface Env {
  RESEND_API_KEY: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = (await context.request.json()) as ContactData;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "gulshanchouhan343@gmail.com",
        subject: data.subject || `Website enquiry from ${data.name}`,
        html: `
          <h2>New Contact Form Message</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>

          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
