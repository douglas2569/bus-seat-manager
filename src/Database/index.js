export default class Database{
     static database = [
         {            
               name:'C.Nascimento',
               cpf: '222.222.222-22',
               dateOfBirth: '16/09/23',
               bloodType: 'O+',                    
               chair: '1',                    
         },
         {            
            name:'Pedro Ferreira ',
            cpf: '111.111.111-11',
            dateOfBirth: '24/12/23',
            bloodType: 'A+' ,                    
            chair: '3',                    
         },
         {            
            name:'Francisco Pires ',
            cpf: '333.333.333-333',
            dateOfBirth: '24/12/23',
            bloodType: 'AB+' ,                    
            chair: '4',                    
         }
     ]
     static id = 0

     static setRegister(data){
        Database.id += 1
        data.id = Database.id
        Database.database.push(data);
     }  
     
     static getData(){

      return Database.database
     }

     static setChair(index, chairNumber){
      Database.database[index].chair = chairNumber      
   } 
     
}