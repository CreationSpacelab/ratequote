import React from "react";

// currency.js is a lightweight ~1kb javascript library for working with currency values.
import Cleave from "cleave.js/react";
import { Form, Field } from "react-final-form";

import { RateQuoteFormProps } from "../../quoteTypes";

import { PROPERTY_TYPE_OPTIONS, OCCUPANCY_OPTIONS } from "./formOptions";
import { ButtonWrapper, FormComponent, InputGroup, InputWrapper } from "./FormStyles";

const DEFAULT_LOAN_SIZE = "450000"
const DEFAULT_CREDIT_SCORE = "680"

export const RateQuoteForm: React.FC<RateQuoteFormProps> = ({ setFormData }: RateQuoteFormProps) => {
  const required = (value: string) => (value ? undefined : "Required");

  return (
    <Form
      onSubmit={setFormData}
      initialValues={{}}
      render={({ handleSubmit, submitting, pristine }) => (
        <FormComponent onSubmit={handleSubmit}>
          <div>
            <InputGroup hasDollarSize>
              <label htmlFor="loanSize">Loan Size</label>
              <Field
                validate={required}
                name="loanSize"
                pattern="[0-9]"
                type="text"
                defaultValue={DEFAULT_LOAN_SIZE}
              >
                {({ input, meta }) => (
                  <InputWrapper>
                    <small>$</small>
                    <Cleave {...input} placeholder="Enter loan size"
                      options={{
                        numeral: true,
                        numeralThousandsGroupStyle: "thousand"
                      }}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </InputWrapper>
                )}
              </Field>
            </InputGroup>
            <InputGroup>
              <label htmlFor="creditScore">Credit Score</label>
              <Field
                validate={required}
                name="creditScore"
                type="number"
                placeholder="Enter credit score"
                defaultValue={DEFAULT_CREDIT_SCORE}
              >
                {({ input, meta }) => (
                  <InputWrapper>
                    <input {...input} 
                      max="830"
                      min="0" 
                      pattern="[0-9]{3}" 
                      title="Must only contain numbers"
                      />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </InputWrapper>
                )}
              </Field>
            </InputGroup>
          </div>
          <div>
            <InputGroup>
              <label htmlFor="propertyType">Property Type</label>
              <Field
                name="propertyType"
                component="select"
                defaultValue="SingleFamily"
              >
                {PROPERTY_TYPE_OPTIONS.map((option, i) => {
                  return <option key={i} value={option.value}>{option.label}</option>;
                })}
              </Field>
            </InputGroup>
            <InputGroup>
              <label htmlFor="occupancy">Occupancy</label>
              <Field
                name="occupancy"
                component="select"
                defaultValue="Primary"
              >
                {OCCUPANCY_OPTIONS.map((option, i) => {
                  return <option key={i} value={option.value}>{option.label}</option>;
                })}
              </Field>
            </InputGroup>
            <ButtonWrapper>
              <button data-testid="quote-rates-trigger" type="submit" disabled={submitting || pristine}>
                Quote Rates
              </button>
            </ButtonWrapper>
          </div>
        </FormComponent>
      )} />
  );
};