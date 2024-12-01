import { Colors } from "@/constants/Colors"
import React from "react"
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native"

interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isLoading: boolean
  onPress: () => void
}

export function ButtonLoading({ children, isLoading, onPress }: ButtonLoadingProps) {
  return (
    <Pressable
      style={[styles.button, isLoading && styles.buttonDisabled]}
      disabled={isLoading}
      onPress={onPress}
    >
      {isLoading ? <ActivityIndicator color={Colors.light.background} /> : <Text style={styles.buttonText}>{children}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue['indigo-dye'],
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
