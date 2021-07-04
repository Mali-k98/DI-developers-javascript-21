//alert('hello world!');
const faders = document.querySelectorAll
('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
){
    entries.forEach(entery => {
        if(!entery.isIntersecting) {
            return;
        }   else{
            entery.target.classList.add('appear');
            appearOnScroll.unobserve(entery.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fade);
})
