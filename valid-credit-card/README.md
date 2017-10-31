# 2. Tarjeta de crédito válida.
Es una página web que pide, por medio de un prompt(), el usuario introduce el número de una tarjeta de crédito para confirmar su validez, esto se hace por medio del algoritmo Luhn.

# Pseudocodigo:
1. Crear una variable en la que el usuario ingrese el número de la tarjeta
2. Comprobar que el número ingresado sea un número y en caso de tener un campo vacío decir al usuario que no es valido.
3. Contener la serie de números en un arreglo.
4. Crear una función llamada: isValidCard que reciban un arreglo como parametro.
5. En  la función isValidCard:
 4.1 Invetir el arreglo introducido.
 4.2 Recorrer el arreglo.
 4.3 Multiplicar por 2 a los elementos en la posición impar.
 4.4 Recorrer cada elemento y comprobar que no sean mayor a 9, en caso de serlo, restar 9 al elemento.
 4.5 Sumar todos los elementos contenidos en el arreglo y guardarlo en una variable llamada ResOfSum.
6. Comprobar que el resultado de la suma dividido entre 10 es igual a cero, en caso de ser cero devolver valid card number, si es distinto de cero la función debe devolver: invalid card number.
6. Fin.
![Diagrama de flujo del programa: Tarjeta de crédito válida.](http://subefotos.com/ver/?60db24904178c588ea31ec35229c0b6ao.png)
