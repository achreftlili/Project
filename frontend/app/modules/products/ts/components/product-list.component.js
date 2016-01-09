System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', 'angular2/router', '../services/Service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, Service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(http, _router, productsService) {
                    this.http = http;
                    this.productsService = productsService;
                    this.delete = new core_1.EventEmitter();
                    this.router = _router;
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.productsService.getlist()
                        .subscribe(function (res) { return _this.products = res['hydra:member']; });
                };
                ProductListComponent.prototype.succes = function (data) {
                    this.products = data;
                    console.log("kkkk");
                    this.delete.next(this.products);
                };
                ProductListComponent.prototype.deleteClicked = function (id) {
                    var _this = this;
                    this.productsService.deleteproduct(id)
                        .subscribe(function (res) { return _this.succesdelete(); }, function (err) { return console.log("erro when deleting"); }, function () { return console.log("delete ended"); });
                };
                ProductListComponent.prototype.succesdelete = function () {
                    var _this = this;
                    this.productsService.getlist()
                        .subscribe(function (res) { return _this.products = res['hydra:member']; }, function (err) { return console.log("erro when deleting"); }, function () { return console.log("delete ended"); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductListComponent.prototype, "delete", void 0);
                ProductListComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: './app/modules/products/ts/components/Templates/product-list-component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, Service_1.ProductsService])
                ], ProductListComponent);
                return ProductListComponent;
            })();
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map