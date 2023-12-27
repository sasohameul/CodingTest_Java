const solution = (id_pw, db) => {

    let answer = '';

    let result = db.find(data => data[0] === id_pw[0] && data[1] === id_pw[1]);

    answer = result !== undefined ? 'login' : '';

    if(result === undefined) {

        for(let i = 0; i < db.length; i++){

            if(db[i][0] == id_pw[0]) {
                answer = 'wrong pw';
                break;
            }
        }
    }

   
    return answer !== '' ? answer : 'fail';
    
}