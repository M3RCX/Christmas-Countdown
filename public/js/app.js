const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')



const SegundosContainer = document.querySelector('#segundos')
const MinutosContainer = document.querySelector('#minutos')
const horaContainer = document.querySelector('#horas')
const diaContainer = document.querySelector('#dias')
function contagem(){
   
    const ano = () =>{
        const Christmasyear = new Date().getFullYear()
        const ChristmasDay = new Date().getDate()
        const newChristmasTime = new Date(`December 25 ${Christmasyear} 00:00:00`)
        if(ChristmasDay > "25" ){
            const ChristmasNextYear = Christmasyear + 1
            const newChristmasTime2 = new Date(`December 25 ${ChristmasNextYear} 00:00:00`)
            const updateCountdown = () => {
                const currentTime = new Date()
                const difference = newChristmasTime2 - currentTime
                const dia = Math.floor(difference/ 1000 / 60 / 60 / 24)
                const hora = Math.floor(difference/ 1000 / 60 / 60) % 24
                const Minutos = Math.floor(difference/ 1000 / 60 ) % 60
                const Segundos = Math.floor(difference/ 1000 ) % 60
                
                SegundosContainer.textContent = Segundos < 10 ? '0' + Segundos : Segundos
                MinutosContainer.textContent = Minutos  < 10 ? '0' + Minutos : Minutos
                horaContainer.textContent = hora < 10 ? '0' + hora : hora
                diaContainer.textContent = dia
                
                
                
            }
            return updateCountdown()
        }else{
            const updateCountdown = () => {
                const currentTime = new Date()
                const difference = newChristmasTime - currentTime
                const dia = Math.floor(difference/ 1000 / 60 / 60 / 24)
                const hora = Math.floor(difference/ 1000 / 60 / 60) % 24
                const Minutos = Math.floor(difference/ 1000 / 60 ) % 60
                const Segundos = Math.floor(difference/ 1000 ) % 60
                
                SegundosContainer.textContent = Segundos < 10 ? '0' + Segundos : Segundos
                MinutosContainer.textContent = Minutos  < 10 ? '0' + Minutos : Minutos
                horaContainer.textContent = hora < 10 ? '0' + hora : hora
                diaContainer.textContent = dia
                
                
                
            }
            return updateCountdown()
            console.log(teste)

        }
        
    }
    
   

    setInterval(ano,1000)
}
    setTimeout(() =>{
        spinnerLoading.remove()
        countdownContainer.style.display = 'flex'
    }, 1000)

    contagem()
    

