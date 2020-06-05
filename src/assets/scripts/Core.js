import {TimelineMax} from 'gsap/TimelineMax';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const ScrollMagic = require('scrollmagic');

const Controller = new ScrollMagic.Controller();

const Core = {
    init() {
        this.navigations();
        //this.story();
    },
    navigations() {
        const $header = document.querySelector('header');
        const $content = document.querySelector('main');
        const wWidth = window.innerWidth;
        const $hamburger = document.getElementById('hamburger');
        const $links = $header.querySelectorAll('a');
        let bounds = $content.getBoundingClientRect();

        const watchScroll = () => {
            bounds = $content.getBoundingClientRect();
            if (bounds.y < -20) {
                $header.classList.add('scrolled');
            } else {
                $header.classList.remove('scrolled');
            }
        };
        watchScroll();
        window.addEventListener('scroll', watchScroll);

        const closeMenu = () => {
            $hamburger.checked = false;
        };

        if (wWidth < 768) {
            $links.forEach((element) => {
                element.addEventListener('click', closeMenu);
            });
        }
    },
    story() {
        /* scrollspy pen: https://codepen.io/zchee/pen/ogzvZZ */
        const $story1Wrapper = document.getElementById('story-1'),
            $story2Wrapper = document.getElementById('story-2'),
            $story3Wrapper = document.getElementById('story-3'),
            $story4Wrapper = document.getElementById('story-4'),
            $story1Header = $story1Wrapper.querySelector('h3'),
            $story2Header = $story2Wrapper.querySelector('h3'),
            $story3Header = $story3Wrapper.querySelector('h3'),
            $story4Header = $story4Wrapper.querySelector('h3'),
            $story1Paragraph = $story1Wrapper.querySelector('p'),
            $story2Paragraph = $story2Wrapper.querySelector('p'),
            $story3Paragraph = $story3Wrapper.querySelector('p'),
            $story4Paragraph = $story4Wrapper.querySelector('p');
        const time = 0;
        const speed = 1.5;
        let tween = new TimelineMax();

        tween.to($story1Wrapper, speed, { opacity: 1, top: 0, ease: 'power4.out' }, 0);
        tween.to($story1Header, speed, { opacity: 1, top: 0, ease: 'none' }, 0.5);
        tween.to($story1Paragraph, speed, { opacity: 1, top: 0, ease: 'none' }, 1);

        tween.to($story2Wrapper, speed, { opacity: 1, top: 0, ease: 'power4.out' }, 3.5);
        tween.to($story2Header, speed, { opacity: 1, top: 0, ease: 'none' }, 4);
        tween.to($story2Paragraph, speed, { opacity: 1, top: 0, ease: 'none' }, 4.5);

        tween.to($story3Wrapper, speed, { opacity: 1, top: 0, ease: 'power4.out' }, 7);
        tween.to($story3Header, speed, { opacity: 1, top: 0, ease: 'none' }, 7.5);
        tween.to($story3Paragraph, speed, { opacity: 1, top: 0, ease: 'none' }, 8);

        tween.to($story4Wrapper, speed, { opacity: 1, top: 0, ease: 'power4.out' }, 10.5);
        tween.to($story4Header, speed, { opacity: 1, top: 0, ease: 'none' }, 11);
        tween.to($story4Paragraph, speed, { opacity: 1, top: 0, ease: 'none' }, 11.5);

        let scene = new ScrollMagic.Scene({
            triggerElement: '#story',
            duration: 4000,
            triggerHook:0,
        })
            .setPin('#story')
            .setTween(tween)
            .addTo(Controller);
        scene.update(true);
    },
};

export default Core;
