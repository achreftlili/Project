    import {Component} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }    from './product';
    import {ROUTER_DIRECTIVES} from 'angular2/router';
    @Component({
      providers: [HTTP_PROVIDERS],
      directives: [ROUTER_DIRECTIVES],
      templateUrl: 'app/app-component.html'
    })
    export class ProductFormComponent {
    public products :Object;
         constructor(public http: Http) {
            http.get('http://localhost:8000/products')
                        .map(res => res.json())
                        .subscribe(
                          data => this.succes (data),
                          () => console.log('Random Quote Complete')
                        );
            }
            


        model = new Product();
        onSubmit(model) {
        let product = new Product(model.id, model.name);
        this.http.post('http://localhost:8000/products', JSON.stringify(product))
            .subscribe(res => {
                      this.products = res.json();
                    });

             console.log(this.products);
           
          }
        succes(data) {
             this.model = data['hydra:member'][0];
          }
        
    }