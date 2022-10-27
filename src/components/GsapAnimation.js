import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export const ctx = function (animate) {
    gsap.to(".skills_section", {
        ease: "power.in",
        scrollTrigger: {
            trigger: ".skills_section",
            start: "400px bottom",
            end: "bottom top",
            scrub: 1,
            snap: {
                snapTo: 1 / 2,
                directional: false
            }
        }
    })
    gsap.to(".the quote_section", {
        scrollTrigger: {
            trigger: ".quote_section",
            // scrub: true,
            snap: {
                duration: { min: 0.2, max: 2 },
                ease: "power.in",
                snapTo: 1 / 2,
                directional: false
            }
        }
    })

    gsap.context(() => {

        /*     const timeline = gsap.timeline({ defaults: { duration: 1 } }) */



        /*  gsap.to(".hexagon .c", {
             scrollTrigger: {
                 trigger: ".c",
                 start: "0 100%",
                 end: "0 100",
                 scrub: true,
             },
             rotate: 180,
 
         }) */
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
        /*     gsap.matchMedia().add("(min-width:789px)", () => {
            })
            gsap.matchMedia().add("(max-width:789px)", () => {
                gsap.to(".hexagon img.tl", {
                    scrollTrigger: {
                        trigger: ".c",
                        scrub: 3
                    },
                    x: '-100%',
                    y: '+180%',
                },)
                gsap.to(".hexagon img.tr", {
                    scrollTrigger: {
                        trigger: ".c",
                        scrub: 3
                    },
                    x: '+100%',
                    y: '+180%',
                },)
            }) */




    }, animate)
}