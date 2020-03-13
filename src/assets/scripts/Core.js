import { TimelineMax } from 'gsap/TimelineMax';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const ScrollMagic = require('scrollmagic');

const ScrollController = new ScrollMagic.Controller();
const Core = {
    init() {
        this.navigations();
        this.sceneFirst();
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
    sceneFirst() {
        const tween = new TimelineMax();
        const wrapper = document.querySelector('.story-first');
        const mobiles = document.querySelectorAll('.story-first .mobile');
        const mobileLeft = mobiles[0];
        const mobileRight = mobiles[1];
        const itemLeft1 = document.querySelector('.item-left--first');
        const itemLeft2 = document.querySelector('.item-left--second');
        const itemLeft3 = document.querySelector('.item-left--third');
        const itemRight1 = document.querySelector('.item-right--first');
        const itemRight2 = document.querySelector('.item-right--second');
        const itemRight3 = document.querySelector('.item-right--third');
        const leftMatch = document.querySelector('.item-left--match');
        const rightMatch = document.querySelector('.item-right--match');

        tween.to(mobileLeft, 0.2, { opacity: 1 },0);
        tween.to(mobileRight, 0.2, { opacity: 1 },0);
        tween.to(itemLeft1, 0.2, { ease: 'power4.out', transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.3);
        tween.to(itemRight1, 0.2, { ease: 'power4.out', transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.35);
        tween.to(itemLeft2, 0.2, { ease: 'power4.out', transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.55);
        tween.to(itemRight2, 0.2, { ease: 'power4.out', transform: 'rotate(-45deg)', left: '-100%', top: '-100%' }, 0.6);
        tween.to(itemLeft3, 0.2, { ease: 'power4.out', transform: 'rotate(45deg)', right: '-100%', top: '-100%' }, 0.9);
        tween.to(itemRight3, 0.2, { ease: 'power4.out', transform: 'rotate(45deg)', right: '-100%', top: '-100%' }, 0.9);
        tween.to(leftMatch, 0.2, { opacity: 1 }, 1.3);
        tween.to(rightMatch, 0.2, { opacity: 1 }, 1.3);

        let scene = new ScrollMagic.Scene({
            triggerElement: wrapper,
            triggerHook: 0,
            offset: -150,
            duration: 2000,
        })
            .setPin(wrapper)
            .setTween(tween)
            .addIndicators()
            .addTo(ScrollController);
    },
};

export default Core;
