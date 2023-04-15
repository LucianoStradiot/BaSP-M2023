//Exercise 5

    console.log('***************');
    console.log('Exercise 5');
    console.log('***************');
    console.log('The exercises 5.a, 5.b and 5.c are shown on the alerts');
    console.log('***************');
    console.log('');

    //Exercise 5.a

    var fruits = ['banana', 'apple', 'kiwi', 'orange', 'watermelon']

    for (var i = 0; i < fruits.length; i++)
    alert('Exercise 5.a: ' +  fruits[i]);

    //Exercise 5.b

    for (var i = 0; i < fruits.length; i++)
    alert('Exercise 5.b: ' +  fruits[i].substring(0,1).toUpperCase() + fruits[i].substring(1).toLowerCase());

    //Exercise 5.c

    var sentence = '';

    for (var i = 0; i < fruits.length; i++){
        sentence += fruits[i] + ' ';
    }
    alert('Exercise 5.c: ' + sentence);

    //Exercise 5.d

    console.log('Exercise 5.d');
    var array = []

    for (var i = 0; i < 10; i++){
        array.push(i)
    }
    console.log(array);