export const makes = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const selectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    minHeight: "52px",
    boxShadow: state.isFocused ? "0 0 0 1px rgba(79, 70, 229, 0.5)" : "none",
    "&:hover": {
      borderColor: "rgba(79, 70, 229, 0.5)",
    },
    color: "white",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided: any) => ({
    ...provided,
    background: "rgba(26, 26, 33, 0.95)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    marginTop: "8px",
    overflow: "hidden",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isSelected
      ? "rgba(79, 70, 229, 0.3)"
      : state.isFocused
      ? "rgba(255, 255, 255, 0.1)"
      : "transparent",
    color: "white",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
    "&:hover": {
      color: "white",
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
    "&:hover": {
      color: "white",
    },
  }),
};