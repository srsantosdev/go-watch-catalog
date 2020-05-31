export default function replaceSpacesForURL(string = "") {
  let newString = string;
  while (newString.indexOf(" ") !== -1) {
    newString = newString.replace(" ", "%20");
  }
  return newString;
}
