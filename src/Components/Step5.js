const Step5 = ({ formData }) => (
    <div>
      <h2>Step 5: Review Info</h2>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Password:</strong> {formData.password.replace(/./g, '*')}</li>
        <li><strong>Age:</strong> {formData.age}</li>
      </ul>
      <p>If everything looks good, hit Submit!</p>
    </div>
  );
  
  export default Step5;
  