import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [{path:'login',component:LoginComponent},{path:'table',component:TableComponent}
    ,{path:'edit/:id',component:EditComponent}
];
