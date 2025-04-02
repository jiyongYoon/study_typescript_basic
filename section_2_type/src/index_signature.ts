// 인덱스 시그니처 사용 X
type CountryCodes = {
  Korea: string;
  UnitedState: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

// 인덱스 시그니처
type CountryCodes2 = {
  [key: string]: string;
};

let countryCodes2: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 포함해야한다면 명시 가능
//   Japan: string; // Property 'Japan' of type 'string' is not assignable to 'string' index type 'number'. -> 호환안되어서 에러
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 411,
//   Japan: '145',
};
