// 'use strict';

// class panel {
//     constructor() {
//         this.section = document.createElement('section');
//         this.div = document.createElement('div');
//         this.img = document.createElement('img');
//         this.img.src = this.getRomdomImg();

//         // point? this.timeout = undifined
//         this.timeout = undefined;

//         this.div.appendChild(this.img);
//         this.stopBtn = document.createElement('button');
//         this.stopBtn.classList.add('stop','inactive');
//         this.stopBtn.textContent = 'STOP';
//         this.stopBtn.addEventListener('click',() => {
//             if(this.stopBtn.classList.contains('inactive')) {
//                 return;
//             }
//             this.stopBtn.classList.add('inactive');
//             clearInterval(this.timeout);

//             panelsLeft--;

//             if(panelsLeft === 0) {
//                 spinBtn.classList.remove('inactive');
//                 panelsLeft = 3;
//                 checkResult();
//             }
//         })

//         this.section.appendChild(this.div);
//         this.section.appendChild(this.stopBtn);

//         const container = document.querySelector('.container');
//         container.appendChild(this.section);
//     }

//     getRomdomImg() {
//         this.imgs = ['img/bell.png','img/cherry.png','img/seven.png'];
//         return this.imgs[Math.floor(Math.random() * this.imgs.length)];
//     }
//     spin() {
//         this.img.src = this.getRomdomImg();
//         this.timeout = setTimeout(() => {
//             this.spin();
//         }, 50);
//     }

//     isUnmatched(p1,p2) {
//         return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
//     }

//     unmatch() {
//         this.img.classList.add('unmatch');
//     }

//     isActivate() {
//         this.img.classList.remove('unmatch');
//         this.stopBtn.classList.remove('inactive');

//     }
// }

// function checkResult() {
//     if(panels[0].isUnmatched(panels[1],panels[2])) {
//         panels[0].unmatch();
//     }
//     if(panels[1].isUnmatched(panels[2],panels[0])) {
//         panels[1].unmatch();
//     }
//     if(panels[2].isUnmatched(panels[0],panels[1])) {
//         panels[2].unmatch();
//     }
// }

// const panels = [
//     new panel(),
//     new panel(),
//     new panel(),
// ]

// let panelsLeft = 3;

// const spinBtn = document.querySelector('.spin');

// spinBtn.addEventListener('click',() => {
//     if(spinBtn.classList.contains('inactive')) {
//         return;
//     }
//     spinBtn.classList.add('inactive');
    
//     panels.forEach(panel => {
//         panel.spin();
//         panel.isActivate();
//     }) 
// })

class Panel {
    constructor() {
        const container = document.querySelector('.slotcontainer');
        container.classList.add('slotcontainer');
        this.intervalId = undefined;
        this.panel = document.createElement('div');
        this.panel.classList.add('panel');
        this.img = document.createElement('img');
        this.img.src = 'img/bell.png';
        this.stop = document.createElement('button');
        this.stop.classList.add('stop','inactive');
        this.stop.textContent = 'STOP';
        this.stop.addEventListener('click',() => {
            if(this.stop.classList.contains('inactive')) {
                return;
            }
            this.stop.classList.add('inactive');
            clearTimeout(this.intervalId);
            slotLeft--;
            if(slotLeft === 0) {
                slotLeft = 3;
                spin.classList.remove('inactive');
                result();
            }
        })

        this.panel.appendChild(this.img);
        this.panel.appendChild(this.stop);
        container.appendChild(this.panel);
    }

    getRandomImg() {
        this.imgs = [
            'img/bell.png',
            'img/cherry.png',
            'img/seven.png',
        ]
        return this.imgs[Math.floor(Math.random() * this.imgs.length)];
    }

    start() {
        this.img.src = this.getRandomImg();
        this.intervalId = setTimeout(() => {
            this.start();
        }, 50);
    }

    isActivate() {
        this.stop.classList.remove('inactive');
        this.img.classList.remove('unmatched');
    }

    isUnmatch(p1,p2) {
        return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatched() {
        this.img.classList.add('unmatched');
    }
}

function result() {
    if(panels[0].isUnmatch(panels[1],panels[2])) {
        panels[0].unmatched();
    }
    if(panels[1].isUnmatch(panels[2],panels[0])) {
        panels[1].unmatched();
    }
    if(panels[2].isUnmatch(panels[0],panels[1])) {
        panels[2].unmatched();
    }
}

const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
];

const spin = document.querySelector('.spin');
spin.addEventListener('click',() => {
    if(spin.classList.contains('inactive')) {
        return;
    }
    spin.classList.add('inactive');
    panels.forEach((panel) => {
        panel.start();
        panel.isActivate();
    })
})

let slotLeft = 3;

