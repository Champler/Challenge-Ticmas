import { promises as fsPromise, read } from "fs";
import { parse } from "csv-parse";
import fs from "fs";
import path from "path";

interface Movies {
  titulo: string;
  genero: string;
  anio: string;
  director: string;
  actores: string;
}
interface Result {
  result: Array<Movies>;
}
const pathJson = path.join(__dirname, "../uploads/currentcsv.json");
const pathCsv = path.join(__dirname, "../uploads/currentcsv.csv");

export const parsedMovies = async (pathCsv: string) => {
  const readFile = await fsPromise.readFile(pathCsv, "utf-8");
  const headers = ["titulo", "genero", "anio", "director", "actores"];
  console.log("1");

  const parsedMovies = parse(
    readFile,
    {
      delimiter: ";",
      columns: headers,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log("1");

      fs.writeFileSync(
        path.join(__dirname, "../uploads/currentcsv.json"),
        JSON.stringify(result),
        "utf8"
      );
    }
  );
  return parsedMovies;
};

export const moviesRead = async (pathJson) => {
  console.log("2");
  const movies = JSON.parse(fs.readFileSync(pathJson, "utf-8"));
  return movies;
};
