import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  constructor(private pokemon: PokemonService){}

  listaPokemons:Resultado[] = []
  pagina:number = 1;
  cargando: boolean = false;
  aperturaDetalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){
    this.cargando = true;
    this.listaPokemons = [...this.listaPokemons, ...await this.pokemon.getByPage(this.pagina)]
    this.cargando = false;
    this.pagina++;

  }

  onScroll(e:any){
    if(this.cargando) return;
    if(
      Math.round(
      this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight){
        this.cargarLista()
      }
  }
}

