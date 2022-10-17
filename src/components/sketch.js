
import r1 from '../assets/robato/0001.png';
import r2 from '../assets/robato/0002.png';
import r3 from '../assets/robato/0003.png';
import r4 from '../assets/robato/0004.png';
import r5 from '../assets/robato/0005.png';
import r6 from '../assets/robato/0006.png';
import r7 from '../assets/robato/0007.png';
import r8 from '../assets/robato/0008.png';
import r9 from '../assets/robato/0009.png';
import r10 from '../assets/robato/0010.png';
import r11 from '../assets/robato/0011.png';
import r12 from '../assets/robato/0012.png';
import r13 from '../assets/robato/0013.png';
import r14 from '../assets/robato/0014.png';
import r15 from '../assets/robato/0015.png';
import r16 from '../assets/robato/0016.png';
import r17 from '../assets/robato/0017.png';
import r18 from '../assets/robato/0018.png';
import r19 from '../assets/robato/0019.png';
import r20 from '../assets/robato/0020.png';
import r21 from '../assets/robato/0021.png';
import r22 from '../assets/robato/0022.png';
import r23 from '../assets/robato/0023.png';
import r24 from '../assets/robato/0024.png';
import r25 from '../assets/robato/0025.png';
import r26 from '../assets/robato/0026.png';
import r27 from '../assets/robato/0027.png';
import r28 from '../assets/robato/0028.png';
import r29 from '../assets/robato/0029.png';
import r30 from '../assets/robato/0030.png';
import r31 from '../assets/robato/0031.png';
import r32 from '../assets/robato/0032.png';
import r33 from '../assets/robato/0033.png';
import r34 from '../assets/robato/0034.png';
import r35 from '../assets/robato/0035.png';
import r36 from '../assets/robato/0036.png';
import r37 from '../assets/robato/0037.png';
import r38 from '../assets/robato/0038.png';
import r39 from '../assets/robato/0039.png';
import r40 from '../assets/robato/0040.png';
import r41 from '../assets/robato/0041.png';
import r42 from '../assets/robato/0042.png';
import r43 from '../assets/robato/0043.png';

let images
let imageIndex = 0
export function sketch(p) {
    let rotation = 0

    p.preload = function () {
        images = [
            p.loadImage(r1),
            p.loadImage(r2),
            p.loadImage(r3),
            p.loadImage(r4),
            p.loadImage(r5),
            p.loadImage(r6),
            p.loadImage(r7),
            p.loadImage(r8),
            p.loadImage(r9),
            p.loadImage(r10),
            p.loadImage(r11),
            p.loadImage(r12),
            p.loadImage(r13),
            p.loadImage(r14),
            p.loadImage(r15),
            p.loadImage(r16),
            p.loadImage(r17),
            p.loadImage(r18),
            p.loadImage(r19),
            p.loadImage(r20),
            p.loadImage(r21),
            p.loadImage(r22),
            p.loadImage(r23),
            p.loadImage(r24),
            p.loadImage(r25),
            p.loadImage(r26),
            p.loadImage(r27),
            p.loadImage(r28),
            p.loadImage(r29),
            p.loadImage(r30),
            p.loadImage(r31),
            p.loadImage(r32),
            p.loadImage(r33),
            p.loadImage(r34),
            p.loadImage(r35),
            p.loadImage(r36),
            p.loadImage(r37),
            p.loadImage(r38),
            p.loadImage(r39),
            p.loadImage(r40),
            p.loadImage(r41),
            p.loadImage(r42),
            p.loadImage(r43),
        ]
    }

    p.setup = function () {
        p.createCanvas(600, 600)
        p.frameRate(12)
    }

    p.draw = function () {
        p.background(images[imageIndex])
        p.image(images[imageIndex], 0, 0, 600, 600)

        moveFrame()
        p.redraw()
        /*      if (p.mouseIsPressed) {
                 console.log('fsdfds');
                 p.fill(0)
             } else {
                 p.fill(255)
             }
             p.ellipse(p.mouseX, p.mouseY, 80, 80) */


    }

    const moveFrame = function () {
        if (imageIndex < images.length - 1) {
            imageIndex++
            // imageIndex = 0
        }
    }
}

