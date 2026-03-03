import type { Car } from "../types";

export const getPrice = (car: Car): number => {
  try {
    // Base prices by vehicle class (in Turkish Lira per day) - using EPA exact naming
    const baseClassPrices: { [key: string]: number } = {
      "Compact Cars": 800,
      "Subcompact Cars": 650,
      "Midsize Cars": 1200,
      "Large Cars": 1800,
      "Two Seaters": 2500,
      "Standard Pickup Trucks": 2200,
      "Sport Utility Vehicle - 4WD": 2200,
      "Small Sport Utility Vehicle 4WD": 1800,
      "Small Station Wagons": 1400,
      "Sport Utility Vehicle - 2WD": 1800,
      "Minicompact Cars": 450,
      "Standard Sport Utility Vehicle 4WD": 2200,
      "Standard Pickup Trucks 4WD": 2400,
      "Special Purpose Vehicles": 2800,
      "Standard Pickup Trucks 2WD": 2000,
      Vans: 1600,
      "Small Sport Utility Vehicle 2WD": 1600,
      "Special Purpose Vehicle 2WD": 2600,
      "Midsize-Large Station Wagons": 1600,
      "Midsize Station Wagons": 1500,
      "Small Pickup Trucks": 1500,
      "Small Pickup Trucks 2WD": 1400,
      "Standard Sport Utility Vehicle 2WD": 1900,
      "Vans, Cargo Type": 1400,
      "Minivan - 2WD": 1400,
      "Special Purpose Vehicle 4WD": 3000,
      "Vans, Passenger Type": 1500,
      "Small Pickup Trucks 4WD": 1600,
      "Minivan - 4WD": 1500,
      "Standard Pickup Trucks/2wd": 2000,
      "Special Purpose Vehicles/2wd": 2600,
      "Special Purpose Vehicles/4wd": 3000,
      "Vans Passenger": 1500,
      "Special Purpose Vehicle": 2800,
    };

    // Brand multipliers (premium brands cost more)
    const brandMultipliers: { [key: string]: number } = {
      BMW: 1.8,
      "Mercedes-Benz": 1.9,
      Audi: 1.7,
      Lexus: 1.6,
      Porsche: 3.0,
      Ferrari: 5.0,
      Lamborghini: 4.5,
      Bentley: 4.0,
      "Rolls-Royce": 6.0,
      Tesla: 2.2,
      Volvo: 1.4,
      Jaguar: 1.8,
      "Land Rover": 1.9,
      Cadillac: 1.5,
      Infiniti: 1.3,
      Acura: 1.3,
      Lincoln: 1.4,
      Genesis: 1.5,
      Toyota: 1.0,
      Honda: 1.0,
      Nissan: 1.0,
      Mazda: 1.0,
      Hyundai: 0.9,
      Kia: 0.9,
      Volkswagen: 1.1,
      Ford: 1.0,
      Chevrolet: 1.0,
      Chrysler: 1.0,
      Dodge: 1.1,
      Jeep: 1.2,
      Subaru: 1.1,
      Mitsubishi: 0.9,
      Suzuki: 0.8,
      Fiat: 0.8,
      Renault: 0.9,
      Peugeot: 0.9,
      Citroën: 0.9,
      smart: 0.7,
      Fisker: 2.5,
      Kandi: 1.8,
    };

    // Get base price from vehicle class - use exact match first, then fallback
    let basePrice = baseClassPrices[car.vclass] || 1000;

    // Apply brand multiplier
    const brandMultiplier = brandMultipliers[car.make] || 1.0;
    basePrice *= brandMultiplier;

    // Age depreciation (newer cars cost more)
    const currentYear = new Date().getFullYear();
    const carYear = parseInt(car.year);
    const carAge = currentYear - carYear;

    let ageMultiplier = 1.0;
    if (carAge <= 1) ageMultiplier = 1.3; // Very new cars
    else if (carAge <= 3) ageMultiplier = 1.2; // New cars
    else if (carAge <= 5) ageMultiplier = 1.1; // Recent cars
    else if (carAge <= 8) ageMultiplier = 1.0; // Standard
    else if (carAge <= 12) ageMultiplier = 0.9; // Older cars
    else ageMultiplier = 0.8; // Very old cars

    basePrice *= ageMultiplier;

    // Engine size factor (larger engines cost more)
    const displacement = car.displ || 2.0;
    let engineMultiplier = 1.0;
    if (displacement >= 4.0) engineMultiplier = 1.3;
    else if (displacement >= 3.0) engineMultiplier = 1.2;
    else if (displacement >= 2.5) engineMultiplier = 1.1;
    else if (displacement >= 2.0) engineMultiplier = 1.0;
    else if (displacement >= 1.5) engineMultiplier = 0.95;
    else if (displacement > 0) engineMultiplier = 0.9;
    else engineMultiplier = 1.2; // Electric vehicles (no displacement)

    basePrice *= engineMultiplier;

    // Fuel type adjustments
    const fuelType = car.fueltype.toLowerCase();
    let fuelMultiplier = 1.0;
    if (fuelType.includes("premium") || fuelType.includes("midgrade")) {
      fuelMultiplier = 1.15; // Premium fuel cars cost more
    } else if (
      fuelType.includes("electric") ||
      fuelType.includes("electricity")
    ) {
      fuelMultiplier = 1.25; // Electric cars cost more
    } else if (fuelType.includes("diesel")) {
      fuelMultiplier = 1.05; // Diesel slightly more
    } else if (fuelType.includes("hybrid") || fuelType.includes("plug-in")) {
      fuelMultiplier = 1.2; // Hybrid technology premium
    }

    basePrice *= fuelMultiplier;

    // Drive type adjustment (AWD costs more)
    const driveType = car?.drive?.toLowerCase();
    if (
      driveType.includes("4wd") ||
      driveType.includes("awd") ||
      driveType.includes("all-wheel")
    ) {
      basePrice *= 1.1;
    }

    // Round to nearest 50 TL for realistic pricing
    const finalPrice = Math.round(basePrice / 50) * 50;

    // Ensure minimum price of 400 TL and maximum reasonable price of 8000 TL
    return Math.max(1000, Math.min(8000, finalPrice));
  } catch (err) {
    return 3500;
  }
};