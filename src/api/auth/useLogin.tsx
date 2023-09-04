import { useMutation } from "react-query";
import { register } from "./api";

export function useLogin() {
  const mutation = useMutation(register, {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
    },
  });
  return mutation;
}
