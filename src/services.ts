export async function getImagesData() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(
    'http://localhost:8080/data.json',
    requestOptions
  );
  if (!response.ok) {
    throw new Error(`Request failed with status code${response.status}`);
  }

  const data = await response.json();
  return data;
}
