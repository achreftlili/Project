System.register(['angular2/core', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ProductsService, productServiceInjectables;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProductsService = (function () {
                function ProductsService(http) {
                    this.http = http;
                }
                ProductsService.prototype.getlist = function () {
                    return this.http.get('http://localhost:8000/products')
                        .map(function (res) { return res.json(); });
                };
                ProductsService.prototype.deleteproduct = function (id) {
                    return this.http.delete('http://localhost:8000' + id)
                        .map(function (res) { return res.text(); });
                };
                ProductsService.prototype.addproduct = function (product) {
                    return this.http.post('http://localhost:8000/products', JSON.stringify(product))
                        .map(function (res) { return res.json(); });
                };
                ProductsService.prototype.getproduct = function (ids) {
                    return this.http.get('http://localhost:8000' + ids)
                        .map(function (res) { return res.json(); });
                };
                ProductsService.prototype.editproduct = function (product) {
                    return this.http.put('http://localhost:8000/products/' + product.id, JSON.stringify(product))
                        .map(function (res) { return res.json(); });
                };
                ProductsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductsService);
                return ProductsService;
            })();
            exports_1("ProductsService", ProductsService);
            exports_1("productServiceInjectables", productServiceInjectables = [
                core_1.bind(ProductsService).toClass(ProductsService)
            ]);
        }
    }
});
//# sourceMappingURL=ProductsService.js.map