import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
    private router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;

        config.title = 'Aurelia Blog';

        config.map([
            { route: ['', 'home'], name: 'homeRoute', moduleId: PLATFORM.moduleName('./routes/home'), nav: true,  title: 'Home' },
            { route: '/post/:postSlug', name: 'postRoute', moduleId: PLATFORM.moduleName('./routes/post'), nav: true,  title: 'Post' }
        ]);
    }
}
