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

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Web3Forms API Error:", response.status, responseText);
      return { success: false, message: `API Error ${response.status}: ${responseText}` };
    }

    try {
      const result = JSON.parse(responseText);
      return result;
    } catch (e: any) {
      return { success: false, message: `Failed to parse response: ${e.message}` };
    }
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, message: `Server fetch error: ${error.message}` };
  }
}
