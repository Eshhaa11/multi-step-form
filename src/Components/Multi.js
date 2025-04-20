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
            phone: "",
            address: "",
            city: "",
          });

        const steps = [
            <Step1 formData={formData} setFormData={setFormData} />,
            <Step2 formData={formData} setFormData={setFormData} />,
            <Step3 formData={formData} setFormData={setFormData} />,
            <Step4 formData={formData} setFormData={setFormData} />,
        ]

    return (
        <div>
            
        </div>
         
    );
};