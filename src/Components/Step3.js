const Step3 = ({ formData, setFormData }) => (
    <div>
      <h2>Step 3: Create a password</h2>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
  );
  
  export default Step3;
  