import "./App.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/fluent-light/theme.css"; // тема PrimeReact
import { Card } from "primereact/card";
import { htmlValue } from "./htmlValue";
import { cssValue } from "./cssValue";
import { bemValue } from "./bemValue";
import { internetTechnologiesValue } from "./internetTechologiesValue";
import { pluginsValue } from "./pluginsAndAppsValue";

function App() {
  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          fontFamily: "var(--font-family)",
          width: "95%",
        }}
      >
        Прогресс в web-разработке
      </h1>
      <Card
        title="HTML"
        style={{
          textAlign: "left",
          marginBottom: "30px",
          width: "95%",
          maxWidth: "900px",
        }}
      >
        <DataTable value={htmlValue} tableStyle={{ maxWidth: "100%" }}>
          <Column field="number" header="№" style={{ width: "5%" }}></Column>
          <Column field="name" header="Тема" style={{ width: "45%" }}></Column>
          <Column
            field="progress"
            header="Прогресс"
            style={{ width: "50%" }}
          ></Column>
        </DataTable>
      </Card>
      <Card
        title="CSS"
        style={{
          textAlign: "left",
          width: "95%",
          maxWidth: "900px",
          marginBottom: "30px",
        }}
      >
        <DataTable value={cssValue} tableStyle={{ maxWidth: "100%" }}>
          <Column field="number" header="№" style={{ width: "5%" }}></Column>
          <Column field="name" header="Тема" style={{ width: "45%" }}></Column>
          <Column
            field="progress"
            header="Прогресс"
            style={{ width: "50%" }}
          ></Column>
        </DataTable>
      </Card>
      <Card
        title="Методология БЭМ"
        style={{
          textAlign: "left",
          width: "95%",
          maxWidth: "900px",
          marginBottom: "30px",
        }}
      >
        <DataTable value={bemValue} tableStyle={{ maxWidth: "100%" }}>
          <Column field="number" header="№" style={{ width: "5%" }}></Column>
          <Column field="name" header="Тема" style={{ width: "45%" }}></Column>
          <Column
            field="progress"
            header="Прогресс"
            style={{ width: "50%" }}
          ></Column>
        </DataTable>
      </Card>
      <Card
        title="Сети и интернет-технологии"
        style={{
          textAlign: "left",
          width: "95%",
          maxWidth: "900px",
          marginBottom: "30px",
        }}
      >
        <DataTable
          value={internetTechnologiesValue}
          tableStyle={{ maxWidth: "100%" }}
        >
          <Column field="number" header="№" style={{ width: "5%" }}></Column>
          <Column field="name" header="Тема" style={{ width: "45%" }}></Column>
          <Column
            field="progress"
            header="Прогресс"
            style={{ width: "50%" }}
          ></Column>
        </DataTable>
      </Card>
      <Card
        title="Программы и плагины"
        style={{
          textAlign: "left",
          width: "95%",
          maxWidth: "900px",
          marginBottom: "30px",
        }}
      >
        <DataTable value={pluginsValue} tableStyle={{ maxWidth: "100%" }}>
          <Column field="number" header="№" style={{ width: "5%" }}></Column>
          <Column field="name" header="Тема" style={{ width: "45%" }}></Column>
          <Column
            field="progress"
            header="Прогресс"
            style={{ width: "50%" }}
          ></Column>
        </DataTable>
      </Card>
    </>
  );
}

export default App;
