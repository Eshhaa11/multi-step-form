const Step1 = ({ formData, setFormData }) => (
    <div>
      <h2>Step 1: Enter your name?</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
  );
  
  export default Step1;
  