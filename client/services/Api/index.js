export default async function isSignedIn() {
  await fetch('http://localhost:8080/api/v1/auth/is_signed_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
