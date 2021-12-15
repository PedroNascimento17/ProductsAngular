import { Product } from './../product.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-delete',
    templateUrl: 'product-delete.component.html',
})

export class ProductDeleteComponent implements OnInit{

    product: Product;

    constructor(public dialog: MatDialog,
                private productService: ProductService,
                private route:ActivatedRoute,
                @Inject(MAT_DIALOG_DATA) public data: Product) {}

    ngOnInit(): void {
        this.product = this.data;
    }

    delete(): void{
        this.productService.delete(this.product.id?.toString() || "0").subscribe(()=>{
            this.productService.showMessage('Produto Excluído')
        })  
    }

}