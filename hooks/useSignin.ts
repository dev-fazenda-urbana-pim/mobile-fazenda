import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { ToastAndroid } from "react-native";
import UserService from "../services/UserService";
import { FormDataLogin, schemaLogin } from "../validations/schemaLogin";
import useAuth from "./useAuth";

export default function useSignin() {
  const { signin } = useAuth()
  const router = useRouter()

  const form = useForm<FormDataLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaLogin),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: UserService.signin,
    onError: (error: Error) => {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    onSuccess: (data) => {
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      router.push('/(tabs)/production')
      form.reset()
    },
  })

  async function onSubmit(values: FormDataLogin) {
    const data = await mutateAsync(values)

    signin(data.accessToken)
  }

  return {
    form,
    onSubmit,
    isPending,
  };
}
