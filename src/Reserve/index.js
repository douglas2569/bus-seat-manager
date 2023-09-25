import {Database} from "../Database/index.js";

class Reserve {

    handleRegister(){
        document.querySelector('.register-button').addEventListener('click',()=>{
            Database[Database.length].chair = chair
            return 'Cadeira Cadastrada com Sucesso'
        })
    }

    show(container){
        const table = document.createElement('table')
        const row = document.createElement('tr')
        const column = document.createElement('td')
        const header = document.createElement('th')

        for (let i = 0; i <  Object.keys(Database.getData[0]).length; i++) {
            //th
            
        }
        
        container.appendChild(table);
    }    

}

const reserve = new Reserve();
reserve.handleRegister();