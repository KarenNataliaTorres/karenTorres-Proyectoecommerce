const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 595971488547;
/* let win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
%20${apellido}, Asunto:%20${mensaje}`,'_blank');       
} */
let win= window.open(traerApiWpp);
}
evento.addEventListener('click', enviarFormulario)

const traerApiWpp = fetch(`https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`)
.then((res) => res.json())
.then((data)=> {window.open(data)});

