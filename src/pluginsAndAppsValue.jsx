import { ProgressBar } from "primereact/progressbar";

export const pluginsValue = [
  {
    name: "Emmet",
    progress: 30,
  },
  {
    name: "Figma",
    progress: 30,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 15}></ProgressBar>;
    return item;
  });
