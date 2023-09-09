import WalletModel from "../models/WalletModel.js";

const createWallet = async (req, res) => {
    const { user_id, currency, transaction_limit } = req.body;

    if (!user_id || !currency || !transaction_limit) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Check if a wallet with the same user_id already exists
      const existingWallet = await WalletModel.findOne({
        where: { user_id },
      });
  
      if (existingWallet) {
        return res.status(400).json({ error: "Wallet already exists for this user" });
      }
  
      // Create a new wallet
      const newWallet = await WalletModel.create({
        user_id,
        balance: 0,
        currency_code: currency,
        transaction_limit,
      });
  
      return res.status(201).json(newWallet);

    } catch (error) {
      console.error("Error creating wallet:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
}


const getWalletByUserId = async (req, res) => {
  
  const user_id = req.params.id;

  if (!user_id) {
    return res.status(400).json({error: "Missing user id field"});
  }

  try {
    const existingWallet = await WalletModel.findOne({
      where: { user_id },
    });

    if (!existingWallet) {
      return res.status(404).json({ error: "No wallet for the user id" });
    }

    console.log("Retrieved wallet : " + existingWallet);

    return res.status(201).json(existingWallet);

  }  catch (error) {
    console.error("Error finding wallet:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

const deleteWalletById = async (req, res) => {
  
  const user_id = req.params.id;

  if (!user_id) {
    return res.status(400).json({error: "Missing user id field"});
  }

  try {

    const walletDeleted  = await WalletModel.destroy({ where: { user_id } });

    if (walletDeleted  === 0) {
      return res.status(404).json({ error: "Wallet not found" });
    }

    return res.status(204).json(); // No content to send for a successful deletion

  } catch (error) {
    console.error("Error deleting wallet:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

export {createWallet, getWalletByUserId, deleteWalletById};