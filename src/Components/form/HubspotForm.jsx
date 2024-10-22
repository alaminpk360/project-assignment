import HubspotForm from "react-hubspot-form";

const HubSpotForm = () => {
  return (
    <>
      <HubspotForm
        portalId="144951773"
        formId="11a2c482-331f-4fd7-8a26-deba08f9563d"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </>
  );
};

export default HubSpotForm;
