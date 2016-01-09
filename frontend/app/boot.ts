    import {bootstrap}    from 'angular2/platform/browser';
    import {AppComponent} from './app.component';
    import {HTTP_PROVIDERS} from "angular2/http";
    import {ROUTER_PROVIDERS, 
            APP_BASE_HREF,
            ROUTER_DIRECTIVES,
            RouteConfig,
            Location} from 'angular2/router';
    /*
     * Injectables
     */
    import { servicesInjectables } from './modules/products/ts/services/Service';
    bootstrap(AppComponent,[HTTP_PROVIDERS ,ROUTER_PROVIDERS ,servicesInjectables]).catch(err => console.error(err));
