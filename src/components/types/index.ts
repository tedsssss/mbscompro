export interface ServiceCard {
  icon: string
  title: string
  description: string
}

export interface ContactInfo {
  email: string
  phone: string
}

export interface Address {
  main: string
  secondary: string
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactButton {
  icon: string;
  text: string;
  type: "email" | "phone";
  backgroundColor: string;
}

export interface AddressInfo {
  icon: string;
  name: string;
  addresses: string[];
}


