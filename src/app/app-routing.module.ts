import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DailyMaterialUsageComponent} from './daily-material-usage/daily-material-usage.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DailyAttendanceComponent} from './daily-attendance/daily-attendance.component';
import {ApprovalRequestsManagerComponent} from './approval-requests-manager/approval-requests-manager.component';
import {IncomeExpenseReportComponent} from './income-expense-report/income-expense-report.component';
import {ExpensesManagerComponent} from './expenses-manager/expenses-manager.component';
import {IncomeManagerComponent} from './income-manager/income-manager.component';
import {SupplierPaymentsComponent} from './supplier-payments/supplier-payments.component';
import {GoodReceiveNoteComponent} from './good-receive-note/good-receive-note.component';
import {PurchaseOrderManagerComponent} from './purchase-order-manager/purchase-order-manager.component';
import {PurchaseRequestManagerComponent} from './purchase-request-manager/purchase-request-manager.component';
import {SupplierManagerComponent} from './supplier-manager/supplier-manager.component';
import {BankAccountsManagerComponent} from './bank-accounts-manager/bank-accounts-manager.component';
import {MaterialManagerComponent} from './material-manager/material-manager.component';
import {ConstructionMaterialComponent} from './construction-material/construction-material.component';
import {ModelComponent} from './model/model.component';

const routes: Routes = [
  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path: 'dailyMaterial',
    component: DailyMaterialUsageComponent
  },
  {
    path: 'dailyAttendance',
    component: DailyAttendanceComponent
  },
  {
    path: 'approvalRequestsManager',
    component: ApprovalRequestsManagerComponent
  },
  {
    path: 'incomeExpenseReport',
    component: IncomeExpenseReportComponent
  },
  {
    path: 'expensesManager',
    component: ExpensesManagerComponent
  },
  {
    path: 'incomeManager',
    component: IncomeManagerComponent
  },
  {
    path: 'supplierPayments',
    component: SupplierPaymentsComponent
  },
  {
    path: 'goodReceiveNote',
    component: GoodReceiveNoteComponent
  },
  {
    path: 'purchaseOrderManager',
    component: PurchaseOrderManagerComponent
  },
  {
    path: 'purchaseRequestManager',
    component: PurchaseRequestManagerComponent
  },
  {
    path: 'supplierManager',
    component: SupplierManagerComponent
  },
  {
    path: 'bankAccountsManager',
    component: BankAccountsManagerComponent
  },
  {
    path: 'materialManager',
    component: MaterialManagerComponent
  },
  {
    path: 'constructionMaterial',
    component: ConstructionMaterialComponent
  },
  {
    path: 'modelLogout',
    component: ModelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
