export async function fetchProperties() {
  const response = await fetch(
    "https://www.hugoortizpropiedades.cl/wp-json/custom/v1/propiedades/",
  );
  const propiedades = await response.json();
  return propiedades;
}

export async function fetchDestacadas() {
  const response = await fetch(
    "https://www.hugoortizpropiedades.cl/wp-json/custom/v1/propiedades/destacadas",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }
  const data = await response.json();
  return data;
}
