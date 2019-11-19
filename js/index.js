(function() {
    document.querySelector('.sendbut').addEventListener('click', formForCheckBuy);

  function formForCheckBuy(a) {
    a.preventDefault();
    fetch('login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.querySelector(
          '.check-and-buy input[name=your-first-last-name]'
        ).value,
        email: document.querySelector(
          '.check-and-buy input[name=email-address]'
        ).value,
        phone: document.querySelector('.check-and-buy input[name=phone-number]')
          .value,
        vinCode: document.querySelector('.check-and-buy input[name=vin-code]')
          .value
      })
    }).then(_ => document.querySelector('.check-and-buy').reset());
  }
})();
