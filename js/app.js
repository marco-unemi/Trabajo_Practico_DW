const form = document.getElementById('userdata')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    if (!name) {
        alert('El nombre es requerido')
        return
    }

    if (!email) {
        alert('El correo es requerido')
        return
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert ('Correo inválido')
        return
    }

    if (!password.length >= 8) {
        alert('La contraseña debe tener al menos 8 caracteres')
        return
    }
})