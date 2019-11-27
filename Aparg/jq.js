$(document).ready(function() {
    let slideIndex = 0;
    showSlides({
        slideShow: true,
        interval: 500,
        animation: 'slide'
    });

    function showSlides(object) {
        let i;
        let slides = $('li');
        let dots = $(".dot");
        let interval = object.interval;
        for (i = 0; i < slides.length; i++) {
            slides[i].innerHTML = '';
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        let temp;
        if (slides.eq(slideIndex - 1).data('type') == "video") {
            temp = document.createElement("video");
            temp.setAttribute("style", "width:100%")
            temp.setAttribute("controls", true);
            temp.setAttribute("src", slides.eq(slideIndex - 1).data('url'));
            temp.muted = "muted"
            temp.play();
            $(temp).on('ended', function() {
                setTimeout(showSlides, interval, object);
            })
        } else {
            temp = document.createElement("img");
            temp.setAttribute("src", slides.eq(slideIndex - 1).data('url'));
            temp.setAttribute("style", "width:100%");
            setTimeout(showSlides, interval, object);
        }
        slides.eq(slideIndex - 1).append(temp);
        slides.eq(slideIndex - 1).attr("style", "display-block");
        dots.eq(slideIndex - 1).addClass(" active");
    }
});
