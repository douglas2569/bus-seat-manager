import Database from "../Database/index.js";

export default class User { //reponsibilide
    constructor(name, cpf, dateOfBirth, bloodType){        
        this.name = name
        this.cpf = cpf
        this.dateOfBirth = dateOfBirth
        this.bloodType = bloodType
    }

    create(){     
        Database.setRegister({            
            name:this.name,
            cpf: this.cpf,
            dateOfBirth: this.dateOfBirth,
            bloodType: this.bloodType ,                    
            chair: null,                    
        })
         
     return 'Cadastrado com Sucesso'   
    }
}
