function checkCashRegister(price, cash, cid) {
    const money = cid.map(e => e[0]);
    const value = cid.map(e => e[1]);
    const satuan = [0.01, 0.05, 0.1, 0.25, 1, 5, 10 ,20, 100]
    let total = value.reduce((acc, cur) => acc + cur, 0);
    let change = cash - price;

    let cidArray = [];

    if (total < change){
        console.log({
            status: 'INSUFFICIENT_FUNDS',
            change: []
        })
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: []
        }
    }
    else if (total === change){
        console.log({
            status: 'CLOSED',
            change: cid
        })
        return {
            status: 'CLOSED',
            change: cid
        }
    }
    else{
        for(let i = 8; i >= 0 ; i--){
            let now = value[i]
            console.log("Change "+ change + " NOW " + now)
            if(change > satuan[i] && now % satuan[i] >= 0)
            {
                let multiply = Math.floor(change / satuan[i]);
                console.log("multiply " + multiply)
                let kurang = multiply * satuan[i];
                console.log("kurang " + kurang)
                let sisa = now - kurang;
                console.log("sisa " + sisa)
                cidArray.unshift(now - kurang);
                change -= kurang;
                console.log(change)
                console.log(sisa)
                console.log(cidArray)
            }
            // if (change >= now){
            //     now %= change
            //     cidArray.unshift(now)
            // }
            else {
                cidArray.unshift(now)
            }
        }
        console.log(cidArray);
    }
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])