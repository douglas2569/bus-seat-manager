import Database from "../database/index.js";

export default class Reserve {
    constructor(){
        this.database = Database.getData() 
    }

    handleRegister(){        
        const chairs =  document.querySelectorAll('.reserve-seat span')

        chairs.forEach(chair => {
            chair.addEventListener('click',()=>{ 
                if(this.isAllocated(chair)){
                   alert('Poltrona ocupada')

                }else{                    
                    Database.setChair(this.database.length-1, chair.textContent)  
                    this.coloringChair()                  
                    this.show(document.querySelector('table'))
                    console.log(this.database)
                    alert('Poltrona reservada com Sucesso')                    
                    window.scrollTo(0 , document.body.scrollHeight);
                }

            })
            
        });

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
    
    show(container){  
        const rows = container.querySelectorAll('tr:not(.first-line)')
        rows.forEach((row)=>{
            row.remove()
        })

        for (let i = 0; i <  this.database.length; i++) {            
            const tr = document.createElement('tr')
            const td1 = document.createElement('td') 
            const td2 = document.createElement('td') 
            // const td3 = document.createElement('td') 
            const td4 = document.createElement('td') 
            
            td1.textContent =  this.database[i].chair      
            td2.textContent =  this.database[i].name      
            //td3.textContent =  this.database[i].dateOfBirth      
            td4.textContent =  this.database[i].bloodType      

            tr.appendChild(td1)
            tr.appendChild(td2)
            // tr.appendChild(td3)
            tr.appendChild(td4)
            
            if(this.database[i].chair != null)
                container.appendChild(tr);
        }
        
    } 
    
    isAllocated(chair){ 

        for (let i = 0; i < this.database.length; i++) {                         
            if(this.database[i].chair == chair.textContent)            
                return true
        }

        return false
    }

    coloringChair(){
        const chairs = document.querySelectorAll('.reserve-seat span')                            
        for (let j = 0; j < chairs.length; j++) { 
            if(this.isAllocated(chairs[j])){
                chairs[j].style.color = 'red'
            }else{
                chairs[j].style.color = 'rgb(3, 146, 3)'
            }                
        }
           
    }

    returnDatabase(){
        return this.database
    }

}