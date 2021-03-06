import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from 'src/app/shared/model/aluno';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  get nome(): any {return this.formulario.get("nome")};
  get email(): any {return this.formulario.get("email")};
  get nota(): any {return this.formulario.get("nota")};

  public formulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    ) {
  }

  ngOnInit(): void {
    this.configurarFormulario()
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      nota: [null, Validators.required]
    })
  }

  submit() {

    if(this.formulario.valid) {
      const aluno: Aluno = new Aluno();

      aluno.nome = this.nome.value
      aluno.email = this.email.value
      aluno.nota = this.nota.value

      this.httpClient.post(environment.urlBackEnd, aluno).subscribe((retorno) => {
        SweetAlert.exibirSucesso("Sucesso", "Cadastro realizado com sucesso!")
      });
    } else {
      SweetAlert.exibirErro("Erro", "Erro no cadastro!")
    }

  }

  visualizarFormulario() {
    console.log(this.formulario)
  }

  setEmail(event: any) {
    console.log(event)
  //   this.email = event.target.value
  }
}
