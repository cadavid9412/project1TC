import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LinkedListService } from '../../services/linked-list.service';
import { NodoService } from '../../services/nodo.service';
import { ElementoGramService } from '../../services/elemento-gram.service';
import { AnalizadorGramaticalService } from '../../services/analizador-gramatical.service';



@Component({
  selector: 'app-gramaticas',
  templateUrl: './gramaticas.component.html',
  styles: []
})
export class GramaticasComponent implements OnInit {

  cadena: string[] = [];
  file: any;
  nAnulables: string[] = [];
  producAnulables: number[] = [];
  producciones: LinkedListService<NodoService>[] = [];
  elementoGram: ElementoGramService[] = [];
  noTerminales: string[] = [];
  primerosProd: string[][] = [];
  error = false;
  adjunto = false;
  nombreArchivo: string;
  paginaCargada = false;
  especial: boolean;
  derecha: boolean;
  s: boolean;

  constructor(private analizador: AnalizadorGramaticalService) { }

  gramaticas = new FormGroup({
    manual: new FormControl(''),
    archivo: new FormControl(''),
  ),
  }
