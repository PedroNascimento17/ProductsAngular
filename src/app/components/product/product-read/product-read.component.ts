import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] 

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })
  }

}
