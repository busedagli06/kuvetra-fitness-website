
const sliderResimler = document.querySelector(".slider-resimler");

const sagok = document.querySelector(".slider-ok-slider-sag");
const solok = document.querySelector(".slider-ok-slider-sol");

let currentPictureIndex = 0;

if (sliderResimler) {

    const resimler = sliderResimler.children;
    const toplamResim = resimler.length;
    let autoSlideInterval = null;

    function sonrakiResim() {

        if (toplamResim === 0) return;

        currentPictureIndex++;

        if (currentPictureIndex >= toplamResim) {
            currentPictureIndex = 0;
        }

        sliderResimler.style.transform =
            `translateX(-${currentPictureIndex * 100}%)`;
    }

    function oncekiResim() {

        if (toplamResim === 0) return;

        currentPictureIndex--;

        if (currentPictureIndex < 0) {
            currentPictureIndex = toplamResim - 1;
        }

        sliderResimler.style.transform =
            `translateX(-${currentPictureIndex * 100}%)`;
    }

    function resetAutoSlide() {
        if (toplamResim > 1) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(sonrakiResim, 5000);
        }
    }

    if (sagok) {
        sagok.addEventListener("click", () => {
            sonrakiResim();
            resetAutoSlide();
        });
    }

    if (solok) {
        solok.addEventListener("click", () => {
            oncekiResim();
            resetAutoSlide();
        });
    }

    resetAutoSlide();
}
