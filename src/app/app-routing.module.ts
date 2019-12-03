import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { InviteContactsComponent } from "./invite-contacts/invite-contacts.component";
import { PendingOrdersComponent } from "./pending-orders/pending-orders.component";
import { ApproveOrdersComponent } from "./approve-orders/approve-orders.component";
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  { path: "create-order", component: CreateOrderComponent },
  { path: "pending-orders", component: PendingOrdersComponent },
  { path: "approve-orders", component: ApproveOrdersComponent },
  {path:"all-orders", component: AllOrdersComponent},
  { path: "invite", component: InviteContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
