import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';

    @Component({

        selector: 'navbar',
        directives: [ROUTER_DIRECTIVES],
        template: `
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" href="#">My angular 2 app</a>
                            </div>
                            <div>
                                <ul class="nav navbar-nav">
                                    <li class="active">
                                        <a class="nav-link"  [routerLink]="['/ProductForm']">Add Product</a>
                                    </li>
                                    <li>
                                        <a class="nav-link"  [routerLink]="['/ProductList']">Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                   `
       })
    export class NavbarComponent {
         constructor(public location: Location) {}
        
    }