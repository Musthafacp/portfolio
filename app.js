const observer= new IntersectionObserver((entries) => {
    entries.foreach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add(".show");
        }
        else {
            entry.target.classList.remove(".show");
        }
    });
})


const hiddenelement = document.querySelectorAll(".inp");
hiddenelement.foreach((el) => observer.observe(el));