"use strict";
import { readFileSync, writeFileSync } from "fs";
import { generateReport } from "k6-html-result-reporter";
import pkg from "papaparse";
const { parse } = pkg;

const filePath = "./Grafana_report/output.csv";
const reportFilePath = "./Grafana_report/output.html";

function execute() {
  const fileData = readFileSync(filePath);
  const data = parse(fileData.toString(), {
    header: true,
    skipEmptyLines: true,
  }).data;
  const htmlReport = generateReport(data);
  writeFileSync(reportFilePath, htmlReport);
}

execute();
