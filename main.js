document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80, /*Este es para establecer la distancia entre las aimgenes*/
        shift: 5,
        padding: 5,
        numVisible: 3, /*Este es para mostar las imagenes principales la del centro y las dos de atras*/
        indicators: true,
        noWrap: false
    });

});