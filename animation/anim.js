//animation pics
const imac = document.querySelector(".space__imac");
const corc = document.querySelector(".space__corc");
const cup = document.querySelector(".space__cup");
const key = document.querySelector(".space__key");
const spL = document.querySelector(".space__sp-l");
const spR = document.querySelector(".space__sp-r");
const note = document.querySelector(".space__notebook");
const pencil = document.querySelector(".space__penc");
const glasses = document.querySelector(".space__gl");
const stylus = document.querySelector(".space__st");
const wacom = document.querySelector(".space__wacom");
const title = document.querySelector(".space-title");

const arrayElems = [
  imac,
  corc,
  cup,
  key,
  spL,
  spR,
  note,
  pencil,
  glasses,
  stylus,
  wacom,
  title,
];

function showAnim() {
  arrayElems.forEach((item) => {
    item.classList.add("remove");
    if (item.classList.contains("remove")) {
      setTimeout(() => {
        item.classList.remove("remove");
        imac.classList.add("show__imac");
        corc.classList.add("show__corc");
        cup.classList.add("show__cup");
        key.classList.add("show__key");
        spL.classList.add("show__sp-l");
        spR.classList.add("show__sp-r");
        note.classList.add("show__notebook");
        pencil.classList.add("show__penc");
        glasses.classList.add("show__gl");
        stylus.classList.add("show__st");
        wacom.classList.add("show__wacom");
        title.classList.add("show__title");
        jumpTitle();
      }, 500);
    }
  });
}
showAnim();

function jumpTitle() {
  title.classList.add("jump__title");
}
