const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const axios = require('axios');
const app = express();

async function convertCurrency(baseCurrency, amount, targetCurrency) {
  try {
    const apiKey = process.env.FX_API_KEY;

    const response = await axios.get(`http://api.exchangeratesapi.io/latest`, {
      params: {
          access_key: apiKey,
          from: baseCurrency,
          },
    });

    if (response.status === 200) {
      const exchangeRates = response.data.rates;
      if (targetCurrency in exchangeRates) {
        const exchangeRate = exchangeRates[baseCurrency];
        const convertedAmount = amount * exchangeRate;
        return { from: baseCurrency, to: targetCurrency, amount, convertedAmount };
      } else {
        throw new Error('Invalid target currency.');
      }
    } else {
      throw new Error('Failed to fetch exchange rates.');
    }
  } catch (error) {
    throw error;
  }
}

app.get('/convert', async (req, res) => {
  try {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: 'Invalid request. Please provide from, to, and amount parameters.' });
    }

    const convertedResult = await convertCurrency(from, parseFloat(amount), to);

    return res.json(convertedResult);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'An error occurred.' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
