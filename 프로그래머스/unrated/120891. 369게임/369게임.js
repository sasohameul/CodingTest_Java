const solution = (order) => {

    const result = String(order).split('').filter(sam => sam == 3 || sam == 6 || sam == 9);

    return result.length;
}