import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { myCustomPipe } from './myCustomPipe';
import { NestedInputComponent } from './loggedin/input-elements/nested-input/nested-input.component';
import { NestedOutputComponent } from './loggedin/output-elements/nested-output/nested-output.component';
import { CustomPipesComponent } from './loggedin/custom-pipes/custom-pipes.component';
import { ObservablesDemoComponent } from './loggedin/observables-demo/observables-demo.component';
import { HttpCallsDemoComponent } from './loggedin/http-calls-demo/http-calls-demo.component';
import { GlobalServices } from './global.services';
import { HttpClientModule } from '@angular/common/http';
import { FormDemoComponent } from './loggedin/form-demo/form-demo.component';
import { DirectivesCustomComponent } from './loggedin/directives-custom/directives-custom.component';
import { DecoratorCustomComponent } from './loggedin/decorator-custom/decorator-custom.component';
import { LazyLoadingComponent } from './loggedin/lazy-loading/lazy-loading.component';
import { LazyModuleComponent } from './loggedin/lazy-loading/lazy-module/lazy-module.component';
import { HighlightDirective } from './loggedin/directives-custom/highlight.directive';
import { ComponentLifeCycleComponent } from './loggedin/component-life-cycle/component-life-cycle.component';
import { BuildMiscInstallsComponent } from './loggedin/build-misc-installs/build-misc-installs.component';




@NgModule({
  declarations: [
    AppComponent,
    /*
    DashboardComponent,
    UserListComponent,
    SettingsComponent,
    FeaturesComponent,
    CustomersComponent,
    OrdersComponent,
    AboutUsComponent,
    */
    InstallingStuffComponent,
    AngularProjectStructureComponent,
    IntegrationOfFrameworksComponent,
    LearnTypeScriptComponent,
    RoutingCheatComponent,
    SubRoute1Component,
    SubRoute2Component,
    BindingsComponent,
    LocalReferencesAndTricksComponent,
    InputElementsComponent,
    OutputElementsComponent,
    myCustomPipe,
    NestedInputComponent,
    NestedOutputComponent,
    CustomPipesComponent,
    ObservablesDemoComponent,
    HttpCallsDemoComponent,
    FormDemoComponent,
    DirectivesCustomComponent,
    DecoratorCustomComponent,
    LazyLoadingComponent,
    LazyModuleComponent,
    HighlightDirective,
    ComponentLifeCycleComponent,
    BuildMiscInstallsComponent
  ],
  exports: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, GlobalServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
