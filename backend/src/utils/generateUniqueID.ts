export default function generateUniqueID() {
  const randomNumber = Math.floor(Math.random() * 125155);
  const date = new Date();
  const id = `${date.getDate()}${randomNumber}${date.getMilliseconds()}`;
  return id;
}
