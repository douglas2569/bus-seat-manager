import {Database} from "../database/index.js";

class Reserve {

    handleRegister(){
        document.querySelector('.register-button').addEventListener('click',()=>{
            Database[Database.length].chair = chair
            return 'Cadeira Cadastrada com Sucesso'
        })
    }

}

const reserve = new Reserve();
reserve.handleRegister();