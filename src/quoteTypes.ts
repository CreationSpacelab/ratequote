export interface QuoteType {
  lenderName: string;
  loanType: string;
  interestRate: number;
  closingCosts: number;
  monthlyPayment: number;
  apr: number;
}

export interface RateQuoteUIProps {
  loanSize: string;
  creditScore: string;
  propertyType: string;
  occupancy: string;
}

export interface QuoteReducerProps {
  error: null;
  loading: boolean;
  quotes: QuoteType[];
  type: string;
}

export interface RateQuoteFormProps {
  setFormData: (values: RateQuoteUIProps) => Promise<void>;
}