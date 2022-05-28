import * as SQLite from "expo-sqlite";
const database = SQLite.openDatabase("FavMovies.db");
export function Init() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((tx) => {
        tx.executeSql("drop table Movie" ,
        [],
        () => {
          console.log("Success drop");
          resolve();
        },
        (_, error) => {
          console.log("error drop");
          console.log(error);
          reject();
        })
      tx.executeSql(
        `CREATE TABLE  If Not   exists 
       Movie(
            imdbID Text not null,
            Poster Text not null ,
            Title Text not null ,
            Type Text not null ,
            Year Text not null ,
            fav BOOLEAN  not null 
            )`,
        [],
        () => {
          console.log("Success from create table Person");
          resolve();
        },
        (_, error) => {
          console.log("error from create table Person");
          console.log(error);
          reject();
        }
      );
    });
  });

  return prom;
}
export function AddNewMovie(movie) {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Insert Into Movie(imdbID,Poster,Title,Type,Year,fav) Values(?,?,?,?,?,?)",
        [movie.imdbID,movie.Poster,movie.Title,movie.Type,movie.Year,movie.fav],
        (_, result) => {
          console.log("Success Insert Movie");
          //  console.log("result", result);
        dispatch(getGroupMetaSuccess(['fake', 'data']));
          resolve(result);
        },
        (_, error) => {
          console.log("error Insert Movie");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom;
}

export function SelectMovie() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Select * From Movie",
        [],
        (_, result) => {
          console.log("Success Select  Movie");
          //  console.log("result", result);
          resolve(result);
        },
        (_, error) => {
          console.log("error Select  Movie");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom;
}
