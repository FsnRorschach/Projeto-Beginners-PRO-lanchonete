import { Component, OnInit } from '@angular/core';
import { BuscaEnderecoService } from 'src/app/services/busca-endereco.service';

@Component({
  selector: 'app-conta-page',
  templateUrl: './conta-page.component.html',
  styleUrls: ['./conta-page.component.scss']
})
export class ContaPageComponent implements OnInit {

  nome: string = '';
  sobrenome: string = '';
  telefone: string = '';
  cpf: string = '';
  cep: string = '';
  rua: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';

  endereco: any = {};

  constructor(private enderecoService: BuscaEnderecoService) { }

  ngOnInit(): void {
  }

  buscaEndereco(cep: string) {
    this.enderecoService.buscaCep(cep)
      .subscribe(endereco => {

        this.endereco = endereco

        this.rua = this.endereco.logradouro;
        this.bairro = this.endereco.bairro;
        this.cidade = this.endereco.localidade;
        this.uf = this.endereco.uf;
      })
  }

  salvarCadastro(): void {
    const cad = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      telefone: this.telefone,
      cpf: this.cpf,
      cep: this.cep,
      rua: this.rua,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.uf
    }
    console.log(cad);
  }
}
