const Step4 = ({ formData, setFormData }) => (
    <div>
      <h2>Step 4: Enter your Age</h2>
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
    </div>
  );
  
  export default Step4;
  