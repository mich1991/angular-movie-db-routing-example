import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { HttpTestComponent } from "./http-test/http-test.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { MoviesInCategoryComponent } from "./pages/categories/movies-in-category/movies-in-category.component";
import { MovieDetailsComponent } from "./pages/movies/movie-details/movie-details.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { MoviesInYearsComponent } from "./pages/years-component/movies-in-years/movies-in-years.component";
import { YearsComponentComponent } from "./pages/years-component/years-component.component";

const routes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieDetailsComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'categories/:category' , component: MoviesInCategoryComponent},
    {path: 'years', component: YearsComponentComponent},
    {path: 'years/:year', component: MoviesInYearsComponent},
    {path: 'http-test', component:HttpTestComponent},
    {path: '**' , component: PageNotFoundComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}