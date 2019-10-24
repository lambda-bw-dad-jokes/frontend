export const initialFormState =  {
    name: "",
    age: "",
    height: ""
  }

export const images = [
    "https://imgur.com/7CaghcJ",

  ];
  
 export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }