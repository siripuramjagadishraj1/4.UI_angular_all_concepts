import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
import { DashboardComponent } from './loggedin/dashboard/dashboard.component';
import { UserListComponent } from './loggedin/user-list/user-list.component';
import { SettingsComponent } from './loggedin/settings/settings.component';
import { FeaturesComponent } from './loggedin/features/features.component';
import { CustomersComponent } from './loggedin/customers/customers.component';
import { OrdersComponent } from './loggedin/orders/orders.component';
import { AboutUsComponent } from './loggedin/about-us/about-us.component';
*/
import { InstallingStuffComponent } from './loggedin/installing-stuff/installing-stuff.component';
import { AngularProjectStructureComponent } from './loggedin/angular-project-structure/angular-project-structure.component';
import { IntegrationOfFrameworksComponent } from './loggedin/integration-of-frameworks/integration-of-frameworks.component';
import { LearnTypeScriptComponent } from './loggedin/learn-type-script/learn-type-script.component';
import { RoutingCheatComponent } from './loggedin/routing-cheat/routing-cheat.component';
import { SubRoute1Component } from './loggedin/routing-cheat/sub-route1/sub-route1.component';
import { SubRoute2Component } from './loggedin/routing-cheat/sub-route2/sub-route2.component';
import { AuthGuard } from 'guards/auth.guards';
import { BindingsComponent } from './loggedin/bindings/bindings.component';
import { LocalReferencesAndTricksComponent } from './loggedin/local-references-and-tricks/local-references-and-tricks.component';
import { InputElementsComponent } from './loggedin/input-elements/input-elements.component';
import { OutputElementsComponent } from './loggedin/output-elements/output-elements.component';
import { CustomPipesComponent } from './loggedin/custom-pipes/custom-pipes.component';
import { ObservablesDemoComponent } from './loggedin/observables-demo/observables-demo.component';
import { HttpCallsDemoComponent } from './loggedin/http-calls-demo/http-calls-demo.component';
import { FormDemoComponent } from './loggedin/form-demo/form-demo.component';
import { DirectivesCustomComponent } from './loggedin/directives-custom/directives-custom.component';
import { DecoratorCustomComponent } from './loggedin/decorator-custom/decorator-custom.component';
import { LazyLoadingComponent } from './loggedin/lazy-loading/lazy-loading.component';
import { ComponentLifeCycleComponent } from './loggedin/component-life-cycle/component-life-cycle.component';
import { BuildMiscInstallsComponent } from './loggedin/build-misc-installs/build-misc-installs.component';



const routes: Routes = [
   { path: 'InstallingStuffComponent',component: InstallingStuffComponent},
   { path: 'AngularProjectStructureComponent',component: AngularProjectStructureComponent},
   { path: 'IntegrationOfFrameworksComponent',component: IntegrationOfFrameworksComponent},
   { path: 'LearnTypeScriptComponent',component: LearnTypeScriptComponent},
   { path: 'RoutingCheatComponent',component: RoutingCheatComponent, 
     children:[
               { path:'childRouteDemo1', component: SubRoute1Component}, 
               { path:'childRouteDemo2', component: SubRoute2Component, canActivate: [AuthGuard]}
              ]
    },
   { path: 'BindingsComponent',component: BindingsComponent },
   { path: 'LocalReferencesAndTricksComponent',component: LocalReferencesAndTricksComponent},
   { path: 'InputElementsComponent',component: InputElementsComponent},
   { path: 'OutputElementsComponent',component: OutputElementsComponent},
   { path: 'CustomPipesComponent',component: CustomPipesComponent},
   { path: 'ObservablesDemoComponent',component: ObservablesDemoComponent},
   { path: 'HttpCallsDemoComponent',component: HttpCallsDemoComponent},
   { path: 'FormDemoComponent',component: FormDemoComponent },
   { path: 'DirectivesCustomComponent',component: DirectivesCustomComponent },

   { path: 'DecoratorCustomComponent',component: DecoratorCustomComponent },
   //{ path: 'LazyLoadingComponent', component:LazyLoadingComponent },
   //{ path: 'LazyLoadingComponent', loadChildren:() => import('./NewLazyModule').then(mod => mod.CustomersModule) }
   { path: 'LazyLoadingComponent', loadChildren:'./NewLazyModule#CustomersModule'},
   { path: 'ComponentLifeCycleComponent',component: ComponentLifeCycleComponent },
   { path: 'BuildMiscInstallsComponent',component: BuildMiscInstallsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
