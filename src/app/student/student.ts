import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  route:ActivatedRoute = inject(ActivatedRoute);
  name!:string;
  
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      // Je récupère name dans les paramètres et si c'est pas présent, String() met une chaine vide dedans.
      this.name = String(params.get("name"));
    })
  }
}
