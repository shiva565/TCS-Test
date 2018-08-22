
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { Router, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { TableComponent } from './table/table.component';

const Approuting=[{path:'Home',component:HeaderComponent,
    children:[{path:'children',component:HomeChildComponent},
  ]},
      {path:'Footer',component:FooterComponent,
    children:[
      {path:'child',component:ChildComponentComponent}
      ]},
      {path:'logOut',redirectTo:'Footer',pathMatch:'full'},
      {path:'parent',component:ParentComponent},
      {path:'reactive',component:ChildComponentComponent},
      {path:'table',component:TableComponent},
      {path:'**',component:HeaderComponent}];

export const routing = RouterModule.forRoot(Approuting);

// strin


// this.address.city


// interface values are address to local variable
// local
// local variable = interfacevalues
// localvaraibale['bui///error ? no error 