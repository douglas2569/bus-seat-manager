import Database from "../Database/index.js";

class Reserve {

    handleRegister(){
        if(document.querySelector('.register-button') === null) return;

        document.querySelector('.register-button').addEventListener('click',()=>{
            Database[Database.length].chair = chair
            return 'Cadeira Cadastrada com Sucesso'
        })
    }

    show(container){
        const table = document.createElement('table')
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        const th = document.createElement('th')

        
        for (let i = 0; i <  Object.keys(Database.getData[0]).length; i++) {
                        
        }
        
        container.appendChild(table);
    } 
    
    addNumberSeats(number=8){
        const reserveSeat = document.querySelector('.reserve-seat')
                  
        let i = 1
        while(i <= number){
            const div = document.createElement('div')  
            if (i == 1) div.setAttribute('class', 'first')
            let j = 0            
            while(j < 2){
                const span = document.createElement('span')
                span.textContent = i  
                div.appendChild(span)
                ++i
                ++j
            }
            
            reserveSeat.appendChild(div)
        }
        
    }

}

const reserve = new Reserve();
reserve.handleRegister();
reserve.addNumberSeats();