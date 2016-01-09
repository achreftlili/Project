    import {Component} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }  from '../Entity/product';
    import {ROUTER_DIRECTIVES} from 'angular2/router';
    @Component({
      providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
      selector: 'product-form',
      templateUrl: './app/modules/products/ts/components/Templates/product-form-component.html'
    })
    export class ProductFormComponent {
    public products :Object;
         constructor(public http: Http) {
                     }
            


        model = new Product();
        onSubmit(model) {
        let product = new Product(model.id, model.name);
        this.http.post('http://localhost:8000/products', JSON.stringify(product))
            .map(res => res.json())
            .subscribe(
                       data => this.succes(data)            
           );

          }
        
        succes(data) {
                console.log(data);
          }
        
    }