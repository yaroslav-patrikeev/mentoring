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
    progress: 100,
  },
  {
    name: "<p>",
    progress: 100,
  },
  {
    name: "<div>",
    progress: 100,
  },
  {
    name: "<img>",
    progress: 100,
  },
  {
    name: "<a>",
    progress: 60,
  },
  {
    name: "Комментарии в HTML",
    progress: 50,
  },
  {
    name: "<ul>",
    progress: 35,
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
    progress: 35,
  },
  {
    name: "<meta>",
    progress: 25,
  },
  {
    name: "<link>",
    progress: 40,
  },
  {
    name: "<style>",
    progress: 100,
  },
  {
    name: "<header>",
    progress: 25,
  },
  {
    name: "<nav>",
    progress: 25,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 13}></ProgressBar>;
    return item;
  });
