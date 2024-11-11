import { ProgressBar } from "primereact/progressbar";

export const bemValue = [
  {
    name: "Блок",
    progress: 55,
  },
  {
    name: "Элемент",
    progress: 55,
  },
  {
    name: "Модификатор",
    progress: 20,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 13}></ProgressBar>;
    return item;
  });
