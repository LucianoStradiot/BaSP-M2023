//Exercise 4

    console.log('***************');
    console.log('The exercise 4 are shown on the first two alerts');
    console.log('***************');
    //Exercise 4.a

    var num1 = 0.3;
    if(num1 >= 0.5){
        alert('Exercise 4.a: Greater than or equal to 0,5')
    }else{
        alert('Exercise 4.a: Lower than 0,5')
    }

    console.log('');

    //Exercise 4.b

    var age = 40;

    if (age < 2){
        alert('Exercise 4.b: Baby')
    }else{
        if(age >= 2 && age <= 12){
            alert('Exercise 4.b: Child')
        }else{
            if(age >= 13 && age <= 19){
                alert('Exercise 4.b: Teenager')
            }else{
                if(age >= 20 && age <= 30){
                    alert('Exercise 4.b: Young')
                }else{
                    if(age >= 31 && age <= 60){
                        alert('Exercise 4.b: Adult')
                    }else{
                        if(age >= 61 && age <= 75){
                            alert('Exercise 4.b: Senior')
                        }else{
                            if(age > 75 ){
                                alert('Exercise 4.b: Elder')
                            }
                        }
                    }
                }
            }
        }
    };