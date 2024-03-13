/* 
        1. how to use js with html and css
        2. get element or elements from dom
            2.1: getElementById
            2.2: getElementByClassName
            2.3: querySelector
            2.4: querySelectorAll
        3. dynamically add element to the dom: document.createElement
            3.5: set value to the innerHtml
        4. get and set value from/to a dom element
            4.1: use innerText (h1, p, h5, div, span, strong)
            4.2: use value (input, textArea)
        5. add event listener (even handler)
            5.1: click, focus, blur, onchange, keyup
            5.2: addEvenListener onclick ="myHandler()" 
        6. use function to reduce duplicate code
        7. event bubble and event delegate
 */
 

        const today = new Date();
        console.log(today);

        const d2 = new Date('2022-12-7');
        const d1 = new Date('2022-05-30');

        if(d1.getTime() < d2.getTime()){
            console.log('match was before december');
        }else{
            console.log('match was not december');
        }

        //date compar 

        const number = 23;
        if(typeof number === 'number'){
            console.log('value is a number');
        }else{
            console.log('value is not number');
        }

        const numbers = [3, 23, 12, 90];
        const student = {name: 'Rongila Rafsan', job: 'coding'};
        //console.log(Array,isArray(numbers));
        console.log(Array.isArray(number));
        console.log(Array.isArray(student));
        console.log(typeof student);

        //isNaN=> number noy
        //isNaN(2)=> false
        //isNaN({})=> true
        //isNaN=> ([5])=> false
        //check undefine  in javascript=> google