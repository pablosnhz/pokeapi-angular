import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  async getByPage(page: number, size: number = 40):Promise<Resultado[]>{
    const offset = (page-1)*size;
    if(offset > 300) return []
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    return resJson.results;
  }

  async getById(id : string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }

  getDescripcion(){

  }
}
