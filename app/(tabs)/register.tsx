import { Colors } from '@/constants/Colors';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { FormMessage } from '@/components/FormMessage';
import { ThemedText } from '@/components/ThemedText';
import { FormDataRegister, schemaRegister } from '@/validations/schemaRegister';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const urbaninoLogo = require('@/assets/images/urbanino-logo.png');

export default function HomeScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaRegister),
  });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <SafeAreaView style={styles.container}>
      <Image source={urbaninoLogo} style={{ marginHorizontal: "auto" }} />

      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 16 }}>
        Crie sua conta
      </Text>

      <Text style={{ textAlign: 'center', marginBottom: 24 }}>
        Já possui uma conta? {""}
        <Link href="/" style={{ fontWeight: "bold", color: Colors.blue['indigo-dye'] }}>
          <ThemedText type='link'>Faça login aqui</ThemedText>
        </Link>
      </Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#888"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormMessage error={errors.email?.message} />
          </View>
        )}
        name="email"
      />

      <Controller
        control={control}
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
            <FormMessage error={errors.email?.message} />
          </View>
        )}
        name="email"
      />

      <Controller
        control={control}
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
            <FormMessage error={errors.password?.message} />
          </View>
        )}
        name="password"
      />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>

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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
