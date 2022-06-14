import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'articles',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/articles/articles.module').then(mod => mod.ArticlesModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
