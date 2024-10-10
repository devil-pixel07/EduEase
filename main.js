const ScrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", 
    {
        ...ScrollRevealOption,
        origin: "right",
    });

ScrollReveal().reveal(".header_content h1", {  
    ...ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_content p", {  
    ...ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_content form", {  
    ...ScrollRevealOption,
    delay:1000,
});
