import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  hide: boolean = true;

  constructor(private _formB: FormBuilder, private _contactService: ContactService, private _router: Router) { 
    this.form= this._formB.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      telephone: [null, [Validators.required, Validators.pattern("^[0-9]*$"),  Validators.minLength(10), Validators.maxLength(10)]],
      msg: [null, [Validators.required, Validators.maxLength(40)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Se evalua si el formulario es válido
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    // Invocación al servicio
    this._contactService.register(this.form.value).subscribe(
      data => {
        // Respuesta success
        console.log(data);
        Swal.fire({  
          icon: 'success',  
          title: 'The user pressed send',  
          text: data.status
        });
        this._router.navigateByUrl('');
      },
      error => {
        Swal.fire({  
          icon: 'error',  
          title: 'Wrong url not-found',
          text: error.error.status
        });
      }
    );

    
  }

  get name(): FormControl {
    return <FormControl>this.form.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  get telephone(): FormControl {
    return <FormControl>this.form.get('telephone');
  }

  get msg(): FormControl {
    return <FormControl>this.form.get('msg');
  }
}
