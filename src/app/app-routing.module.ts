import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path:'employee', component: EmployeeComponent },
  { path:'rooms', component: RoomsComponent },
  { path:'rooms/:id', component: RoomBookingComponent },
  { path:'', redirectTo:'/rooms', pathMatch: 'full' },
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }