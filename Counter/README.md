# El contador colorido
Este contador muestras los números en verde cuando son positivos, en rojo cuando son negativos, y en casi negro cuando es un 0. Implementa la funcionalidad de la [Demo](https://js-beginners.github.io/counter-project/)

## Pasos a seguir

0. Renombra el fichero app.js; que contiene la solución al ejercicio. Crea uno nuevo.
1. Intenta primero simplemente recuperar los dos elementos del DOM al que debes aplicar el evento __click__
2. Comprueba que eres capaz de aplicarlo, haciendo una prueba simple, como por ejemplo, que al hacer clic, en uno de los botones, muestre una cosa. Y al hacer clic en otro botón, muestre un mensaje diferente por consola.
3. Vas a necesitar una variable para almacenar el valor del contador. Piensa bien donde debe ir.
4. La función invocada por el evento __click__ de **LOWER COUNT** debe decrementar la variable que has definido, y además, actualizar el valor en el elemento del DOM adecuado. Por otro lado, **ADD COUNT** debe incrementarla. No lo hagas todo a la vez. Primero comprueba que eres capaz de actualizar el valor de la variable y mostrarlo por consola. Y luego, lleva el valor de dicha variable al elemento del DOM que le corresponda.
5. Finalmente, investiga que propiedad de __style__ es necesario cambiar para modificar el color del texto. Piensa que vas a tener que aplicar un condicional para poner el texto en un color u otro.
6. **BONUS** Una solución quizás más modular es, en vez de cambiar el color a través de la propiedad __style__, sea añadir o eliminar una clase al elemento del DOM adecuado. De esta manera, solo cambiando el fichero CSS, podríamos modificar que colores corresponden a los números negativos, y qué colores corresponden a los números positivos. Investiga como eliminar o añadir clases a un elemento del DOM.

Finalmente, en __js/solution_provided.js__ tienes una solución del autor original.

## Restricciones

1. NO copies/pegues una línea de código. Ni siquiera de tu ejercicio anterior. El objetivo es que obtengas soltura y entendimiento en los datos que estás tratando.
