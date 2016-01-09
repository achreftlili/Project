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


}
export var productServiceInjectables: Array<any> = [
  bind(ProductsService).toClass(ProductsService)
];