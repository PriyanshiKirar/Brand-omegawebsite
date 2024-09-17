var icon=document.querySelector('.nav2 #i');
icon.addEventListener('click',function(){
    gsap.to('.nav2 .elem',{
        left:'0%',
        duration:.5,
        ease:'expo.Inout',
    })
    gsap.to('.nav2 #icon',{
        display:'initial',
        duration:1,
        
    })
    gsap.to('.nav2 #i',{
        display:'none',
        duration:1,
        delay:-1,
    })
})
    

var icon2=document.querySelector('.menu #icon');
icon2.addEventListener('click',function(){
    gsap.to('.nav2 .elem',{
        left:'-100%',
        duration:.5,
        ease:'expo.Inout',
    })
    gsap.to('.nav2 #icon',{
        display:'none',
        duration:1,
        delay:-1,
        ease:'expo.Inout',
    })

    gsap.to('.nav2 #i',{
        display:'initial',
        duration:1,
        ease:'expo.Inout',
    })
})



