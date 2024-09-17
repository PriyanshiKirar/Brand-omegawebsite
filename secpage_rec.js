


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        pin:true,
        scrub:true,
    }
})



tl.to('.imgcontainer .img1',{
    x:'-40%',
    duration:1,
    rotate:'-10deg'
  
    
},'elm')
tl.to('.img1 h3',{
    opacity:1,
    duration:.5,
},'elm')

tl.to('.img2 h3',{
    opacity:1,
    duration:.5,
},'elm')
tl.to('.img3 h3',{
    opacity:1,
    duration:.5,
},'elm')

tl.to('.imgcontainer .img3',{
    x:'40%',
    rotate:'10deg',
    duration:1,
  
},'elm')



var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        pin:true,
        scrub:true,
    }
})



tl2.to('.imgcontainer .img21',{
    x:'-50%',
    duration:1,
  
    
},'elm2')
tl2.to('.img21 h3',{
    opacity:1,
    duration:.5
},'elm2')
tl2.to('.img22 h3',{
    opacity:1,
    duration:.5,
},'elm2')

tl2.to('.imgcontainer .img23',{
    x:'50%',
    duration:1,
  
},'elm2')
tl2.to('.img23 h3',{
    opacity:1,
    duration:.5
},'elm2')



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
        rotate:'360deg',
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