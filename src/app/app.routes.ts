import { Routes } from '@angular/router';
import { Task1 } from './task1/task1';
import { Task2 } from './task2/task2';
import { Task3 } from './task3/task3';
import { Task4 } from './task4/task4';



export const routes: Routes = [
    {path:'',component:Task1},
    {path:'2',component:Task2},
    {path:'3',component:Task3},
    {path:'4',component:Task4}

];
