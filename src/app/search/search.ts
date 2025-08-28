import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  router:Router = inject(Router);
  studentName : string = "";

  searchStudent():void {
    if(this.studentName.trim()){
      this.router.navigate(["/student",this.studentName.trim()])
    }
    else {
      alert("Veuillez entrer un nom")
    }
  }
}
