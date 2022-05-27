function checkCashRegister(price, cash, cid) {
    const satuan = [0.01, 0.05, 0.1, 0.25, 1, 5, 10 ,20, 100]
    let total = cid.map(e => e[1]).reduce((acc, cur) => acc + cur, 0);
    let change = cash - price;
    let cidArray = [];

    if (total < change){
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    } else if (total === change){
        return {status: 'CLOSED', change: cid}
    } else{
        for(let i = 8; i >= 0; i--){
            if(change > satuan[i] && cid[i][1] - satuan[i] > 0){
                if(change > cid[i][1]){
                    change = (change - cid[i][1]).toFixed(2)
                    cidArray.push(cid[i]);
                } else{
                    cid[i].pop();
                    cid[i].push(Math.floor(change / satuan[i]) * satuan[i]);
                    cidArray.push(cid[i]);
                    change = (change % satuan[i]).toFixed(2);
                }
            } else if(i === 0 && change > 0){
                return {status: 'INSUFFICIENT_FUNDS', change: []}
            }
        }
        return {status: 'OPEN', change: cidArray}
    }
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])