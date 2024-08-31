window.onload = () => {
    window.addEventListener('scroll', () => {


        const currentScroll = window.pageYOffset
        const opcaticyNum =  ((currentScroll*4) / innerHeight).toFixed(2)

        document.querySelector("#navbar").style.backgroundColor = `rgba(0,0,0, ${Number(opcaticyNum)})`
    
    })
    
}




const scrollToId = (id) => {
    var element = document.querySelector(id);
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}


