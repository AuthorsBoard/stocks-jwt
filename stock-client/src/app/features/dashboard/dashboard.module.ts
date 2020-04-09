import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CoreModule} from '@core/core.module';
import {TemplateModule} from '@shared/templates/template.module';
import {PrimengModule} from '@shared/primeng.module';
import {AddStocksComponent} from '@features/dashboard/add-stocks/add-stocks.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserStockDetailsComponent} from '@features/dashboard/user-stock-details/user-stock-details.component';
import {PortfolioComponent} from '@features/dashboard/portfolio/portfolio.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    PrimengModule,
    TemplateModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, AddStocksComponent, PortfolioComponent,
    UserStockDetailsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}