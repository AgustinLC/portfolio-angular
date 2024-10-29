import { Routes } from '@angular/router';
import { HomeComponent } from './pages/features/home/home.component';
import { AboutComponent } from './pages/features/about/about.component';
import { ProjectsComponent } from './pages/features/projects/projects.component';
import { ContactComponent } from './pages/features/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent }
];
