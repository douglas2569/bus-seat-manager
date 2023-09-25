// const Database = []
// let id = 0

// export {id}
// export default Database 

export default class Database{
     static database = []
     static id = 0

     static setRegister(data){
        Database.id += 1
        data.id = Database.id
        Database.database.push(data);
     }     
}