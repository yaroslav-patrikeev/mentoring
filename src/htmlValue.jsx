import { ProgressBar } from "primereact/progressbar";

export const htmlValue = [
  {
    name: "<html>",
    progress: 100,
  },
  {
    name: "<head>",
    progress: 100,
  },
  {
    name: "<title>",
    progress: 100,
  },
  {
    name: "<body>",
    progress: 100,
  },
  {
    name: "<h1>...<h6>",
    progress: 50,
  },
  {
    name: "<p>",
    progress: 50,
  },
  {
    name: "<div>",
    progress: 50,
  },
  {
    name: "<img>",
    progress: 50,
  },
  {
    name: "<a>",
    progress: 50,
  },
  {
    name: "Комментарии в HTML",
    progress: 25,
  },
  {
    name: "<ul>",
    progress: 25,
  },
  {
    name: "<ol>",
    progress: 25,
  },
  {
    name: "<input>",
    progress: 25,
  },
  {
    name: "<li>",
    progress: 25,
  },
  {
    name: "<meta>",
    progress: 25,
  },
  {
    name: "<link>",
    progress: 25,
  },
  {
    name: "<style>",
    progress: 100,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 15}></ProgressBar>;
    return item;
  });
