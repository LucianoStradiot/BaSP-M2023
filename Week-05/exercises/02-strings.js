//Exercise 2
    //Exercise 2.a

    console.log('Exercise 2.a');

    var name1 = 'Evangelina';

    console.log(name1.toUpperCase());
    console.log('');
    //Exercise 2.b

    console.log('Exercise 2.b');

    var name1 = 'Evangelina';
    var shortName = name1.substring(0,5);

    console.log(shortName);
    console.log('');

    //Exercise 2.c

    console.log('Exercise 2.c');

    var name1 = 'Evangelina';
    var shortName = name1.substring(7);

    console.log(shortName);
    console.log('');

    //Exercise 2.d

    console.log('Exercise 2.d');

    var name1 = 'Evangelina';

    var realName = name1.substring(0,1).toUpperCase() + name1.substring(1).toLowerCase();

    console.log(realName);
    console.log('');

    //Exercise 2.e

    console.log('Exercise 2.e');

    var name1 = 'Evangelina ';
    var spaceName = name1.indexOf(' ');

    console.log(spaceName);
    console.log('');

    //Exercise 2.f

    console.log('Exercise 2.f');

    var name1 = 'evangelina josephine';
    var spaceName = name1.substring(0,1).toUpperCase() + name1.substring(1,10).toLowerCase() + ' ' + name1.substring(name1.indexOf(' ')+1, name1.indexOf(' ')+2).toUpperCase() + name1.substring(name1.indexOf(' ')+2).toLowerCase();

    console.log(spaceName);
    console.log('');

    //The console.log that have an empty string I used for a netear code.
