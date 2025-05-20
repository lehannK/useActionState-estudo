import CreateBuildingForm from "./form/create-building-form";

const CreateBuilding = async () => {
  return (
    <div>
      <h3
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        Formulário para criação de prédio
      </h3>
      <br />
      <CreateBuildingForm />
    </div>
  );
};
export default CreateBuilding;
