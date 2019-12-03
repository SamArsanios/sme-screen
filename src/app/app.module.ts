import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//
import { CreateOrderComponent } from "./create-order/create-order.component";
import { ApproveOrdersComponent } from "./approve-orders/approve-orders.component";
import { PendingOrdersComponent } from "./pending-orders/pending-orders.component";
import { InviteContactsComponent } from "./invite-contacts/invite-contacts.component";
//Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Material
import { MaterialModule } from "./material/material.module";
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ApproveInvoicesComponent } from './invoices/approve-invoices/approve-invoices.component';
import { AllInvoicesComponent } from './invoices/all-invoices/all-invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    ApproveOrdersComponent,
    PendingOrdersComponent,
    InviteContactsComponent,
    AllOrdersComponent,
    InvoicesComponent,
    ApproveInvoicesComponent,
    AllInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
