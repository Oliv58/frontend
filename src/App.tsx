import { useForm } from "react-hook-form";
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [preis, setPreis] = useState(50);
  const {
    register,
    handleSubmit,
    control,
    submissionId,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    defaultValues: {
      "isbn": "",
      "titel": "",
      "art": "",
      "preis": "1",
      "lieferbar": [],
      "datum": "",
      "schlagw-rter": []
    }
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  if (submissionId) {
    return <p>Thank you! Submission Id: {submissionId}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Suche</h1>

      <div>
        <label>
          <span>ISBN</span>
          <input
            {...register("isbn", {
              minLength: {
                value: 13,
                message: "13 Ziffern sind nötig"
              },
              maxLength: {
                value: 13,
                message: "13 Ziffern sind nötig"
              },
            })}
            aria-invalid={errors["isbn"] ? "true" : "false"}
            placeholder="ISBN"
            type="search"
          />
        </label>
        {errors["isbn"] && <p role="alert">{errors["isbn"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Titel</span>
          <input
            {...register("titel", {
              minLength: {
                value: 1,
                message: "Titel zu kurz"
              },
              maxLength: {
                value: 100,
                message: "Titel zu lang"
              },
            })}
            aria-invalid={errors["titel"] ? "true" : "false"}
            placeholder="Titel"
            type="search"
          />
        </label>
        {errors["titel"] && <p role="alert">{errors["titel"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Art</span>
          <select
            {...register("art")}
          >
            <option value="HARDCOVER">Hardcover</option>
            <option value="EPUB">EPUB</option>
            <option value="PAPERBACK">PAPERBACK</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <span>Preis: {preis} €</span>
          <input
            {...register("preis")}
            type="range"
            min="1"
            max="100"
            step="1"
            value={preis}
            onChange={(e) => setPreis(e.target.value)}
          />
        </label>
      </div>


      <div>
  <label className="switch-label">
    <span>Lieferbar?</span>
    <label className="switch">
      <input
        type="checkbox"
        {...register("lieferbar")}
      />
      <span className="slider"></span>
    </label>
  </label>
</div>

      <div>
        <label>
          <span>Datum</span>
          <input
            {...register("datum")}
            type="date"
          />
        </label>
      </div>

      <div>
        <p>Schlagwörter</p>
        {[
          { label: "Typescript", value: "Typescript" },
          { label: "Java", value: "Java" },
          { label: "Javascript", value: "Javascript" },
          { label: "Python", value: "Python" }
        ].map(({ label, value }, index) => {
          return (
            <label key={value + index}>
              <span>{label}</span>
              <input
                {...register("schlagw-rter")}
                aria-invalid={errors["schlagw-rter"] ? "true" : "false"}
                value={value}
                type="checkbox"
              />
            </label>
          );
        })}
        {errors["schlagw-rter"] && <p role="alert">{errors["schlagw-rter"]?.message}</p>}
      </div>

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}
