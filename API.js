const handlePayment = async () => {
    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: '1',
        amount: 150000,
        customerName: 'Nama Pelanggan',
        customerEmail: 'email@example.com',
      }),
    });
  
    const { redirectUrl } = await response.json();
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  export default handlePayment;
  