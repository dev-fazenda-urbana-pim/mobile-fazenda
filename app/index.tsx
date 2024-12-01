import { Colors } from '@/constants/Colors';
import { Controller } from 'react-hook-form';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { ButtonLoading } from '@/components/ButtonLoading';
import { FormMessage } from '@/components/FormMessage';
import { ThemedText } from '@/components/ThemedText';
import useSignin from '@/hooks/useSignin';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const urbaninoLogo = require('@/assets/images/urbanino-logo.png');

export default function SigninScreen() {
  const { form, onSubmit, isPending } = useSignin()

  return (
    <SafeAreaView style={styles.container}>
      <Image source={urbaninoLogo} style={{ marginHorizontal: "auto" }} />

      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 16 }}>
        Entre em sua conta
      </Text>

      <Text style={{ textAlign: 'center', marginBottom: 24 }}>
        Não tem uma conta? {""}
        <Link href="/register" style={{ fontWeight: "bold", color: Colors.blue['indigo-dye'] }}>
          <ThemedText type='link'>Cadastre-se aqui</ThemedText>
        </Link>
      </Text>

      <Controller
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormMessage error={form.formState.errors.email?.message} />
          </View>
        )}
        name="email"
      />

      <Controller
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#888"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
            />
            <FormMessage error={form.formState.errors.password?.message} />
          </View>
        )}
        name="password"
      />

      <ButtonLoading isLoading={isPending} onPress={form.handleSubmit(onSubmit)}>
        Entrar
      </ButtonLoading>

      <Text style={{ color: Colors.blue['indigo-dye'], marginTop: 24 }}>
        Em caso de perda de acesso, entre em contato com
        seu gerente ou supervisor.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.blue['indigo-dye'],
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
