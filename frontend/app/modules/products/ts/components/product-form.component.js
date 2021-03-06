System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', '../Entity/product', 'angular2/router', '../services/Service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, product_1, router_1, Service_1;
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
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }],
        execute: function() {
            ProductFormComponent = (function () {
                function ProductFormComponent(http, productsService) {
                    this.http = http;
                    this.productsService = productsService;
                    this.added = new core_1.EventEmitter();
                    this.model = new product_1.Product();
                }
                ProductFormComponent.prototype.onSubmit = function (model) {
                    var _this = this;
                    var product = new product_1.Product(model.id, model.name);
                    this.productsService.addproduct(product).subscribe(function (res) { return _this.succesAdd(res); });
                    model.name = null;
                };
                ProductFormComponent.prototype.succesAdd = function (data) {
                    this.added.next();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductFormComponent.prototype, "added", void 0);
                ProductFormComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_DIRECTIVES],
                        selector: 'product-form',
                        templateUrl: './app/modules/products/ts/components/Templates/product-form-component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, Service_1.ProductsService])
                ], ProductFormComponent);
                return ProductFormComponent;
            })();
            exports_1("ProductFormComponent", ProductFormComponent);
        }
    }
});
//# sourceMappingURL=product-form.component.js.map