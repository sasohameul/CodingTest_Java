const solution = (balls, share) => {
    const n = balls-share;
    let nm = 1;
    let m = 1;
    
    for(let i = 2; i <= n; i++){
        nm *= i;
    }
    for(let i = balls; i >= balls-(n-1); i--){
      m *= i;
    }
    return Math.round(m/nm);
}
