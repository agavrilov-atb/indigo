import { Wallet } from './../../shared/models/corda-network';
import { WalletService } from './service/wallet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-management',
  templateUrl: './wallet-management.component.html',
  styleUrls: ['./wallet-management.component.css']
})
export class WalletManagementComponent implements OnInit {

  wallet:Wallet;

  constructor(private walletService:WalletService) { }

  ngOnInit() {
  }
  onSetupWallet(){
    this.walletService.setupWallet().then(data=>{
      console.log(data)
      this.wallet = data;
    })
  }
}
