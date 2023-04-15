//Exercise 4
    //Exercise 4.a

    var num1 = 0.3;
    if(num1 >= 0.5){
        alert('Greater than or equal to 0,5')
    }else{
        alert('Lower than 0,5')
    }

    console.log('');

    //Exercise 4.b

    var age = 40;

    if (age < 2){
        alert('Baby')
    }else{
        if(age >= 2 && age <= 12){
            alert('Child')
        }else{
            if(age >= 13 && age <= 19){
                alert('Teenager')
            }else{
                if(age >= 20 && age <= 30){
                    alert('Young')
                }else{
                    if(age >= 31 && age <= 60){
                        alert('Adult')
                    }else{
                        if(age >= 61 && age <= 75){
                            alert('Senior')
                        }else{
                            if(age > 75 ){
                                alert('Elder')
                            }
                        }
                    }
                }
            }
        }
    };

   //This exercises are displayed by the only two alerts that have the index.html in a consecutive way.