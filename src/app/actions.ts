"use server";

export async function submitContactForm(data: { name: string, email: string, message: string }) {
  // Web3Forms key securely retrieved on the server
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is missing in environment variables.");
    return { success: false, message: "Server configuration error." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...data
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
