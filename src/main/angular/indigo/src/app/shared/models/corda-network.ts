

export class NodeInfo{

  x500Name:string
  wallet:Wallet

}


export class Wallet{

  name:string
  storedDIDs:string[]
}

export class TrustRequest{
  myDid:string
  otherPartyName:string
  otherPartyDid:string
}

export class Trust{

  myDID:string
  otherPartyname:string
  otherPartyDID:string
  pairwiseDID:string
  date:string


}