import User from './src/User/index.js'
import Reserve from './src/reserve/index.js'

class Home {     

    handleRegister(){
        document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();            

            const form = new FormData(document.querySelector('form'))
            
            const user = new User(form.get('name'), form.get('cpf'), form.get('dateOfBirth'), form.get('bloodType'))                   
            user.create()
            
            document.querySelector('main').innerHTML = `
                
                <div class="container">
                    <h2>Selecione sua poltrona</h2>
                    <div class="reserve-seat"> </div>
                    <table>
                        <tr class='first-line'>
                            <th>Poltrona</th>
                            <th>Nome</th>                            
                            <th>Sorotipagem</th>
                        </tr>
                    </table>            
                </div>
                
            `;
            
            const reserve = new Reserve();            
            reserve.addNumberSeats();
            reserve.coloringChair();
            reserve.show(document.querySelector('table'));
            reserve.handleRegister();
            
            document.querySelector('h2').textContent = `${reserve.returnDatabase()[reserve.returnDatabase().length-1].name}, escolha sua poltrona.`
        })


    }
}

const home  = new Home()
home.handleRegister()

