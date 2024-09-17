
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)






function performAnimations(){
    
    
function loaderAnimation(){
    var tl=gsap.timeline();
    tl.from(".loadertext #loader1",{
      opacity:0,
      y:30,
    //   delay:-1,
      ease:"expo.out",
      duration:2,
  
    })
    tl.from(".loadertext #loader2",{
        opacity:0,
        y:30,
        delay:-1,
        ease:"expo.out",
        duration:2,
    
      })
      tl.from(".loadertext #loader3",{
        opacity:0,
        y:30,
        delay:-1,
        ease:"expo.out",
        duration:2,
    
      })
    .to(".loadertext #loader1",{
      color:"white",
      y:-20,
      duration:1,
  
    })
    .to(".loadertext #loader2",{
      color:"white",
      y:-20,
      duration:1,
    },'elem')
    .to(".loadertext #loader1",{
   
      y:-30,
      opacity:0,
      duration:1,
  
    },"elem")
    .to(".loadertext #loader3",{
      y:-20,
      color:"white",
      duration:1,
    },"elem1")
    .to(".loadertext #loader2",{
      color:"white",
      y:-30,
      duration:1,
      opacity:0
    },"elem1")
    .to(".loadertext #loader3",{
      y:-30,
      duration:1,
      opacity:0,
    })
    .to(".loader",{
      y:700,
      duration:1,
      ease:"expo.Inout",
      borderRadius:'50%',
   
    })
    .to('.loader',{
        opacity:0,
    })
  
  }
  
  loaderAnimation();
    
    
    
    function page1Animation(){
        var tl11=gsap.timeline({
            scrollTrigger:{
                trigger:".img-container",
                scroller:"body",
                pin:true,
                scrub:true,
            }
        })
        tl11.to(".img-container video",{
          y:-100,
          duration:1,
        })
        .to('.overlay',{
        //   backgroundColor:"red",
        },"elem")
        tl11.to(".img-container video",{
            // y:-100,
            // left:"-30%",
            width:"100vw",
            scaleX:1.3,
    
            duration:2,
        },"elem")
        .to(".overlay h4",{
          y:-200,
          duration:1,
          
        },"elem")
        .to(".overlay h2",{
          y:-400,
          duration:1
        },"elem")
        .to(".img-containerleft",{
            x:-500,
            duration:2,
        },"elem")
        .to(".img-containerright",{
            x:500,
            duration:2,
        },"elem")
      // document.addEventListener("mousemove",function(dets){
      //   gsap.to(".page1cursor",{
      //     y:dets.y-35,
      //     x:dets.x-35,
      //   })
      // })
    }
    page1Animation();
    
    
    
    
    
    function page2Animation(){
        const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".page-2",
              start: "top 90%",
           
              scrub: true,
            }
          });
      
          timeline.fromTo("#img1", {
            y: "100%", /* Start position (bottom of the page) */
            rotateY: 90, /* Start with a rotation */
            opacity: 0, /* Start hidden */
            
          }, {
            duration:1.5,
            y: "50%", /* Move to 50% from the bottom */
            rotateY: 0, /* Rotate to 0 degrees */
            opacity: 1,
            ease: "power2.out",
          })
          .fromTo("#img2", {
            y: "100%", /* Start position (bottom of the page) */
            rotateY: 90, /* Start with a rotation */
            opacity: 0, /* Start hidden */
          }, {
            duration:1,
            y: "50%", /* Move to 50% from the bottom */
            rotateY: 0, /* Rotate to 0 degrees */
            opacity: 1,
            ease: "power2.out",
          })
          .fromTo("#img3", {
            y: "100%", /* Start position (bottom of the page) */
            rotateY: 90, /* Start with a rotation */
            opacity: 0, /* Start hidden */
          }, {
            duration:2,
            y: "50%", /* Move to 50% from the bottom */
            rotateY: 0, /* Rotate to 0 degrees */
            opacity: 1,
            ease: "power2.out",
          });
       
    }
         
    
    page2Animation()
     function page3Animation(){
        gsap.to(".img3left",{
            x:-100,
            rotate:"-5deg",
            duration:2,
            scrollTrigger:{
                trigger:".img3left",
                Scroller:'.main',
                scrub:true,
            }
        })
        gsap.to(".img3right",{
            x:100,
            rotate:"5deg",
            duration:2,
            scrollTrigger:{
                trigger:".img3right",
                Scroller:'.main',
                scrub:true,
            }
        })
     }
    
     page3Animation();
    function page4Animation(){
        
    var h1=document.querySelectorAll('.text h1');
    
    h1.forEach(function(elm){
        var h1text=elm.textContent;
        var splitted=h1text.split('');
        var clutter='';
        splitted.forEach(function(e){
            clutter+=`<span>${e}</span>`;
        })
        elm.innerHTML=clutter;
    })
    
    
    gsap.to(' .container4 .text h1 span',{
        y:-540,
       
        duration:.5,
        stagger:.1,
        delay:1,
    
        ease: Power1.easeInOut,
        scrollTrigger:{
            trigger:".container4",
            Scroller:".main",
            // scrub:1, 
            toggleActions: "play none none none", 
        }
    },'elem')
    
    
    gsap.to(' .container4 .text #h1 span',{
        y:-580,
       
        duration:.5,
        stagger:.1,
        delay:1,
        ease: Power1.easeInOut,
        scrollTrigger:{
            trigger:".page4",
            Scroller:".main",
            // scrub:1,
        }
    },'elem')
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page4',
            start: 'top top',
            scrub:2,
            scroller:'body',
            // markers:true,
            pin:true,
           
        }
    })
    tl1
    .to('.container4',{
        x:-2650,
        ease: Power1.easeInOut,
    
    })
    
    
    
    var tl2 = gsap.timeline({
        scrollTrigger: {
           scroller:'body',
           trigger:'.img4container',
    
        //    markers:true,
           scrub:true,
           start:"top top",
           pin:true,
        },
    })
    tl2 
    .from('.imgcenter1',{
     
        width:"20vw",
        height:"10vh"
    
    },"samename")
    
    tl2.from('.imgtop1',{
    
        width:"2vw",
       
    
    },"samename")
    tl2.from('.imgcenter2',{
    
        delay:.1,
        // width:"10vw",
        height:"2vh"
    
    },"samename")
    tl2.from('.imgcenter3',{
    
    delay:.3,
        width:"2vw"
    
    },"samename")
    tl2.from('.imgtop2',{
    
        width:"4vw",
        delay:.2
     
    },"samename")
    
    tl2.from('.imgtop3',{
        delay:.18,
        width:"10vw",
        height:"5vh"
    
    },"samename")
    
    
    tl2.from('.imgbotm2',{
    
        width:"10vw",
        height:"5vh"
     
    },"samename")
    
    tl2.from('.imgbotm1',{
        height:"3vw",
        width:'3vw'
      
    
    },"samename")
    
    tl2.from('.imgcenter4',{
        delay:.18,
        height:"3vw",
       
      
    
    },"samename")
    
    
    tl2.from('.imgbotm4',{
    
        delay:.18,
        height:"5vh"
     
    },"samename")
    
    tl2.from('.imgbotm3',{
        width:"1vw",
        delay:.18,
     
      
    
    },"samename")
    
    var tl3 = gsap.timeline({
        scrollTrigger: {
           scroller:'body',
           trigger:'.page5',
           scrub:true,
           start:"top top",

        },
    })
    
    tl3.to('.footer',{
        y:-10,
        duration:1,
        ease: Power1.easeInOut,
        // opacity:0,
        delay:-10
    },'samename')
    

    
    
    
    
    }
    
    page4Animation();
}


performAnimations();



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
        // rotate:'-360deg',
    })

    gsap.to('.nav2 #i',{
        display:'initial',
        duration:1,
        // delay:-1,
    })
})





function sheryanimation(){
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

sheryanimation();