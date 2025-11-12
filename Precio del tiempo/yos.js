function calcular() {
  const horasTrabajo = parseFloat(document.getElementById("horas_trabajadas").value);
  const ganancia = parseFloat(document.getElementById("Tiempo_ganado").value);
  const costoVida = parseFloat(document.getElementById("Costo_Vida").value);

  if (isNaN(horasTrabajo) || isNaN(ganancia) || isNaN(costoVida)) {
    document.getElementById("resultado").innerHTML = "Por favor, llena todos los campos antes de calcular";
    return;
  }

  const tiempoGanado = (horasTrabajo * ganancia) / 60;
  const tiempoNeto = tiempoGanado - costoVida;

  let mensaje = "";
  if (tiempoNeto > 0) {
    mensaje = `<p style="color:lime;">Tiempo ganado al día: +${tiempoNeto.toFixed(2)} horas</p>`;
  } else if (tiempoNeto < 0) {
    mensaje = `<p style="color:red;">Tiempo perdido al día: ${tiempoNeto.toFixed(2)} horas</p>`;
  } else {
    mensaje = `<p>⏸ No hay ganancia ni pérdida de tiempo</p>`;
  }

  document.getElementById("resultado").innerHTML = mensaje;
}

function simular(periodo) {
  const horasTrabajo = parseFloat(document.getElementById("horas_trabajadas").value);
  const ganancia = parseFloat(document.getElementById("Tiempo_ganado").value);
  const costoVida = parseFloat(document.getElementById("Costo_Vida").value);

  if (isNaN(horasTrabajo) || isNaN(ganancia) || isNaN(costoVida)) {
    document.getElementById("simulacion").innerHTML = "Debes llenar todos los campos para simular";
    return;
  }

  const tiempoGanado = (horasTrabajo * ganancia) / 60;
  const tiempoNeto = tiempoGanado - costoVida;

  let dias = periodo === "semana" ? 7 : 30;
  const saldo = tiempoNeto * dias;

  let resultado = "";
  if (saldo > 0) {
    resultado = `<p style="color:lime;">En una ${periodo}, acumularías +${saldo.toFixed(2)} horas</p>`;
  } else if (saldo < 0) {
    resultado = `<p style="color:red;">En una ${periodo}, perderías ${saldo.toFixed(2)} horas. Riesgo de agotarte</p>`;
  } else {
    resultado = `<p>⏸ No hay cambio de tiempo durante la ${periodo}</p>`;
  }

  document.getElementById("simulacion").innerHTML = resultado;
}
