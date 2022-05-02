function onLoad () {
     
   const dependencias = {
       tela: Tela,
       util: Util
   }

   const jogoDaMemoria = new JogoDaMemoria(dependencias)
   jogoDaMemoria.inicializar()
}

window.onload = onLoad