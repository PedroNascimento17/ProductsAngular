import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private router:Router,private productService: ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "0"
    this.productService.readById(id).subscribe(product=>this.product=product)
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Atualizado')
      this.cancel()
    })  
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
