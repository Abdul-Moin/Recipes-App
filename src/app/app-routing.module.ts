import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, //specifying an empty path means reaching default path when we load the app for the first time.The path-match strategy 'full' matches against the entire URL.
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  }, //this is lazy loading syntax. without lazy loading we load code related to each and every module, component and service when we visit a web page. but with lazy loading we load code related to specific modules and components in those modules related to a page when we first visit that particular page.with this we can download or parse less code. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.lazy loading will not put all the code in one bundle, it will split it.
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ], //with this we are configuring routes.While lazy loading is great for initial page load, it can slow down navigation, depending on the users' network latency and bandwidth. One way to tackle this problem is route preloading. Using preloading, when the user is at a given route, you can download and cache JavaScript associated with routes that are likely to be needed next. The Angular router provides this functionality out of the box.
  exports: [RouterModule],
})
export class AppRoutingModule {}
