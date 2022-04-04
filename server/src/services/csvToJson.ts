import converter from "json-2-csv";
import fs from "fs";

interface Movies {
  titulo: string;
  genero: string;
  año: string;
  director: string;
  actores: string;
}

export default async function csvToJson(path: string): Promise<Array<Movies>> {
  return new Promise((res) => {
    const fileContent = fs.readFileSync(path, "utf-8");
    const csv2jsonCallback = function (err, json) {
      if (err) throw err;
      res(json)
    };
    const options = {
      delimiter: {
        field: ";",
      },
      trimHeaderFields: true,
      trimFieldValues: true,
      keys: ["titulo", "genero", "año", "director", "actores"],
    };

    converter.csv2json(fileContent, csv2jsonCallback, options);
  });
}
