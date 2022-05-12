import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginUiType {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  register: UseFormRegister<FieldValues>
  onClickLogin: () => void
  onClickMoveSignIn: () => void
}