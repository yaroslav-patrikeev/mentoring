import { ProgressBar } from "primereact/progressbar";

export const bemValue = [
  {
    name: "Блок",
    progress: 50,
  },
  {
    name: "Элемент",
    progress: 50,
  },
  {
    name: "Модификатор",
    progress: 20,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 15}></ProgressBar>;
    return item;
  });
