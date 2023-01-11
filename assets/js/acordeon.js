let acordeonTriggers = document.querySelectorAll('.acordeon .trigger') //  nodelist
acordeonTriggers.forEach((trigger)=>{
    trigger.addEventListener('click', (e)=>{

        let acordeon = trigger.parentElement
        console.log('cliquei', acordeon)
        const isopen=acordeon.classList.contains('open')
        if(isopen){
            acordeon.classList.remove('open')
        }
        else{
            acordeon.classList.add('open')
        }
    })
})