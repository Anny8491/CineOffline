// Validación del formulario de registro
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioRegistro');
    
    if (formulario) {
        formulario.addEventListener('submit', validarFormulario);
        
        // Validación en tiempo real para el campo de email
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validarEmail(this);
            });
        }
        
        // Validación en tiempo real para el campo de teléfono
        const telefonoInput = document.getElementById('telefono');
        if (telefonoInput) {
            telefonoInput.addEventListener('input', function() {
                // Permitir solo números
                this.value = this.value.replace(/[^0-9]/g, '');
            });
            
            telefonoInput.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    validarTelefono(this);
                }
            });
        }
        
        // Validación y medidor de fortaleza para la contraseña
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', function() {
                medirFortalezaPassword(this);
            });
            
            passwordInput.addEventListener('blur', function() {
                validarPassword(this);
            });
        }
        
        // Validación para confirmar contraseña
        const confirmarPasswordInput = document.getElementById('confirmarPassword');
        if (confirmarPasswordInput) {
            confirmarPasswordInput.addEventListener('blur', function() {
                validarConfirmarPassword(this);
            });
        }
        
        // Mostrar/ocultar contraseña
        const toggleButtons = document.querySelectorAll('.password-toggle');
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.previousElementSibling;
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                // Cambiar el ícono
                const svg = this.querySelector('svg');
                if (type === 'text') {
                    svg.innerHTML = `
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    `;
                } else {
                    svg.innerHTML = `
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    `;
                }
            });
        });
    }
});

// Función principal de validación del formulario
function validarFormulario(event) {
    event.preventDefault();
    
    let esValido = true;
    
    // Validar nombre
    const nombreInput = document.getElementById('nombre');
    if (!validarCampoRequerido(nombreInput)) {
        mostrarError(nombreInput, 'Por favor, ingresa tu nombre completo');
        esValido = false;
    } else {
        ocultarError(nombreInput);
    }
    
    // Validar email
    const emailInput = document.getElementById('email');
    if (!validarEmail(emailInput)) {
        esValido = false;
    }
    
    // Validar teléfono (si está presente)
    const telefonoInput = document.getElementById('telefono');
    if (telefonoInput.value.trim() !== '' && !validarTelefono(telefonoInput)) {
        esValido = false;
    }
    
    // Validar contraseña
    const passwordInput = document.getElementById('password');
    if (!validarPassword(passwordInput)) {
        esValido = false;
    }
    
    // Validar confirmación de contraseña
    const confirmarPasswordInput = document.getElementById('confirmarPassword');
    if (!validarConfirmarPassword(confirmarPasswordInput)) {
        esValido = false;
    }
    
    // Validar términos y condiciones
    const terminosInput = document.getElementById('terminos');
    if (!terminosInput.checked) {
        mostrarError(terminosInput, 'Debes aceptar los términos y condiciones');
        esValido = false;
    } else {
        ocultarError(terminosInput);
    }
    
    // Si todo es válido, mostrar mensaje de éxito
    if (esValido) {
        document.getElementById('form-success').style.display = 'block';
        formulario.reset();
        
        // Simular redirección después de 3 segundos
        setTimeout(function() {
            // Aquí iría la redirección real
            // window.location.href = 'login.html';
            document.getElementById('form-success').style.display = 'none';
        }, 3000);
    }
    
    return esValido;
}

// Validar campo requerido
function validarCampoRequerido(input) {
    return input.value.trim() !== '';
}

// Validar email con expresión regular
function validarEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const esValido = emailRegex.test(input.value);
    
    if (!validarCampoRequerido(input)) {
        mostrarError(input, 'Por favor, ingresa tu correo electrónico');
        return false;
    } else if (!esValido) {
        mostrarError(input, 'Por favor, ingresa un correo electrónico válido');
        return false;
    } else {
        ocultarError(input);
        return true;
    }
}

// Validar teléfono
function validarTelefono(input) {
    // Eliminar cualquier caracter que no sea número
    const numeroLimpio = input.value.replace(/\D/g, '');
    
    if (numeroLimpio.length < 9) {
        mostrarError(input, 'El número de teléfono debe tener al menos 9 dígitos');
        return false;
    } else {
        ocultarError(input);
        return true;
    }
}

// Validar contraseña
function validarPassword(input) {
    const valor = input.value;
    
    if (!validarCampoRequerido(input)) {
        mostrarError(input, 'Por favor, ingresa una contraseña');
        return false;
    } else if (valor.length < 8) {
        mostrarError(input, 'La contraseña debe tener al menos 8 caracteres');
        return false;
    } else {
        ocultarError(input);
        return true;
    }
}

// Validar confirmación de contraseña
function validarConfirmarPassword(input) {
    const passwordInput = document.getElementById('password');
    
    if (!validarCampoRequerido(input)) {
        mostrarError(input, 'Por favor, confirma tu contraseña');
        return false;
    } else if (input.value !== passwordInput.value) {
        mostrarError(input, 'Las contraseñas no coinciden');
        return false;
    } else {
        ocultarError(input);
        return true;
    }
}

// Medir fortaleza de la contraseña
function medirFortalezaPassword(input) {
    const valor = input.value;
    const strengthMeter = input.parentElement.querySelector('.password-strength-meter');
    const strengthText = input.parentElement.querySelector('.strength-text');
    
    // Eliminar clases anteriores
    strengthMeter.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
    
    if (valor.length === 0) {
        strengthMeter.style.width = '0';
        strengthText.textContent = '';
        return;
    }
    
    // Criterios de fortaleza
    const tieneMayusculas = /[A-Z]/.test(valor);
    const tieneMinusculas = /[a-z]/.test(valor);
    const tieneNumeros = /[0-9]/.test(valor);
    const tieneEspeciales = /[^A-Za-z0-9]/.test(valor);
    
    const criteriosCumplidos = [
        valor.length >= 8,
        tieneMayusculas,
        tieneMinusculas,
        tieneNumeros,
        tieneEspeciales
    ].filter(Boolean).length;
    
    // Determinar fortaleza
    if (criteriosCumplidos <= 2) {
        strengthMeter.classList.add('strength-weak');
        strengthText.textContent = 'Débil';
    } else if (criteriosCumplidos <= 4) {
        strengthMeter.classList.add('strength-medium');
        strengthText.textContent = 'Media';
    } else {
        strengthMeter.classList.add('strength-strong');
        strengthText.textContent = 'Fuerte';
    }
}

// Mostrar mensaje de error
function mostrarError(input, mensaje) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorElement.textContent = mensaje;
    errorElement.classList.add('visible');
}

// Ocultar mensaje de error
function ocultarError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('visible');
}