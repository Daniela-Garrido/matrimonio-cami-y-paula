// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Configura la fecha objetivo (25 de octubre de 2025 a las 18:00 hrs)
    const fechaBoda = new Date('2025-10-25T18:00:00').getTime();

    // Función para actualizar la cuenta regresiva
    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const distancia = fechaBoda - ahora;

        // Si la cuenta regresiva termina
        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('cuentaRegresiva').innerHTML = `
                <div class="text-center">
                    <h4 class="text-success">¡Hoy es el gran día!</h4>
                    <p class="lead">Nos vemos en la ceremonia a las 18:00 hrs</p>
                </div>`;
            return;
        }

        // Cálculos de tiempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Muestra el resultado con formato de 2 dígitos
        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    }

    // Ejecuta inmediatamente y luego cada segundo
    actualizarCuentaRegresiva();
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
});



//musica
 document.addEventListener('DOMContentLoaded', function() {
        const audio = document.getElementById('weddingAudio');
        const toggleBtn = document.getElementById('musicToggle');
        const musicIcon = document.getElementById('musicIcon');
        
        // Intenta reproducir (los navegadores pueden bloquear el autoplay)
        audio.volume = 0.1; // Volumen moderado
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Si el autoplay falla, muestra el estado pausado
                toggleBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            });
        }
        
        // Control para pausar/reanudar
        toggleBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                musicIcon.className = 'bi bi-music-note-beamed';
            } else {
                audio.pause();
                musicIcon.className = 'bi bi-play-fill';
            }
        });
        
        // Cambiar ícono cuando la canción termina (para loop)
        audio.addEventListener('ended', function() {
            musicIcon.className = 'bi bi-music-note-beamed';
        });
    });





    document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.querySelector('#regalosModal .btn-primary');
    
    copyBtn.addEventListener('click', function() {
        const bankInfo = `
        Banco: Nombre del Banco
        Tipo de Cuenta: Cuenta Corriente
        Número: 1234-5678-9012-3456
        Titular: Camila & Paula
        RUT: 12.345.678-9
        Email: regalos@nuestromatrimonio.com
        `;
        
        navigator.clipboard.writeText(bankInfo).then(() => {
            const originalHtml = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="bi bi-check2 me-2"></i> ¡Copiado!';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHtml;
            }, 2000);
        });
    });
});