// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-lexicographicanalyzer',
//   templateUrl: './lexicographicanalyzer.component.html',
//   styles: []
// })
// export class LexicographicanalyzerComponent implements OnInit {
  
//   cadena: string[] = [];
//   file: any;
//   error = false;
//   attach = false;
//   fileName: any;
//   loadPage = false;
//   //s: boolean;

//   constructor() { }

//   lexicographicanalyzer = new FormGroup({
//     manual: new FormControl(''),
//     archivo: new FormControl(''),
//   });

//   // Usado para la lectura desde .txt
//   fileChanged(e) {
//     this.file = e.target.files[0];
//     console.log(this.file);
//     this.attach = true;
//     this.fileName = this.file.name;
//   }

//   // Usada para la lectura desde .txt
//   uploadDocument(file) {
//     let fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       console.log(fileReader.result);
//     };
//     fileReader.readAsText(this.file);
//   }
  
//   ngOnInit(): void {
//   }

// }
