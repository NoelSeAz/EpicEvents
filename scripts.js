document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.circle');
    const home = document.getElementById('home');
    const spheres = document.querySelectorAll('.sphere');
    const contactButton = document.getElementById('contactButton');
    const backButton = document.getElementById('backButton'); // Verificamos que el botón existe

    // Verifica si el círculo y el home existen antes de agregar eventos
    if (circle && home) {
        circle.addEventListener('click', function() {
            home.style.transition = 'transform 1s ease-in-out';
            home.style.transform = 'translateY(-100vh)';
            circle.style.transition = 'transform 1s ease-in-out';
            circle.style.transform = 'translateY(-100vh)';

            setTimeout(function() {
                window.location.href = 'about.html';
            }, 1000);
        });
    }

    // Añadir evento a cada esfera
    spheres.forEach(sphere => {
        sphere.addEventListener('click', function() {
            const section = sphere.id;
            showModal(section);
        });
    });

    // Verificar si el botón de contacto existe antes de añadir el evento
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }

    // Verificar si el botón de volver existe antes de añadir el evento
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});

function showModal(sphereId) {
    const modalText = document.getElementById('modalText');
    const modalBackground = document.getElementById('modalBackground');
    const closeButton = document.querySelector('.close');

    const popupContent = {
        sphere1: "Nuestra misión es proporcionar...",
        sphere2: "Nuestro equipo está compuesto por...",
        sphere3: "Nuestra historia comenzó en..."
    };

    modalText.textContent = popupContent[sphereId] || 'Información no disponible';
    modalBackground.style.display = 'flex';

    closeButton.addEventListener('click', function() {
        modalBackground.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modalBackground) {
            modalBackground.style.display = 'none';
        }
    }
}

function closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    modalBackground.style.display = 'none';
}
