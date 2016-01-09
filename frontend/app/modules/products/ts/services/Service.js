System.register(['./ProductsService'], function(exports_1) {
    var ProductsService_1;
    var servicesInjectables;
    var exportedNames_1 = {
        'servicesInjectables': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (ProductsService_1_1) {
                ProductsService_1 = ProductsService_1_1;
                exportStar_1(ProductsService_1_1);
            }],
        execute: function() {
            exports_1("servicesInjectables", servicesInjectables = [
                ProductsService_1.productServiceInjectables
            ]);
        }
    }
});
//# sourceMappingURL=Service.js.map