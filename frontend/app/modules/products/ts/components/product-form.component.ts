    import {Component ,Output,EventEmitter} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }  from '../Entity/product';
    import {ROUTER_DIRECTIVES} from 'angular2/router';
    import {  ProductsService } from '../services/Service';

    @Component({
      providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
      selector: 'product-form',
      templateUrl: './app/modules/products/ts/components/Templates/product-form-component.html'
    })
    export class ProductFormComponent {
    public products :Object;
    @Output() added = new EventEmitter();
    constructor(public http: Http, public productsService: ProductsService) {}

        model = new Product();
        onSubmit(model) {
            let product = new Product(model.id, model.name);
            this.productsService.addproduct(product).subscribe(
                       res => this.succesAdd(res)            
            );
        model.name=null;
        }
        
        succesAdd(data) {
            this.added.next();
          }
        
    }