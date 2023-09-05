import { useMutation } from "react-query";
import { login, register } from "./api";

export function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
    },
  });
  return mutation;
}

export function useRegister() {
  const mutation = useMutation(register, {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
    },
  });
  return mutation;
}
