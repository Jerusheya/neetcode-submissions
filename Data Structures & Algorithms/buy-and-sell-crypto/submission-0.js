class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // O(n2) complexity
        // let main = 0;
        // let profit = 0;
        // for(let i=main+1;i<prices.length;i++) {
        //     if(prices[main] < prices[i] && profit < prices[i] - prices[main] ) {
        //        profit = prices[i] - prices[main];
        //     }
        //     if(i === prices.length-1) {
        //       main++;
        //       i = main+1;
        //     }
        // }
        // return profit;

        // optimal solution
        if (!prices.length) return 0;
        let min = prices[0];
        let profit = 0;
        for(let i=1;i<prices.length;i++) {
            if(min>prices[i]) {
                min = prices[i]
            } else {
                profit = Math.max(profit, prices[i]-min);
            }
        }
        return profit;
    }
}
