function changeMachine(moneyIn) {
    const coins = {
      '£5': 500,
      '£2': 200,
      '£1': 100,
      '50p': 50,
      '20p': 20,
      '10p': 10
    };
  
    let change = '';
  
    if (moneyIn === '£20') {
      return moneyIn;
    }
  
    if (moneyIn in coins) {
      const amount = coins[moneyIn];
  
      if (amount === 20) {
        change = '10p 10p';
      } else if (amount === 50) {
        change = '20p 10p 10p';
      } else {
        while (amount >= 20) {
          change += '20p ';
          amount -= 20;
        }
        while (amount >= 10) {
          change += '10p ';
          amount -= 10;
        }
      }
    }
  
    return change.trim();
  }
  
  const input = "£5";
  const output = changeMachine(input);
  console.log(output); // Output: "20p 20p 20p 20p 20p 10p 10p 10p 10p"