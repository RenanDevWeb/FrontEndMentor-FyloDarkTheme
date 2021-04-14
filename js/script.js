// const Label = document.getElementById('errorMenssage').style.display = 'none'
// document.getElementById('buttonSend').addEventListener('click', function(event)  {
//     event.preventDefault();
// })

function  verificarConteudo() {
    const inputEmail = document.getElementById('email').value;
    if(inputEmail === ""){
    console.log(inputEmail)
    document.getElementById('errorMenssage').style.display = "flex"
    }else 
    if(inputEmail.length > 0 ){
    document.getElementById('errorMenssage').style.display = "none"
}
}



