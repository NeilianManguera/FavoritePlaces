const GOOGLE_API_KEY = "AIzaSyDXf6MvyAyLMX2bmP1yThJLUmAetx8iGTw";

export function getMapPreview(lat, lng) {
  //dummy link only. not working
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}


export async function getAddress(lat, lng) {
  //dummy link only. not working
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const respose = await fetch(url);

  if (!respose.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await respose.json();
  const address = data.results[0].formatted_address;
  return address;
}