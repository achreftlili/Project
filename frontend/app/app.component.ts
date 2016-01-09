    import {Component}         from 'angular2/core';
    import {ProductFormComponent} from './modules/products/ts/components/product-form.component'
    import {ProductListComponent} from './modules/products/ts/components/product-list.component'
    import {NavbarComponent} from './modules/products/ts/components/nav-bar.component'
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
    
    @Component({
        selector: 'my-app',
        template: `
            <navbar></navbar>
            <router-outlet></router-outlet>
                  `,
        directives: [ROUTER_DIRECTIVES, NavbarComponent]
    })

    @RouteConfig([
      {path: '/add', name: 'ProductForm', component: ProductFormComponent} ,
      {path: '/list', name: 'ProductList', component: ProductListComponent} 
   ])
    export class AppComponent { }
