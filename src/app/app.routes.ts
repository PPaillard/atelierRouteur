import { Routes } from '@angular/router';
import { Search } from './search/search';
import { Student } from './student/student';
import { LoginForm } from './login-form/login-form';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/search",
        pathMatch:"full"
    },
    {
        path:"search",
        component:Search
    },
    {
        path:"student/:name",
        component:Student
    },
    {
        path:"login",
        component:LoginForm
    }
];
