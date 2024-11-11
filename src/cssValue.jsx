import { ProgressBar } from "primereact/progressbar";

export const cssValue = [
  {
    name: "color",
    progress: 100,
  },
  {
    name: "font-size",
    progress: 84,
  },
  {
    name: "font-weight",
    progress: 62,
  },
  {
    name: "width",
    progress: 66,
  },
  {
    name: "height",
    progress: 64,
  },
  {
    name: "padding",
    progress: 50,
  },
  {
    name: "margin",
    progress: 55,
  },
  {
    name: "background-color",
    progress: 64,
  },
  {
    name: "border",
    progress: 52,
  },
  {
    name: "text-decoration",
    progress: 35,
  },
  {
    name: "text-transform",
    progress: 35,
  },
  {
    name: "line-height",
    progress: 30,
  },
  {
    name: "opacity",
    progress: 25,
  },
  {
    name: "letter-spacing",
    progress: 30,
  },
  {
    name: "display",
    progress: 54,
  },
  {
    name: "justify-content",
    progress: 30,
  },
  {
    name: "align-items",
    progress: 30,
  },
  {
    name: "flex-direction",
    progress: 28,
  },
  {
    name: "flex-wrap",
    progress: 25,
  },
  {
    name: "flex-flow",
    progress: 25,
  },
  {
    name: "align-content",
    progress: 25,
  },
  {
    name: "align-self",
    progress: 25,
  },
  {
    name: "order",
    progress: 25,
  },
  {
    name: "Селекторы по классу",
    progress: 100,
  },
  {
    name: "Селекторы по id",
    progress: 57,
  },
  {
    name: "Селекторы по тэгу",
    progress: 100,
  },
  {
    name: "Комбинированные селекторы",
    progress: 35,
  },
  {
    name: "Псевдокласс hover",
    progress: 25,
  },
  {
    name: "Псевдокласс active",
    progress: 25,
  },
  {
    name: "Подключение css файла",
    progress: 100,
  },
  {
    name: "text-align",
    progress: 54,
  },
  {
    name: "Селектор звездочка '*'",
    progress: 25,
  },
  {
    name: "border-radius",
    progress: 27,
  },
  {
    name: "gap",
    progress: 26,
  },
  {
    name: "background-image",
    progress: 25,
  },
  {
    name: "background-position",
    progress: 25,
  },
  {
    name: "background-repeat",
    progress: 25,
  },
  {
    name: "background-size",
    progress: 25,
  },
  {
    name: "box-sizing",
    progress: 25,
  },
  {
    name: "z-index",
    progress: 30,
  },
  {
    name: "position",
    progress: 30,
  },
  {
    name: "top, left, bottom, right",
    progress: 30,
  },
  {
    name: "Псевдоэлементы ::before, ::after",
    progress: 25,
  },
  {
    name: "Единицы измерения vw, vh",
    progress: 25,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 10}></ProgressBar>;
    return item;
  });
