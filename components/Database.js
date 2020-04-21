import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';
import Languages from '../components/Language'

const database = SQLite.openDatabase("Notas", "1.0");



export default {
    createDatabase() {
            database.transaction(tx => {
                tx.executeSql(
                  "create table if not exists notas (id integer primary key not null, descricao text, data text);",
            );
        });
    },
    add(descricao, data){

      if (descricao === null || descricao === "") {
        Alert.alert(Languages.t('descricao'))
        return false;
      }
        
      if(descricao >= 250){
        Alert.alert(Languages.t('descricao250'))
      }
            database.transaction(
                tx => {
                  tx.executeSql("insert into notas (descricao, data) values (?, ?)", [descricao,data]);
                  Alert.alert(Languages.t('notaadd'))
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
          Alert.alert(Languages.t('notadelete'))
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
              Alert.alert(Languages.t('notaedit'))
              );
            },
           null,
           null,
        )
    }
    

}