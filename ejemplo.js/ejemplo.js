// Esperamos a que cargue todo el documento antes de ejecutar
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formEcuaciones");

    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            // Evitamos que la página se recargue
            event.preventDefault();

            // Capturamos los valores
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);

            let contenedorResultado = document.getElementById("resultado");
            let mensaje = "";

            // 1. Verificamos si 2*a es igual a 0 (si A es 0)
            let denominador = 2 * a;
            if (denominador === 0) {
                mensaje = " Error: El valor de 2*a da 0 (A no puede ser 0).";
            } else {
                // 2. Calculamos el discriminante (b^2 - 4ac)
                let discriminante = (b ** 2) - (4 * a * c);

                // 3. Condicional si el discriminante es menor a 0 (No hay solución)
                if (discriminante < 0) {
                    mensaje = " No hay solución real (El discriminante es menor a 0).";
                } else {
                    // 4. Si la raíz es mayor o igual a 0, calculamos con Math.sqrt
                    let raiz = Math.sqrt(discriminante);
                    let x1 = (-b + raiz) / denominador;
                    let x2 = (-b - raiz) / denominador;

                    mensaje = `<strong>¡Sí hay respuesta!</strong><br>
                               <strong>X1 =</strong> ${x1.toFixed(2)}<br>
                               <strong>X2 =</strong> ${x2.toFixed(2)}`;
                }
            }

            // Mostramos el mensaje en el div
            contenedorResultado.innerHTML = mensaje;
        });
    }
});