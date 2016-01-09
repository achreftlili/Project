System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', './product', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, product_1, router_1;
    var ProductFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductFormComponent = (function () {
                function ProductFormComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.model = new product_1.Product();
                    http.get('http://localhost:8000/products')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.succes(data); }, function () { return console.log('Random Quote Complete'); });
                }
                ProductFormComponent.prototype.onSubmit = function (model) {
                    var _this = this;
                    var product = new product_1.Product(model.id, model.name);
                    this.http.post('http://localhost:8000/products', JSON.stringify(product))
                        .subscribe(function (res) {
                        _this.products = res.json();
                    });
                    console.log(this.products);
                };
                ProductFormComponent.prototype.succes = function (data) {
                    this.model = data['hydra:member'][0];
                };
                ProductFormComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app-component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductFormComponent);
                return ProductFormComponent;
            })();
            exports_1("ProductFormComponent", ProductFormComponent);
        }
    }
});
//# sourceMappingURL=product-form.component.js.map