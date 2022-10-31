import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export const ctx = function (animate, iconsAnimationRef) {
    /*  gsap.to( {
        ease: "power.in",
        scrollTrigger: {
            trigger: ".skills_section",
            start: "400px bottom",
            end: "bottom top",
            scrub: 1,
            markers:true,
            snap: {
                snapTo: 1 / 2,
                directional: false
            }
        }
    })  */
    ScrollTrigger.create({
        /* trigger: ".snapTogoalsection",
        snap: {
            snapTo: 1 ,
            directional: false,
            ease: "power.in"
        } */
        /*  onUpdate: self => console.log("velocity:", self.getVelocity()) */
    });
    ScrollTrigger.create({
        trigger: ".snapToskillssection",
        start: "top 70% ",
        /*   snap: {
              snapTo: 1,
              directional: false,
              ease: "power.in"
          }, */
        onEnter: () => {
            gsap.to('.skillsh1', { opacity: 1, y: '-1rem',delay:6,duration:2 })
            console.count();
            iconsAnimationRef.current.currentTime = 0
            iconsAnimationRef.current.play()
        }
        //onUpdate: self => console.log("velocity:", self.getVelocity()) 
    });


    /*    gsap.to(".snapTosection", {
           scrollTrigger: {
               trigger: ".snapBisection",
               markers:false,
               // scrub: true,
               snap: {
                   duration: { min: 0.2, max: 2 },
                   ease: "power.in",
                   snapTo: 1 / 2,
                   directional: false
               }
           }
       }) */

    /*  gsap.context(() => {
 
         gsap.fromTo(".hexagon h2.skill", { opacity: 0 }, {
             scrollTrigger: {
                 scrub: 3,
                 trigger: ".c",
                 start: "bottom 100%",
                 end: "top 0%",
 
             },
             duration: 2,
             translateY: 300,
             opacity: 1,
             ease: "power3.in",
         })
         gsap.fromTo(".hexagon p.skill", { opacity: 0 }, {
             scrollTrigger: {
                 scrub: 3,
                 trigger: ".c",
                 start: "bottom 100%",
                 end: "top 0%",
             },
             translateY: 400,
             opacity: .6,
             ease: "power3.in",
             duration: 2
         })
         gsap.to(".hexagon img.br", {
             scrollTrigger: {
                 trigger: ".c",
                 scrub: 3
             },
             x: '+50%',
             y: '+80%',
         },)
         gsap.to(".hexagon img.bl", {
             scrollTrigger: {
                 trigger: ".c",
                 scrub: 3
             },
             x: '-50%',
             y: '+80%',
         },)
 
         gsap.to(".hexagon img.tl", {
             scrollTrigger: {
                 trigger: ".c",
                 scrub: 3
             },
             x: '-100%',
             y: '+80%',
         },)
         gsap.to(".hexagon img.tr", {
             scrollTrigger: {
                 trigger: ".c",
                 scrub: 3
             },
             x: '+100%',
             y: '+80%',
         },)
     }, animate) */
}