System.register(['angular2/platform/browser', './app.component', "angular2/http", 'angular2/router', './modules/products/ts/services/Service'], function(exports_1) {
    var browser_1, app_component_1, http_1, router_1, Service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, Service_1.servicesInjectables]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map