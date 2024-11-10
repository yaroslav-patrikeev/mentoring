import { ProgressBar } from "primereact/progressbar";

export const internetTechnologiesValue = [
  {
    name: "DNS-сервер",
    progress: 25,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 15}></ProgressBar>;
    return item;
  });
