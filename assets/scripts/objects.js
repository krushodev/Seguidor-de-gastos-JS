class Persona {

    constructor(nombre,dinero) {
  
      this.nombre = nombre;
  
      this.dinero = dinero;
  
    }
  
    calcularGasto() {
  
      if(gasto > 0) {
  
        this.dinero -= gasto;
  
        const nuevoGasto = {
  
          motivoGasto: motivo,
  
          dineroGastado: gasto,
  
        };
  
        listaGastos.push(nuevoGasto);
  
        tieneGastos = true;
  
      }
  
    }
  
    verGastos() {
  
      for (const elemento of listaGastos) {
  
      let divGasto = document.createElement("div");
  
      divGasto.innerHTML = `<p class="m-3">Gastaste <b>$${elemento.dineroGastado}</b>, en <b>${elemento.motivoGasto}</b></p>
                            <p class="fw-bold m-3">${fecha.toLocaleString()}</p>
                            <a class="d-block mx-3 mt-3" style="cursor: pointer">
                              <i id="botonBorrarGastos" data-gasto="${elemento.motivoGasto}" class="fa-solid fa-trash-can text-danger"></i>
                            </a>`;

      divGasto.setAttribute("class","d-flex justify-content-evenly rounded-2 mt-4 mb-2");

      divGasto.setAttribute("id",`${elemento.motivoGasto}`)

      divGasto.style.border = "2px solid black";
  
      document.getElementById("listaDeGastos").append(divGasto);
  
      }
    
    };
  
    setNombreUsuario(nombreUsuario) {
  
      this.nombre = nombreUsuario;
  
    }
  
    setDineroUsuario(dineroUsuario) {
  
      this.dinero = dineroUsuario;
  
    }

    eliminarGasto(gasto) {

      for(let i in listaGastos) {

        if (listaGastos[i].motivoGasto === gasto) {

          if (listaGastos.length === 1) {

            tieneGastos = false;

          }

          document.getElementById(gasto).remove();

          this.setDineroUsuario(this.dinero += Number(listaGastos[i].dineroGastado));

          insertarStorage("dineroUsuario", this.dinero);

          document.getElementById("tituloBilletera").innerHTML = `Tu dinero es de: $${this.dinero}`;

          listaGastos.splice(i,1);

          
        }

      }

      document.getElementById("tituloBilletera").innerHTML = `Tu dinero es de: $${this.dinero}`;

      insertarStorage("listaDeGastos",JSON.stringify(listaGastos));

    }
  
  }