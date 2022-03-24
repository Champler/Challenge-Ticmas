import csvToJson from "convert-csv-to-json";
import { promises as fsPromise } from "fs";

export const parsedMovies = async (pathCsv, pathJson) =>{
    const fileInputName = pathCsv;
    const fileOutputName = pathJson;
    await csvToJson
      .fieldDelimiter(";")
      .generateJsonFileFromCsv(fileInputName, fileOutputName);
  
    const readFile = await fsPromise.readFile(pathJson, "utf-8");
    const movies = JSON.parse(readFile);
    
    return movies
}