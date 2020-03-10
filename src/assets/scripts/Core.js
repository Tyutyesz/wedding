import { TimelineMax } from 'gsap/TimelineMax';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const ScrollMagic = require('scrollmagic');

const ScrollController = new ScrollMagic.Controller();
const Core = {
    init() {
        this.navigations();
        this.scrollMagic();
    },
    navigations() {
        const $btn = document.querySelector('.mobile-btn');
        const $menu = document.querySelector('.menu');
        let opened = false;
        const toggleNav = () => {
            if (!opened) {
                $menu.classList.add('opened');
            } else {
                $menu.classList.remove('opened');
            }
            opened = !opened;
        };
        $btn.addEventListener('click', toggleNav);
    },
    scrollMagic() {
        const tween = new TimelineMax();
        const wrapper = document.querySelector('.story');
        const itemLeft1 = document.querySelector('.item-left--first');
        const itemLeft2 = document.querySelector('.item-left--second');
        const itemRight1 = document.querySelector('.item-right--first');
        const itemRight2 = document.querySelector('.item-right--second');

        tween.to(itemLeft1, 0.4, { ease: "power4.out", transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.3);
        tween.to(itemRight1, 0.4, { ease: "power4.out", transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.3);
        tween.to(itemLeft2, 0.4, { ease: "power4.out", transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.8);
        tween.to(itemRight2, 0.4, { ease: "power4.out", transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.8);

        let scene = new ScrollMagic.Scene({
            triggerElement: wrapper,
            triggerHook: 0,
            offset: -100,
            duration: 1500,
        })
            .setPin(wrapper)
            .setTween(tween)
            .addTo(ScrollController);
    },
};

export default Core;
