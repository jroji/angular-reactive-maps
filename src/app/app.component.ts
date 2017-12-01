import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myForm;
  lat: number = 40;
  lng: number = -2;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        address: this.fb.group({
            street: ['', <any>Validators.required],
            lat: [this.lat],
            lng: [this.lng],
            postcode: ['']
        })
    });

    this.myForm.controls.address.valueChanges.subscribe((data) => {
      console.log(data);
      this.lat = data.lat;
      this.lng = data.lng;
    });
  }

}
