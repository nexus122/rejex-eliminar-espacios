// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/
// Elimina todos los espacios de este string
// Pista. 'x' es un string. Mirar su método replaceAll :)

function noSpace(x) {
    let pattern =/\s/g;
    return x.replace(pattern, "");
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');