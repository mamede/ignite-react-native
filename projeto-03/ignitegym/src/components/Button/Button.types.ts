import { IButtonProps } from "native-base";

export type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}