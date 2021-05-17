const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51IP61eBvvxnof5LoLdBypscke6LGoPcqNXR1H23rReuH4icAJ1PNF43diiBH3e7ER069GrvFumUaUIXOP91mmL0q00IVVe3W1S'
);

// API

// - APP CONFIG
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => {
  res.status(200).send('Api Working');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment request received for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in cents
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-69313/us-central1/api
