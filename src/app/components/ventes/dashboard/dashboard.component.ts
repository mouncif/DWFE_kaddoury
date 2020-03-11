import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProduitService } from 'src/app/services/produit.service';
import { ClientService } from 'src/app/services/client.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private  nbrFournisseur 
  private nbrProduit
  private nbrClient 
  private  nbrUser

  constructor(private fournisseurservice   : FournisseurService ,
    private produitservice  :  ProduitService ,
    private clientservice  : ClientService,
    private userservice  : UserServiceService ) { }

  ngOnInit() {

      //nombre de fournisseur    
      this.fournisseurservice.findAll().subscribe ((data : any)=>{
      this.nbrFournisseur = data.length;
    });
      //console.log(this.nbrFournisseur)


      //nombre de Produit
      this.produitservice.findAll().subscribe((data : any)=>{
        this.nbrProduit = data.length;
        //console.log(this.nbrProduit ,"produit")
      });

      //Nombre de Clients 

      this.clientservice.findAll().subscribe((data : any)=>{
        this.nbrClient = data.length;
        console.log(this.nbrClient ,"client")
      });

      
      //Nombre des utilisateurs
      this.userservice.findAll().subscribe((data : any)=>{
        this.nbrUser = data.length;
        console.log(this.nbrUser ,"users")
      });


      




  }
}


  


