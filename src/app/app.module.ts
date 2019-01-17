import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DailyMaterialUsageComponent } from './daily-material-usage/daily-material-usage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { ApprovalRequestsManagerComponent } from './approval-requests-manager/approval-requests-manager.component';
import { IncomeExpenseReportComponent } from './income-expense-report/income-expense-report.component';
import { ExpensesManagerComponent } from './expenses-manager/expenses-manager.component';
import { IncomeManagerComponent } from './income-manager/income-manager.component';
import { SupplierPaymentsComponent } from './supplier-payments/supplier-payments.component';
import { GoodReceiveNoteComponent } from './good-receive-note/good-receive-note.component';
import { PurchaseOrderManagerComponent } from './purchase-order-manager/purchase-order-manager.component';
import { PurchaseRequestManagerComponent } from './purchase-request-manager/purchase-request-manager.component';
import { SupplierManagerComponent } from './supplier-manager/supplier-manager.component';
import { BankAccountsManagerComponent } from './bank-accounts-manager/bank-accounts-manager.component';
import { MaterialManagerComponent } from './material-manager/material-manager.component';
import { ConstructionMaterialComponent } from './construction-material/construction-material.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DailyMaterialUsageComponent,
    HomePageComponent,
    DailyAttendanceComponent,
    ApprovalRequestsManagerComponent,
    IncomeExpenseReportComponent,
    ExpensesManagerComponent,
    IncomeManagerComponent,
    SupplierPaymentsComponent,
    GoodReceiveNoteComponent,
    PurchaseOrderManagerComponent,
    PurchaseRequestManagerComponent,
    SupplierManagerComponent,
    BankAccountsManagerComponent,
    MaterialManagerComponent,
    ConstructionMaterialComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
