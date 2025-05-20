"use client";

import { useActionState, useEffect } from "react";
import createNewBuilding from "../action/buildings-actions";
import toast, { Toaster } from "react-hot-toast";

const CreateBuildingForm = () => {
  const [state, action, pending] = useActionState(createNewBuilding, {
    success: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) toast.success(`Prédio cadastrado: ${state.data.name}`);
  }, [state]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        action={action}
        style={{
          display: "flex",
          gap: "0.5rem",
          flexDirection: "column",
          border: "1px solid white",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" style={{ width: "150px" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="complement">Complemento:</label>
          <input
            type="text"
            id="complement"
            name="complement"
            style={{ width: "150px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="ventilationCompatible">Ar extra?:</label>
          <select
            name="ventilationCompatible"
            id="ventilationCompatible"
            style={{ width: "150px" }}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="isLocalOperation">Operação Local?</label>
          <select
            name="isLocalOperation"
            id="isLocalOperation"
            style={{ width: "150px" }}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={pending}
          style={{ width: "150px", height: "18px", marginTop: "1rem" }}
        >
          Enviar
        </button>
      </form>

      <Toaster />
    </div>
  );
};
export default CreateBuildingForm;
