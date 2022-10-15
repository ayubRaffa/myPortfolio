import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export const ctx = function (animate) {

    gsap.context(() => {

        /*     const timeline = gsap.timeline({ defaults: { duration: 1 } }) */
        gsap.to(".hexagon .c", {
            scrollTrigger: {
                trigger: ".c",
                start: "0 100%",
                end: "0 100",
                scrub: true,
            },
            rotate: 180,

        })
        gsap.fromTo(".hexagon h2.skill", { opacity: 0 }, {
            scrollTrigger: {
                scrub: 3,
                trigger: ".c",
                start: "center 100%",
                end: "center 0%"
            },
            translateY: 300,
            opacity: 1,
            ease: "power.in",
        })
        gsap.fromTo(".hexagon p.skill", { opacity: 0 }, {
            scrollTrigger: {
                scrub: 3,
                trigger: ".c",
            },
            translateY: 400,
            opacity: .6,
            ease: "power.in",

        })
        gsap.to(".hexagon img.br", {
            scrollTrigger: {
                trigger: ".c",
                scrub: true
            },
            x: '+=50%',
            y: '+=80%',
        },)
        gsap.to(".hexagon img.bl", {
            scrollTrigger: {
                trigger: ".c",
                scrub: true
            },
            x: '-=50%',
            y: '+=80%',
        },)

        gsap.matchMedia().add("(min-width:789px)", () => {
            gsap.to(".hexagon img.tl", {
                scrollTrigger: {
                    trigger: ".c",
                    scrub: true
                },
                x: '-=100%',
                y: '+=80%',
            },)
            gsap.to(".hexagon img.tr", {
                scrollTrigger: {
                    trigger: ".c",
                    scrub: true
                },
                x: '+=100%',
                y: '+=80%',
            },)
        })
        gsap.matchMedia().add("(max-width:789px)", () => {
            gsap.to(".hexagon img.tl", {
                scrollTrigger: {
                    trigger: ".c",
                    scrub: true
                },
                x: '-=100%',
                y: '+=180%',
            },)
            gsap.to(".hexagon img.tr", {
                scrollTrigger: {
                    trigger: ".c",
                    scrub: true
                },
                x: '+=100%',
                y: '+=180%',
            },)
        })


    }, animate)
}