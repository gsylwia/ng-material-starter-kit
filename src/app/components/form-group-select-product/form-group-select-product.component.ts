import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-group-select-product',
  styleUrls: ['./form-group-select-product.component.scss'],
  templateUrl: './form-group-select-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupSelectProductComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
  });
  readonly categories$: Observable<string[]> =
    this._productService.getAllCategories();

  constructor(private _productService: ProductService) {}

  onProductFormSubmitted(productForm: FormGroup): void {
    if (!productForm.valid) {
      return;
    }

    this._productService
      .create({
        id: productForm.get('id')?.value,
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        category: productForm.get('category')?.value,
        description: productForm.get('description')?.value,
        image: productForm.get('image')?.value,
      })
      .subscribe();
  }
}
