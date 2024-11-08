import { ProgressBar } from "primereact/progressbar";

export const cssValue = [
  {
    name: "color",
    progress: 100,
  },
  {
    name: "font-size",
    progress: 80,
  },
  {
    name: "font-weight",
    progress: 60,
  },
  {
    name: "width",
    progress: 60,
  },
  {
    name: "height",
    progress: 60,
  },
  {
    name: "padding",
    progress: 50,
  },
  {
    name: "margin",
    progress: 50,
  },
  {
    name: "background-color",
    progress: 60,
  },
  {
    name: "border",
    progress: 50,
  },
  {
    name: "text-decoration",
    progress: 25,
  },
  {
    name: "text-transform",
    progress: 25,
  },
  {
    name: "line-height",
    progress: 25,
  },
  {
    name: "opacity",
    progress: 25,
  },
  {
    name: "letter-spacing",
    progress: 25,
  },
  {
    name: "display",
    progress: 50,
  },
  {
    name: "justify-content",
    progress: 25,
  },
  {
    name: "align-items",
    progress: 25,
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
    progress: 50,
  },
  {
    name: "Селекторы по тэгу",
    progress: 100,
  },
  {
    name: "Комбинированные селекторы",
    progress: 25,
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
    progress: 40,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 15}></ProgressBar>;
    return item;
  });
