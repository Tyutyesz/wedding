import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';

const Core = {
    init() {
        this.navigations();
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
};

window.addEventListener('load', () => {
    Core.init();
});
