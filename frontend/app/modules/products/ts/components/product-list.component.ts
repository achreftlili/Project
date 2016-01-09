    import {Component, Input, Output, EventEmitter , OnInit} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }  from '../Entity/product';
    import {Router} from 'angular2/router';
    import {  ProductsService } from '../services/Service';

    @Component({
      providers: [HTTP_PROVIDERS],
      templateUrl: './app/modules/products/ts/components/Templates/product-list-component.html'    
    })
    export class ProductListComponent implements OnInit{
    public products :Object<Object>;
    router: Router;
        @Output()
            delete = new EventEmitter();


        constructor(public http: Http, _router: Router,public productsService: ProductsService) {
           this.router = _router;
           
           }
 

        ngOnInit(): void {   

            this.productsService.getlist()
                  .subscribe(res => this.products= res['hydra:member']);

        }


        succes(data) {
            this.products = data;
            console.log("kkkk");
            this.delete.next(this.products);
        }
        deleteClicked(id) {
            this.productsService.deleteproduct(id)
                .subscribe(
                    res => this.succesdelete(),
                    err => console.log("erro when deleting"),
                    () => console.log("delete ended")
                );            
        }
        succesdelete()
        {
            this.productsService.getlist()
                .subscribe(
                    res => this.products= res['hydra:member'],
                    err => console.log("erro when deleting"),
                    () => console.log("delete ended")
                );

        }
        
    }