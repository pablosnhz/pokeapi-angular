import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnChanges {

@Input() pokemon?: Pokemon;
descripcion: string = '';

constructor(private PokemonService: PokemonService){}

    ngOnChanges(): void {
      if(this.pokemon){
        this.PokemonService.getDescripcion(this.pokemon?.id).then(res =>{
        this.descripcion = res
      })
    }
    }

  }

