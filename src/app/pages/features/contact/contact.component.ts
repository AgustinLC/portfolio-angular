import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  //Variables
  contactForm!: FormGroup;

  constructor() { };

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  sendMessage(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send('service_vgat2ee', 'template_ogrkix9', formData, 'mCGRoFBdQUZF4ibMR')
        .then((response) => {
          console.log('Correo enviado:', response.status, response.text);
          alert('Tu mensaje se ha enviado con éxito.');
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
          alert('Ocurrió un error al enviar tu mensaje. Por favor, inténtalo nuevamente.');
        });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
