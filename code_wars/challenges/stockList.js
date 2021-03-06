/*

https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of one of the stocklists could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

  M = {"A", "B", "C", "W"} 
or

  M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

  (A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note:
In the result codes and their values are in the same order as in M.

*/

function stockList(listOfArt, listOfCat) {
     
    const arrListOfArt = listOfArt;
    const arrListOfCat = listOfCat;
    let bookQtys = arrListOfCat.map(item => {
        return {
            category: item,
            quantity: 0
        }
    });
    let result = [];

    for (let i = 0; i < arrListOfCat.length; i++) {

        const category = arrListOfCat[i];

        arrListOfArt.forEach(article => {
            const articleSplit = article.split(' ');
            const articleCategory = articleSplit[0][0];
            const articleCode = Number(articleSplit[1]);

            if (category === articleCategory) {
                const categoryToSum = bookQtys.find(item => {
                    return item.category === articleCategory
                });

                categoryToSum.quantity += articleCode;
            }
        })
    }

    const noResults = bookQtys.filter(book => {
        return book.quantity !== 0;
    });

    if (noResults.length === 0) {
        return '';
    }
    
    bookQtys.forEach(book => {
        result.push(`(${book.category} : ${book.quantity})`)
    });

    return result.join(' - ');
}

const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B"];

const d = ["ABAR 200", "CDXE 500", "FKWR 250", "GTSQ 890"];
const e = ["B", "R", "D", "X"];

const foo = stockList(b, c);
const bar = stockList(d, e);

console.log(foo);
console.log(bar);



// BEST ANSWER
// ===========

function stockList(listOfArt, listOfCat) {
    var qs = {};
    if (!listOfArt.length) return '';
  
    listOfArt.forEach(function(art) {
      var cat = art[0];
      qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
    });
  
    return listOfCat.map(function(c) {
      return '(' + c + ' : ' + (qs[c] | 0) + ')';  
    }).join(' - ');  
}