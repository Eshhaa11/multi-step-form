const Step2 = ({ formData, setFormData }) => (
    <div>
      <h2>Step 2: Enter your email?</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  );
  
  export default Step2;
  