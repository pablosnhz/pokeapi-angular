import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private PokemonService: PokemonService){
  }

  listaPokemon: Resultado[] = [];

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){
    this.listaPokemon = [...this.listaPokemon, ...await this.PokemonService.getByPage()];
    console.log(this.listaPokemon)
  }

}
