import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectionAutoComponent } from './pages/detection-auto/detection-auto.component';
import { ExpertComponent } from './pages/expert/expert.component';
import { EspaceExpertComponent } from './pages/espace-expert/espace-expert.component';
import { AddMaladiePlantComponent } from './pages/maladiesPlant/add-maladie-plant/add-maladie-plant.component';
import { ListMaladiePlantComponent } from './pages/maladiesPlant/list-maladie-plant/list-maladie-plant.component';
import { InfoMaladiesComponent } from './pages/maladiesPlant/info-maladies/info-maladies.component';
import { EspaceResponseComponent } from './pages/espace-response/espace-response.component';
import { EspaceUserComponent } from './pages/espace-user/espace-user.component';
import {LoginComponent} from "./pages/autentification/login/login.component";
import { RegisterComponent } from './pages/autentification/register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'detect-auto',
    component: DetectionAutoComponent
  },
  {
    path: 'expert',
    component: ExpertComponent
  },
  {
    path: 'espace-expert',
    component: EspaceExpertComponent
  },
  {
    path: 'espace-response/image/:id',
    component: EspaceResponseComponent
  },
  {
    path:'add-maladies',
    component: AddMaladiePlantComponent
  },
  {
    path: 'listeMaladies',
    component: ListMaladiePlantComponent
  },
  {
    path: 'info/maladie/:id',
    component: InfoMaladiesComponent
  },
  {
    path: 'allresponse',
    component: EspaceUserComponent
  },
  {
    path: '',
    redirectTo:'expert', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
