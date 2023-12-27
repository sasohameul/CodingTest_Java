const solution = (id_pw, db) => {

    const result = db.find(data => data[0]===id_pw[0] && data[1]===id_pw[1]);

    if(result !== undefined) return 'login';

    else 
       if( db.some(data => data[0] === id_pw[0]) ) return 'wrong pw';
    

    return 'fail';

}