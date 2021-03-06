import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  
  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            _item=> {
              return new Vaga(
                _item.id,
                _item.nome,
                _item.foto,
                _item.descricao,
                _item.salario
              );
            }
          )
        }
      )
  }

}
