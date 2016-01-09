System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(location) {
                    this.location = location;
                }
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n                    <nav class=\"navbar navbar-default\">\n                        <div class=\"container-fluid\">\n                            <div class=\"navbar-header\">\n                                <a class=\"navbar-brand\" href=\"#\">My angular 2 app</a>\n                            </div>\n                            <div>\n                                <ul class=\"nav navbar-nav\">\n                                    <li class=\"active\">\n                                        <a class=\"nav-link\"  [routerLink]=\"['/ProductForm']\">Add Product</a>\n                                    </li>\n                                    <li>\n                                        <a class=\"nav-link\"  [routerLink]=\"['/ProductList']\">Products</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </nav>\n                   "
                    }), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], NavbarComponent);
                return NavbarComponent;
            })();
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=nav-bar.component.js.map