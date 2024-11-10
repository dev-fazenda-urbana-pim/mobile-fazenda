import LineChart from "@/components/LineChart";
import { View } from "react-native";

export default function Production() {
  const data = [500, 450, 700, 310, 270, 510, 340, 400]
  const total = data.reduce((acc, curr) => acc + curr, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <View>
      <LineChart data={data} color="#3498db" title={total} subtitle="Evolução de Janeiro à Outubro de 2024" />
    </View>
  );
}
