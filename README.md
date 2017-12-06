# Project Indigo #

R3 and its members are exploring the use of distributed ledger technology to build a decentralized identity platform. The platform would be used by participants to identify individuals and entities they wish to transact with. Sovrin is a global, decentralized identity network that allows people and organizations to create portable, self-sovereign digital identities which they control, and which can't be taken away by any government or organization.

Sovrin uses a public permissioned ledger which is governed by the Sovrin Foundation, a private-sector, international non-profit that was established to govern the world’s first self-sovereign identity (SSI) network. 1.1

This is an interoperability project between Corda and the Sovrin network. The project 
vision is to allow financial institutions on Corda to interact with the Sovrin network.

The project will explore the different ways in which a private Corda network would interact with the Sovrin network, including whether participating institutions would run Sovrin nodes and become stewards on the network or whether R3 would play a proxy role and provide this as a service. The project vision would ensure that any identity solution built on Corda can issue, consume and validate identity credentials on the Sovrin network.

Our goal is to demonstrate a proof of concept to R3 members to demonstrate the value of building and operating a self-sovereign identity platform. If successful, this would lead to the development of a commercially viable identity solution.

#Banks:
* ATB
* US Bank 
* UBS
* Deutsche Bank
* OP Financial Group

### 

## Instruction to run:

* On a mac, run the following scripts to stand up the nodes
* On a Windows PC, use the corresponding .bat
* ./gradlew clean build deployNodes -x test
* ./build/nodes/runnodes


* follow the instruction at [cordapp-tutorial](https://github.com/corda/cordapp-tutorial) to run corda nodes.

**Note:** If you want to build gradle without running test cases run this cmd
`./gradlew clean build deployNodes -x test`

In order to reach the Angular UI install an extension to support CORS https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en