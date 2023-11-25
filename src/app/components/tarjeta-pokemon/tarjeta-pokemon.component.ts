import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Resultado } from 'src/app/interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonService){
  }

  ngOnChanges(): void {
    this.extraerInformacion()
  }

  @Input() data?: Resultado;
  @Input() seleccionado: boolean = false;
  @Input() fullData?: Pokemon;
  @Output() clickeado = new EventEmitter<string>()
  id: string = '0';

  extraerInformacion(){
    if(this.data && this.data.url !== ''){
      this.id = this.data.url.substring(34, this.data.url.length-1);
      this.pokemonService.getById(this.id);
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42, this.fullData.species.url.length-1);
      this.data = {
        name: this.fullData.species.name,
        url: ''
      }
    }
  }
}
