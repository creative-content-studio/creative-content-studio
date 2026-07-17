// Smooth scrolling navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// Scroll reveal animation

const elements = document.querySelectorAll(
    ".section, .card, .process-card, .why-card, .portfolio-card"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},
{
threshold:0.15
}
);



elements.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});




// Update footer year automatically

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Creative Content Studio. All Rights Reserved.`;

}
