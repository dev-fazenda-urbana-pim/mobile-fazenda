import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { ToastAndroid } from "react-native";
import UserService from "../services/UserService";
import { FormDataRegister, schemaRegister } from "../validations/schemaRegister";

export default function useSignup() {
  const router = useRouter()

  const form = useForm<FormDataRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaRegister),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: UserService.signup,
    onError: (error: Error) => {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    onSuccess: (data) => {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      router.push('/(tabs)/production')
      form.reset()
    },
  })

  async function onSubmit(values: FormDataRegister) {
    await mutateAsync(values)
  }

  return {
    form,
    onSubmit,
    isPending,
  };
}
