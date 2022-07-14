/**
 * Recuperar los datos del formulario en una alerta.
 */
document.querySelector('form')
    .addEventListener('submit', e =>{
        e.preventDefault()
        const dataForm = Object.fromEntries(new FormData(e.target))
        alert(JSON.stringify(dataForm))
    })