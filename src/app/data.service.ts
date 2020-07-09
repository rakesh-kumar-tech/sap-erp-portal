import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private router:Router) { }

  getData(requestOptions) {
     return fetch("http://localhost:8000/login",requestOptions);
  }

  login(options) {
    return fetch("http://localhost:8000/users/login",options);
  }
  //Data Routes
  //Shop Floor Portal
  //SP PO
  getSPPO(options){
    return fetch("http://localhost:8000/sp/po",options);
  }
  //SP POCU
  getSPPOCU(options){
    return fetch("http://localhost:8000/sp/pocu",options);
  }
  //SP ProO
  getSPProO(options){
    return fetch("http://localhost:8000/sp/proo",options);
  }
  //SP ProOCU
  getSPProOCU(options){
    return fetch("http://localhost:8000/sp/proocu",options);
  }
  //Quality Portal
  //QP InsLot 
  getQPInsLot(options){
    return fetch("http://localhost:8000/qp/inslot",options);
  }
  //QP BAPI InsLot
  getQPBInsLot(options){
    return fetch("http://localhost:8000/qp/bapi/inslot",options);
  }
  //QP ResRecCU
  getQPResRecCU(options){
    return fetch("http://localhost:8000/qp/resreccu",options);
  }
  //QP UseDecCU
  getQPUseDecCU(options){
    return fetch("http://localhost:8000/qp/usedeccu",options);
  }
  //EHSM Portal
  //EP IM
  getEPIM(options){
    return fetch("http://localhost:8000/ep/im",options);
  }
  //EP RA
  getEPRA(options){
    return fetch("http://localhost:8000/ep/ra",options);
  }
  //EP IMCU
  getEPIMCU(options){
    return fetch("http://localhost:8000/ep/imcu",options);
  }
  //Employee Portal
  //Employee Leave
  getEMPLeave(options){
    return fetch("http://localhost:8000/emp/leave",options);
  }
  //Employee Leave CU
  getEMPLeaveCU(options){
    return fetch("http://localhost:8000/emp/leavecu",options);
  }
  //Employee Pay
  getEMPPay(options){
    return fetch("http://localhost:8000/emp/pay",options);
  }
  //Employee Profile CU
  getEMPProfileCU(options){
    return fetch("http://localhost:8000/emp/profilecu",options);
  }
  //Employee Profile 
  getEMPProfile(options){
    return fetch("http://localhost:8000/emp/profile",options);
  }
  //Maintenance Portal
  //Notification CU
  getMainNotificationCU(options){
    return fetch("http://localhost:8000/main/notificationcu",options);
  }
  //Work CU
  getMainWorkCU(options){
    return fetch("http://localhost:8000/main/workcu",options);
  }
  //Notification
  getMainNotification(options){
    return fetch("http://localhost:8000/main/notification",options);
  }
  //Work
  getMainWork(options){
    return fetch("http://localhost:8000/main/work",options);
  }
  //Auth functions
  customerAuth(token){ 
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer "+token);
      fetch("http://localhost:8000/auth",{ 
        method: 'post', 
        headers: myHeaders,
        redirect: 'follow'
      }).then((response)=>{
          response.json().then((res) => {
            if(res.name != "C001"){
              swal.fire('Access Denied', 'Login to view this page', 'error');
              this.router.navigate(['customerlogin']);
            }
          })
      })
  }
  vendorAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "V001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['vendorlogin']);
          }
        })
    })
  }
  employeeAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "E001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['employeelogin']);
          }
        })
    })
  }
  maintenanceAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "M001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['maintenancelogin']);
          }
        })
    })
  }
  shopfloorAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "P001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['shopfloorlogin']);
          }
        })
    })
  }
  ehsmAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "S001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['ehsmlogin']);
          }
        })
    })
  }
  qualityAuth(token){ 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    fetch("http://localhost:8000/auth",{ 
      method: 'post', 
      headers: myHeaders,
      redirect: 'follow'
    }).then((response)=>{
        response.json().then((res) => {
          if(res.name != "Q001"){
            swal.fire('Access Denied', 'Login to view this page', 'error');
            this.router.navigate(['qualitylogin']);
          }
        })
    })
  }
}
