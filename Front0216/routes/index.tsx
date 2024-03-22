import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
   <div>
    <a href = "/buscar">Buscar</a>
   </div>
  );
}
