"use server";

export default async function createNewBuilding(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name");
  const complement = formData.get("complement");
  const ventilationCompatible = formData.get("ventilationCompatible");
  const isLocalOperation = formData.get("isLocalOperation");
  const email = formData.get("email");

  const token = "token-exemplo";

  const res = await fetch(`http://localhost:3010/api/building-new`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name,
      complement,
      ventilationCompatible,
      isLocalOperation,
      email,
    }),
  });

  if (!res.ok) {
    const errorData = await res?.json();
    return { success: false, error: errorData.message };
  }

  const data = await res.json();
  return {
    success: true,
    data,
    error: null,
  };
}
