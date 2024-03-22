import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <body class="imagen">
        <div class ="intro">
            <h1 class = "title">🡆 ¡Bienvenido a la página de frases! 🡄</h1>
            <i class="fas fa-arrow-right"></i>
            <a href = "/frase" class="Boton_buscar">ENCUENTRA TU FRASE GANADORA</a>
            <i class="fas fa-arrow-left"></i>
        </div>
        <div class="rSticIzq"></div>
        <div class="rSticMid"></div>
        <div class="rSticDer"></div>
        <div class="rCatRainbow">HOLA</div>
   </body>
  );
}
