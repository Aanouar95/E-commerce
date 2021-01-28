import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Product } from 'src/model/Product';
import { Ng2ImgMaxService } from 'ng2-img-max';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Input()
  product: Product;
  @Output()
  productAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;
  uploadedImage: Blob;
  img:any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private ng2ImgMax: Ng2ImgMaxService) { }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    this.ng2ImgMax.resizeImage(event.target.files[0], 400, 800).subscribe(
      result => {
        this.selectedFile = result;
      },
      error => {
        console.log('Oh no!', error);
      }
    );
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  saveProduct() {
    if (this.product.id == null) {

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;
    this.httpClient.post('http://localhost:8080/ejbws/webresources/api/v1/products/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addProduct(this.product).subscribe(
            (book) => {
              this.productAddedEvent.emit();
              this.router.navigate(['admin', 'products']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }else{
    this.httpClientService.updateProduct(this.product).subscribe(
      (product) => {
        this.productAddedEvent.emit();
        this.router.navigate(['admin', 'products']);
      }
    );
  }
}

}
