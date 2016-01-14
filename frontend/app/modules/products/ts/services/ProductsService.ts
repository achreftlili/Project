import {Injectable, bind} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";


@Injectable()
export class ProductsService {
    items:Array<any>;

    constructor(public http: Http) {

    }

    public getlist() {
      return this.http.get('http://localhost:8000/products')
                             .map((res) => {return res.json();});
    }
    public deleteproduct(id) {
      return this.http.delete('http://localhost:8000'+id)
                             .map(res => res.text());                       
    }
    public addproduct(product) {
        return this.http.post('http://localhost:8000/products', JSON.stringify(product))
                             .map((res) => res.json());                       
    }
    public getproduct(ids) {
        return this.http.get('http://localhost:8000'+ids)
                             .map((res) => res.json());                       
    }
    public editproduct(product) {
        return this.http.put('http://localhost:8000/products/'+product.id, JSON.stringify(product))
                             .map((res) => res.json());                       
    }
}
export var productServiceInjectables: Array<any> = [
  bind(ProductsService).toClass(ProductsService)
];