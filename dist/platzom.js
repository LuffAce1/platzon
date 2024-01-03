"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = platzom;
function platzom(str) {
  var translation = str;
  //si la pabra termina en ar se le quitan estos 2 caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  // si la palbra inicia con Z, se añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    //translation=translation+'pe'
    translation += 'pe';
  }
  //si la palabra traducida tiene 10 o mas letras
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var SecondHalf = translation.slice(Math.round(length / 2));
    translation = "".concat(firstHalf, "-").concat(SecondHalf);
  }
  //si la pabra original es un palindromo, ninuna regla anteiror cuenta y
  //se devuelve la misma palabra intercalando mayuscula y minuscula 
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay() {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var _char = str.charAt(i);
      translation += capitalize ? _char.toUpperCase() : _char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  str = str.toLowerCase();
  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}