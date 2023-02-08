let dirtButton = document.querySelector(".dirtButton");
let rockButton = document.querySelector(".rockButton");
let treeButton = document.querySelector(".treeButton");
let dirt = document.querySelector(".dirt1");
let tree = document.querySelector(".tree");
let rock = document.querySelector(".rock");
let div = document.querySelector("div");

let currentPointer = " ";
// dirt.addEventListener("click", change());
// function change() {
//   currentPointer = "dirt";
// document.dirt.style.display = "hide";
// }
// tree.addEventListener(())
function selectPointerType(type) {
  currentPointer = type;
  console.log(currentPointer);
}
dirtButton.addEventListener("click", selectPointerType("dirt"));
rockButton.addEventListener("click", selectPointerType("rock"));
treeButton.addEventListener("click", selectPointerType("tree"));
function removeSelected(type) {
  if (currentPointer !== type) {
    return;
  }
}
dirt.addEventListener("click", remove);
function remove() {
  dirt.classList.remove(".dirt");
}
