// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Configura la fecha objetivo (20 de octubre de 2025)
    const fechaBoda = new Date('2025-10-20T00:00:00').getTime();

    // Función para actualizar la cuenta regresiva
    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const distancia = fechaBoda - ahora;

        // Cálculos de tiempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Muestra el resultado
        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

        // Si la cuenta regresiva termina
        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('cuentaRegresiva').innerHTML = "<h4 class='text-success'>¡Hoy es el gran día!</h4>";
        }
    }

    // Ejecuta inmediatamente y luego cada segundo
    actualizarCuentaRegresiva();
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
});


