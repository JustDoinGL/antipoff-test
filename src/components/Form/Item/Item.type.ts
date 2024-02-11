export type ItemProps = {
  title: string;
  type: string;
  value: string;
  handleSubmit: (e: string) => void;
  helper: string;
  placeholder: string;
  isRight: boolean;
}