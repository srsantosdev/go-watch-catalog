const colors = [
  "#71F79F",
  "#71A7F7",
  "#F77171",
  "#F7B971",
  "#E4F771",
  "#B4F771",
  "#71B7F7",
  "#7C71F7",
  "#9C71F7",
  "#BC71F7",
  "#F471F7",
  "#F771B1",
  "#F77179",
  "#E5BB7A",
  "#D7E57A",
  "#7AE5B2",
  "#7A92E5",
  "#B09E7B",
  "#AFB07B",
  "#7BB087",
  "#7BADB0",
  "#857BB0"
];

export default function randomColors(){
  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}
