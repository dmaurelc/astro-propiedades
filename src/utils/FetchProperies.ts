export async function fetchProperties() {
  const response = await fetch('https://www.hugoortizpropiedades.cl/wp-json/custom/v1/propiedades/');
  const propiedades = await response.json();
  return propiedades;
}  