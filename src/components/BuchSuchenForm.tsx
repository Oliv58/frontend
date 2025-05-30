import { FormProvider, useForm } from "react-hook-form";
import ISBNFeld from "./FormularComponents/ISBNFeld";
import TitelFeld from "./FormularComponents/TitelFeld";
import PreisSlider from "./FormularComponents/PreisSlider";
import LieferbarSwitch from "./FormularComponents/LieferbarSwitch";
import DatumFeld from "./FormularComponents/DatumFeld";
import ArtSelect from "./FormularComponents/ArtSelect";
import SchlagwörterCheckboxen from "./FormularComponents/SchlagwörterCheckboxen";
import Rating from "./FormularComponents/Rating";

export default function BuchSuchForm() {
  const methods = useForm({
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

  const onSubmit = (data: any) => alert(JSON.stringify(data));

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
