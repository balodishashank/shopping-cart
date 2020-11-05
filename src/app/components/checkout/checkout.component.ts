import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    });

    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, , Validators.pattern('[a-z0-9.@]*')]],
      addr1: ['',  Validators.required],
      addr2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['',  Validators.required],
      ccName: ['', Validators.required],
      paymentType: ['', Validators.required],
      ccNumber: ['',  Validators.required],
      ccDate: ['', Validators.required],
      cvv: ['',  Validators.required]
    });
  }

  changeCountry(e) {
    this.myForm.patchValue({
      country: e.target.value
    })
  }

  changeState(e) {
    this.myForm.patchValue({
      state: e.target.value
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    if(!this.myForm.invalid) {
      this.router.navigate(['/home']);
    } 
  }
}
