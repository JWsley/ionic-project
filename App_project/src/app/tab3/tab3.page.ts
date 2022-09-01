import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab3Page implements OnInit{

form:FormGroup

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuilder.group({nome: ['',Validators.required],endereco: ['',[Validators.required]], })

  }

whats(a:String,b:String){
  this.abrirUrl(`https://api.whatsapp.com/send?phone=+5535997254560&text=Ola%20me%20chamo%20${a}%20moro%20em%20${b}%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes`
  )
}


abrirUrl(url:string){
  window.open(url,'_blank').focus();
}

enviar(){
  var a = String(this.form.value.nome)
  var b = String(this.form.value.endereco)
  this.whats(a,b)
  console.log(this.form.value.nome)
}











}






