import { FormProvider, useForm } from "react-hook-form";
import ISBNFeld from "./FormularComponents/ISBNFeld";
import TitelFeld from "./FormularComponents/TitelFeld";
import PreisSlider from "./FormularComponents/PreisSlider";
import LieferbarSwitch from "./FormularComponents/LieferbarSwitch";
import DatumFeld from "./FormularComponents/DatumFeld";
import ArtSelect from "./FormularComponents/ArtSelect";
import SchlagwörterCheckboxen from "./FormularComponents/SchlagwörterCheckboxen";
import Rating from "./FormularComponents/Rating";
import axios from "../api/axios";

export default function BuchAnlegenForm() {
  const methods = useForm({
    defaultValues: {
      isbn: "",
      titel: "",
      art: "",
      preis: 0,
      lieferbar: false,
      datum: new Date().toISOString().split("T")[0],
      schlagwörter: [],
      rating: 0
    }
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post('/rest', data); // baseURL wird automatisch vorangestellt
      alert('Buch erfolgreich angelegt!');
      methods.reset();
    } catch (err: any) {
      alert('Fehler: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>Buch anlegen</h1>

        <ISBNFeld />
        <TitelFeld />
        <ArtSelect />
        <PreisSlider />
        <LieferbarSwitch />
        <DatumFeld />
        <SchlagwörterCheckboxen />
        <Rating />

        <button disabled={methods.formState.isSubmitting}>Anlegen</button>
      </form>
    </FormProvider>
  );
}
