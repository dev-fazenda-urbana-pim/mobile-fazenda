import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

export function FormMessage({ error }: { error: string | undefined }) {
  if (!error) return null

  return <Text style={{ color: Colors.danger, marginBottom: 16 }}>{error}</Text>
}
