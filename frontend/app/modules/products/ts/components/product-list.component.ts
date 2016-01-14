    import {Component, Input, Output, OnInit} from 'angular2/core';
    import {NgForm}    from 'angular2/common';
    import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
    import 'rxjs/add/operator/map';
    import { Product }  from '../Entity/product';
    import {Router} from 'angular2/router';
    import {  ProductsService } from '../services/Service';
    import { ProductFormComponent }  from './product-form.component';
    import { ProductEditComponent }  from './product-edit.component';

    @Component({
        providers: [HTTP_PROVIDERS],
        templateUrl: './app/modules/products/ts/components/Templates/product-list-component.html',  
        directives: [
            ProductFormComponent,
            ProductEditComponent
        ]
    })
    export class ProductListComponent implements OnInit{
    public products : Object<Object>;
    active: boolean;
    activeEdit: boolean;
    router: Router;
    public idProductSelected : string;


        constructor(public http: Http, _router: Router,public productsService: ProductsService) {           
           this.active = false;
           this.activeEdit=false;

        }

        ngOnInit(): void {   
            this.getList();
        }

        deleteClicked(id) {
            this.productsService.deleteproduct(id)
                .subscribe(
                    res => this.getList(),
                    err => console.log("erro when deleting"),
                    () => console.log("delete ended")
                );            
        }

        editClicked(ids) {
            this.idProductSelected = ids ;
            this.activeEdit=true;
        }

        addClicked() {
            this.active=true;
        }

        getList()
        {
            this.productsService.getlist()
                .subscribe(
                    res => this.products = res['hydra:member'],
                    err => console.log("erro when deleting"),
                    () => console.log("delete ended")
                );
            this.active=false;
            this.activeEdit=false;
            this.idProductSelected='vide';

        }
        
    }