const body = document.querySelector("body");
const board = document.createElement("div");
board.classList.add("board");
body.append(board);

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let box = document.createElement("div");
    (i + j) % 2 == 0 ? box.classList.add("white") : box.classList.add("black");
    board.appendChild(box);
  }
}

class Piece {
  constructor(name, color, row, rank, image) {
    this.name = name;
    this.color = color;
    this.row = row;
    this.rank = rank;
    this.image = image;
  }

  render() {
    let img = document.createElement("img");
    img.setAttribute("src", this.image);
    img.classList.add("piece");
    img.style.top = this.row * 100 + "px";
    img.style.left = this.rank * 100 + "px";
    board.append(img);
  }
}

let wKnight = new Piece(
  "Knight",
  "white",
  7,
  1,
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg=="
);
wKnight.render();

