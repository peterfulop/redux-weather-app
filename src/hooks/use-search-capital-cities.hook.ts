import { useState } from 'react';
import DetailedCapitals from '../assets/detailed_capitals.json';
import { CapitalCity } from '../types';

export const useSearchCapitalCities = () => {
  const [capitalCities, setCapitalCities] = useState<CapitalCity[]>([]);

  const searchCapitalCities = (query: string) => {
    if (!query) return setCapitalCities([]);
    const result = DetailedCapitals.filter((data) => {
      if (data.capital) {
        return data.capital?.toLowerCase().includes(query.toLowerCase());
      }
    })
      .map((res) => {
        return {
          id: res.id,
          name: res.capital,
          country: res.country,
          countryCode: res.internet,
        } as CapitalCity;
      })
      .sort((a, b) => a.name?.localeCompare(b.name));

    if (result.length > 8) {
      const top8 = result.slice(0, 8);
      setCapitalCities([...top8]);
    } else {
      setCapitalCities([...result]);
    }
  };

  return {
    searchCapitalCities,
    capitalCities,
  };
};
