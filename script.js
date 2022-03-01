const h3 = document.querySelectorAll("h3")
const logo = document.querySelectorAll(".logo img")
const joystick = document.querySelectorAll(".joystick")
let contador = 0
logo.forEach(lg =>{
    console.log(lg)
    lg.addEventListener("mouseover", function(){
       contador++
       lg.src ="../src/images/LOGO1.png"
       if(contador == 2){
        lg.src ="../src/images/LOGO.png"
       }
       if(contador==2){
           contador=0
       }
       console.log(contador)
    })
})
joystick.forEach(jt =>{
    console.log(joystick)
    jt.addEventListener("mouseover", function(){
       contador++
       jt.src ="../src/images/joystick1.png"
       if(contador == 2){
        jt.src ="../src/images/joystick.png"
       }
       if(contador==2){
           contador=0
       }
       console.log(contador)
    })
})


   
        h3.forEach(element => {
            element.addEventListener("click", function(){
                
                console.log(element.after.content)
                
            })
        });
        
 
