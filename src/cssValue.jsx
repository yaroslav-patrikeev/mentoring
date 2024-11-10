import { ProgressBar } from "primereact/progressbar";

export const cssValue = [
  {
    name: "color",
    progress: 100,
  },
  {
    name: "font-size",
    progress: 82,
  },
  {
    name: "font-weight",
    progress: 62,
  },
  {
    name: "width",
    progress: 62,
  },
  {
    name: "height",
    progress: 62,
  },
  {
    name: "padding",
    progress: 50,
  },
  {
    name: "margin",
    progress: 52,
  },
  {
    name: "background-color",
    progress: 62,
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
    progress: 27,
  },
  {
    name: "opacity",
    progress: 25,
  },
  {
    name: "letter-spacing",
    progress: 27,
  },
  {
    name: "display",
    progress: 52,
  },
  {
    name: "justify-content",
    progress: 27,
  },
  {
    name: "align-items",
    progress: 27,
  },
  {
    name: "flex-direction",
    progress: 25,
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
    progress: 55,
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
    progress: 50,
  },
  {
    name: "Селектор звездочка '*'",
    progress: 25,
  },
  {
    name: "border-radius",
    progress: 25,
  },
  {
    name: "gap",
    progress: 25,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 13}></ProgressBar>;
    return item;
  });
