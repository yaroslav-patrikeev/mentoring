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
  {
    name: "<span>",
    progress: 25,
  },
  {
    name: "<main>",
    progress: 25,
  },
  {
    name: "<form>",
    progress: 25,
  },
  {
    name: "<input>",
    progress: 25,
  },
  {
    name: "<form>",
    progress: 25,
  },
  {
    name: "<textarea>",
    progress: 25,
  },
  {
    name: "<button>",
    progress: 40,
  },
  {
    name: "<select>",
    progress: 25,
  },
  {
    name: "<option>",
    progress: 25,
  },
  {
    name: "<label>",
    progress: 25,
  },
  {
    name: "<fielset>",
    progress: 25,
  },
  {
    name: "<legend>",
    progress: 25,
  },
  {
    name: "<form>",
    progress: 25,
  },
  {
    name: "Атрибут for",
    progress: 25,
  },
  {
    name: "Атрибут placeholder",
    progress: 25,
  },
  {
    name: "Атрибут required",
    progress: 25,
  },
  {
    name: "Атрибут value",
    progress: 25,
  },
  {
    name: "Атрибут accept",
    progress: 25,
  },
  {
    name: "Атрибут pattern",
    progress: 25,
  },
  {
    name: "Атрибут size",
    progress: 25,
  },
  {
    name: "Атрибуты minlength и maxlength",
    progress: 25,
  },
]
  .sort((a, b) => b.progress - a.progress)
  .map((item, i) => {
    item.number = i + 1;
    item.progress = <ProgressBar value={item.progress - 9}></ProgressBar>;
    return item;
  });
