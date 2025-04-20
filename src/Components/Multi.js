import { useState } from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import './Form.css';

function Form () {
        const [step, setStep] = useState(0);
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            password: "",
            age: "",
          });

        const steps = [
            <Step1 formData={formData} setFormData={setFormData} />,
            <Step2 formData={formData} setFormData={setFormData} />,
            <Step3 formData={formData} setFormData={setFormData} />,
            <Step4 formData={formData} setFormData={setFormData} />,
            <Step5 formData={formData} />,
        ];
        

        const isLastStep = step === steps.length - 1;
        const isFirstStep = step === 0;


        const next = () => {
            if (!isLastStep) setStep(prev => prev + 1);
          };

          const back = () => {
            if (!isFirstStep) setStep(prev => prev - 1);
          };

          
          const handleSubmit = (e) => {
            e.preventDefault();
            if (isLastStep) {
              console.log('Form Data:', formData);
              alert('Form submitted successfully!');
            } else {
              next();
            }
          };


          return (
            <form onSubmit={handleSubmit} className="form-cont">
              {steps[step]}
              <div>
                {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                <button type="submit">{isLastStep ? 'Submit' : 'Next'}</button>
              </div>
            </form>
         
    );
};