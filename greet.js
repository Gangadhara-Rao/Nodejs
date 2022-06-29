function greetMaker(name){

    function greet(){

        console.log('Hello '+ name);



    }

    return greet;

}



var greetGangadhar = greetMaker('Gangadhar');

greetGangadhar();