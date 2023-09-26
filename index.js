import User from './src/User/index.js'
import Reserve from './src/reserve/index.js'

class Home {     

    handleRegister(){
        document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();            

            const form = new FormData(document.querySelector('form'))
            const dateOfBirth = new Date(form.get('dateOfBirth'))
            const dateOfBirthYear = dateOfBirth.getFullYear()
            const today = new Date()            

            if( Number(today.getFullYear()) -  Number(dateOfBirthYear) < 18){
                alert( 'Infelizmente você não poderá viajar conosco, pois é menor de idade')
                return
            }

            const user = new User(form.get('name'), form.get('cpf'), form.get('dateOfBirth'), form.get('bloodType'))                   
            user.create()
            
            document.querySelector('main').innerHTML = `
                
                <div class="container">
                    <h2>Selecione sua poltrona</h2>
                    <div class="reserve-seat"> </div>

                    <table>
                        <theader>
                         <tr class='first-line'>
                                <th>Poltrona</th>
                                <th>Nome</th>                            
                                <th>Sorotipagem</th>
                            </tr>
                        </theader>
                        <tbody>     </tbody>
                    </table>          

                    
                </div>
                
            `;
            
            const reserve = new Reserve();            
            reserve.addNumberSeats();
            reserve.coloringChair();
            reserve.show(document.querySelector('table tbody'));
            reserve.handleRegister();
            
            document.querySelector('h2').textContent = `${reserve.returnDatabase()[reserve.returnDatabase().length-1].name}, escolha sua poltrona.`
            const img = document.createElement('img')
            img.src = './assets/images/icons/logo.png';
            document.querySelector('li').appendChild(img)
          

            const carImg = document.createElement('img')
            carImg.src = './assets/images/side-view.png';
            carImg.setAttribute('class','car-img')
            document.querySelector('main .container').appendChild(carImg)

            alert(" Recrutado com sucesso.\n Para sua segurança aconselhamos que não desistada da viagem, pois estamos precisando muito de novos recrutas.")
        })


    }
}

const home  = new Home()
home.handleRegister()

