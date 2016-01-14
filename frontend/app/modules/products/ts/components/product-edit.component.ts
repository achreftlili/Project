    import {Component ,Output,EventEmitter} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }  from '../Entity/product';
    import {ROUTER_DIRECTIVES} from 'angular2/router';
    import {  ProductsService } from '../services/Service';

    @Component({
      providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
      selector: 'product-edit',
      properties : ['idProduct'],
      templateUrl: './app/modules/products/ts/components/Templates/product-edit-component.html'
    })
    export class ProductEditComponent {
    public products :Object;
    _idProduct :string;

    @Output() edited = new EventEmitter();
    constructor(public http: Http, public productsService: ProductsService) {}

        model = new Product();
        
        onSubmit(model) {
            let product = new Product(model.id, model.name);
                this.productsService.editproduct(product).subscribe(
                           res => this.succesEdit(res)            
                );
            model.name=null;
        }
        
        set idProduct(productId) {
            // Here we are
            if(productId != 'vide' && typeof productId !== 'undefined')
            {            console.log("ee");

                this._idProduct = productId;
            
 
        
                this.model = this.productsService.getproduct(productId)
                    .subscribe(res => this.model= new Product(res['@id'].substr(res['@id'].lastIndexOf("/")+1),res.name));
            }
        }

        get idProduct() {
          return this._idProduct;
        }


        succesEdit(data) {
            this.edited.next();
        }
        
    }