import json
import logging
import sys
import asyncio
import csv

from indy import ledger, signus, wallet, pool
from indy.error import IndyError


async def addDIDs(pool_name, pool_genesis_txn_path, steward_seed, DIDs):

   # Create ledger config from genesis txn file
   pool_config = json.dumps({"genesis_txn": str(pool_genesis_txn_path)})
   try:
      await pool.create_pool_ledger_config(pool_name, pool_config)
      logger.info("CreatePoolLedgerConfigJSONParameter: %s",
   except IndyError as err:
      if (err.error_code == 306):
         logger.warning("Pool %s already exists. Skipping create.", pool_name)
      else:
         raise

   # Open pool ledger
   pool_handle = await pool.open_pool_ledger(pool_name, None)

   # Open Wallet and Get Wallet Handle
   try:
      await wallet.create_wallet(pool_name, 'steward_wallet', None, None, None)
   except IndyError as err:
      if (err.error_code == 203):
         logger.warning("Wallet %s already exists. Skipping create.", pool_name)
      else:
         raise
   steward_wallet_handle = await wallet.open_wallet('steward_wallet', None, None)

   # Create steward DID from seed
   (steward_did, steward_verkey, steward_pk) = \
      await signus.create_and_store_my_did(steward_wallet_handle, json.dumps({"seed": steward_seed}))

   # Store steward DID
   steward_identity_json = json.dumps({
      'did': steward_did,
      'pk': steward_pk,
      'verkey': steward_verkey
   })
   await signus.store_their_did(steward_wallet_handle, steward_identity_json)

   # Prepare and send NYM transactions
   for entry in DIDs:
      if (len(entry["DID"]) == 0):
         break
      nym_txn_req = await ledger.build_nym_request(steward_did, entry["DID"], entry["verkey"], entry["Name"], None)
      await ledger.sign_and_submit_request(pool_handle, steward_wallet_handle, steward_did, nym_txn_req)

      # Check result by preparing and sending a GET_NYM request
      get_nym_txn_req = await ledger.build_get_nym_request(steward_did, entry["DID"])
      get_nym_txn_resp = await ledger.submit_request(pool_handle, get_nym_txn_req)

      get_nym_txn_resp = json.loads(get_nym_txn_resp)

      assert get_nym_txn_resp['result']['dest'] == entry["DID"]

   # Close wallets and pool
   await wallet.close_wallet(steward_wallet_handle)
   await pool.close_pool_ledger(pool_handle)


# --------- Main -----------

logger = logging.getLogger(__name__)

# Get desired NYMs from .csv
if (len(sys.argv) != 5):
   print("Usage: %s <genesisFile> <DID> <verkey> <stewardSeed> " % (sys.argv[0]))
   sys.exit(2)

dids = []
dids.append({"DID": sys.argv[2], "verkey": sys.argv[3], "Name":""})

poolName = sys.argv[1].split("_")[-1]

loop = asyncio.get_event_loop()
loop.run_until_complete(addDIDs(poolName, sys.argv[1], sys.argv[4], dids))


