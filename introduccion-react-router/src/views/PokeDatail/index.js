import { useParams } from "react-router-dom";
export default function PokeDetail() {
  const { id } = useParams();
  console.log(id);
  return <div>PokeDetail</div>;
}
