import { FormProvider, useForm } from "react-hook-form";
import ISBNFeld from "./FormularComponents/ISBNFeld";
import TitelFeld from "./FormularComponents/TitelFeld";
import PreisSlider from "./FormularComponents/PreisSlider";
import LieferbarSwitch from "./FormularComponents/LieferbarSwitch";
import DatumFeld from "./FormularComponents/DatumFeld";
import ArtSelect from "./FormularComponents/ArtSelect";
import SchlagwörterCheckboxen from "./FormularComponents/SchlagwörterCheckboxen";
import Rating from "./FormularComponents/Rating";
import { sucheBuecher } from "../api/buchApi"; 

export default function BuchSuchForm() {
  const methods = useForm({
    defaultValues: {
      isbn: "",
      titel: "",
      art: "",
      preis: 50,
      lieferbar: false,
      datum: "",
      schlagwörter: [],
      rating: 0
    }
  });

  const onSubmit = async (data: any) => {
    try {
      // Filtere alle nicht-leeren Werte raus
      const filteredData: Record<string, any> = {};
      Object.entries(data).forEach(([key, value]) => {
        if (
          value !== "" &&
          value !== null &&
          !(Array.isArray(value) && value.length === 0)
        ) {
          filteredData[key] = value;
        }
      });

      const result = await sucheBuecher(filteredData);
      console.log("Suchergebnisse:", result);
      // Optional: Ergebnisse im State speichern und anzeigen
    } catch (error: any) {
      alert("Fehler bei der Suche: " + error.message);
    }
  };

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

        <button disabled={methods.formState.isSubmitting}>Suchen</button>
      </form>
    </FormProvider>
  );
}