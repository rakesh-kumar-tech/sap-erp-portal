import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintenance-login',
  templateUrl: './maintenance-login.component.html',
  styleUrls: ['./maintenance-login.component.css']
})
export class MaintenanceLoginComponent implements OnInit {
  onClick : Function;
  constructor(private data: DataService , private router: Router) { }

  ngOnInit(): void {
    this.onClick = () => {
      let name = (document.getElementById("uname") as HTMLInputElement).value;
      let pass = (document.getElementById("inputPassword") as HTMLInputElement).value;
      if(name == "" || pass == ""){
        swal.fire('Unable to sign in', 'Fill in the required fields' , 'error');
      }
      else{
        const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify([{ "name" : name , "password" : pass}]);
      const options = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      this.data.login(options).then((response) => {
        response.json().then((res) => {
          if(res === "User not found"){
            swal.fire('Access Denied', 'There is no such user', 'error');
          }
          if(res === "Wrong Password"){
            swal.fire('Access Denied', 'Kindly check your password', 'error');
          }
          else{
            localStorage.setItem("secret",res.accessToken);
            this.router.navigate(['maintenancelogin/maintenancedashboard']);
          }
  
        })
      })
      }
      
      }
      
  }

}
