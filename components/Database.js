import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';


const database = SQLite.openDatabase("Notas", "1.0");



export default {
    createDatabase() {
            database.transaction(tx => {
                tx.executeSql(
                  "create table if not exists notas (id integer primary key not null, descricao text, data text);",
                  console.log("Database Criada com Sucesso")
            );
        });
    },
    add(descricao, data){

      if (descricao === null || descricao === "") {
        Alert.alert("Por Favor Introduza uma Descrição!")
        return false;
      }
        
      if(descricao >= 250){
        Alert.alert("A Descrição não deve Ultrapassar os 250 Caracteres!")
      }
            database.transaction(
                tx => {
                  tx.executeSql("insert into notas (descricao, data) values (?, ?)", [descricao,data]);
                  Alert.alert("Nota Introduzida com Sucesso!")
                  tx.executeSql("select * from notas", [], (_, { rows }) =>
                  console.log(JSON.stringify(rows))
            );
          },
              null,
              null,
              );
        },
        
        select: () => new Promise((resolve, reject) => {
          database.transaction(
              tx => {
                tx.executeSql("select * from notas", 
                [],
                (success, set) =>{
                  resolve(set);
                }),
                reject;
              },
          );
      }),
    delete(id){
      database.transaction(
        tx => {
          tx.executeSql("delete from notas where id = ?", [id],
          );
        },
        null,
        null,
      )
    },
    update(id, descricao){

        database.transaction(
            tx => {
              tx.executeSql("update notas set descricao=? where id=?", [descricao, id],
              );
            },
           null,
           null,
        )
    }
    

}