import User from './src/User/index.js'
import Database from './src/Database/index.js'

class Home { 
    handleRegister(){
        document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();            

            const form = new FormData(document.querySelector('form'))
            
            const user = new User(form.get('name'), form.get('cpf'), form.get('dateOfBirth'), form.get('bloodType'))                   
            user.save()
            window.location.href = './Reserve/index.html';
        })
    }
}

const home  = new Home()
home.handleRegister()