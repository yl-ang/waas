import Loyalty from '../models';

const createLoyalty = async (req, res, _) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const loyalty = await Loyalty.findOne({
      where: { user_id }
    });

    if (loyalty) {
      return res
        .status(400)
        .json({ error: `Loyalty already exists for this user` });
    }

    const newLoyalty = await Loyalty.create({
      user_id
    });

    return res.status(201).json(newLoyalty);
  } catch (err) {
    console.error(
      `Error initialising user's loyalty: ${JSON.stringify(err, null, 2)}`
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getLoyalty = async (req, res, _) => {
  const user_id = req.params.user_id;

  if (!user_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const loyaltyProfile = await Loyalty.findOne({
      where: { user_id }
    });

    if (!loyaltyProfile) {
      return res.status(400).json({ error: `No loyalty profile found` });
    }

    return res.status(200).json({ loyalty: loyaltyProfile });
  } catch (err) {
    console.error(
      `Error finding user's loyalty profile: ${JSON.stringify(err, null, 2)}`
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Increments or decrements user's points based on value passed in request body.
 * Value can be positive or negative.
 */
const updateLoyalty = async (req, res, _) => {
  const user_id = req.params.user_id;

  if (!user_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { points } = req.body;

  try {
    const loyaltyProfile = await Loyalty.findOne({
      where: { user_id }
    });

    if (!loyaltyProfile) {
      return res.status(400).json({ error: `No loyalty profile found` });
    }

    const newPoints = loyaltyProfile.points + points;

    const updatedLoyaltyProfile = await Loyalty.update(
      { points: newPoints },
      { where: user_id }
    );

    return res.status(200).json({ loyalty: updatedLoyaltyProfile });
  } catch (err) {
    console.error(
      `Error finding user's loyalty profile: ${JSON.stringify(err, null, 2)}`
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createLoyalty, getLoyalty, updateLoyalty };
