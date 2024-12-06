const midtransClient = require('midtrans-client');

const snap = new midtransClient.Snap({
  isProduction: false, 
  serverKey: 'SERVER_KEY_ANDA',
});

app.post('/api/create-transaction', async (req, res) => {
  const { orderId, amount, customerName, customerEmail } = req.body;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: amount,
    },
    customer_details: {
      first_name: customerName,
      email: customerEmail,
    },
    credit_card: {
      secure: true,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ redirectUrl: transaction.redirect_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
