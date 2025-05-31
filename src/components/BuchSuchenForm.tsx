import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import ISBNFeld from "./FormularComponents/ISBNFeld";
import TitelFeld from "./FormularComponents/TitelFeld";
import PreisSlider from "./FormularComponents/PreisSlider";
import LieferbarSwitch from "./FormularComponents/LieferbarSwitch";
import DatumFeld from "./FormularComponents/DatumFeld";
import ArtSelect from "./FormularComponents/ArtSelect";
import SchlagwörterCheckboxen from "./FormularComponents/SchlagwörterCheckboxen";
import Rating from "./FormularComponents/Rating";

export type BuchSuchFormValues = {
  isbn: string;
  titel: string;
  art: string;
  preis: number;
  lieferbar: boolean;
  datum: string;
  schlagwörter: string[];
  rating: number;
};

type BuchSuchFormProps = {
  onSubmit: SubmitHandler<BuchSuchFormValues>;
} 

export default function BuchSuchForm({ onSubmit } : BuchSuchFormProps) {
  const methods = useForm<BuchSuchFormValues>({
    defaultValues: {
      isbn: "",
      titel: "",
      art: "",
      preis: 50,
      lieferbar: false,
      datum: "",
      "schlagwörter": [],
      rating: 0
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>Suche</h1>
        <ISBNFeld />
        <TitelFeld />
        <ArtSelect />
        <PreisSlider />
        <LieferbarSwitch />
        <DatumFeld />
        <SchlagwörterCheckboxen />
        <Rating />
        <button disabled={methods.formState.isSubmitting}>Submit</button>
      </form>
    </FormProvider>
  );
}
