<<<<<<< HEAD
(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
})();
=======

>>>>>>> d9e2a35cb9f33357f90db407f30545ae19da584a
