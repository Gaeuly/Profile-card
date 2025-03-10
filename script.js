/*========= SOCIAL ICON SHOW ========*/

const starsContainer = document.querySelector(".stars-container");

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    // Posisi random di layar

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = "-10px"; // Muncul dari atas

    // Ukuran bintang random

    let size = Math.random() * 5 + 2; // Antara 2px - 7px

    star.style.width = size + "px";

    star.style.height = size + "px";

    // Durasi jatuh random

    let duration = Math.random() * 3 + 2; // 2s - 5s

    star.style.animationDuration = duration + "s";

    starsContainer.appendChild(star);

    // Hapus bintang setelah jatuh

    setTimeout(() => {

        star.remove();

    }, duration * 1000);

}

// Buat bintang setiap 200ms

setInterval(createStar, 150);







const audio = document.getElementById("backgroundMusic");

const musicToggle = document.getElementById("musicToggle");

// Auto-play saat halaman dimuat (opsional)

window.addEventListener("load", () => {

    audio.volume = 0.5; // Set volume ke 50%

});

// Tombol Play/Pause

musicToggle.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        musicToggle.textContent = "🔇"; // Ikon Mute

    } else {

        audio.pause();

        musicToggle.textContent = "🔊"; // Ikon Play

    }

});





const showSocial = (toggleCard, socialCard) => {

    const toggle = document.getElementById(toggleCard),

          social = document.getElementById(socialCard)



    toggle.addEventListener('click', () => {



        if(social.classList.contains('animation')){

            social.classList.add('down-animation')



            setTimeout(() => {

                social.classList.remove('down-animation')

            }, 1000)



        }



        social.classList.toggle('animation')

    })

}

showSocial('card-toggle','card-social')