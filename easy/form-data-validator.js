// This function checks if a value is "falsy" (false, 0, "", null, undefined, NaN),
// but treats 0 and false as "truthy" values.
const isFalsyExceptZeroAndFalse = (value) => {
  return value !== 0 && value !== false && !value;
};

// This function checks if the form data contains any "falsy" values (except 0 and false).
const isFormDataInvalid = (formData) => {
  // If formData is null, it's considered invalid.
  if (formData === null) return true;

  // If formData is neither an array nor an object, check if it's a "falsy" value.
  if (!Array.isArray(formData) && typeof formData !== "object") {
    return isFalsyExceptZeroAndFalse(formData);
  }

  // If formData is an array or an object, convert it to an array (if it's not already one),
  // and check if it contains any "falsy" values.
  const data = Array.isArray(formData) ? formData : Object.values(formData);
  return data.some(isFalsyExceptZeroAndFalse);
};

// console.log(isFormDataInvalid({}));
// console.log(isFormDataInvalid([]));
// console.log(isFormDataInvalid({ a: 0 }));
// console.log(isFormDataInvalid({ a: false }));
// console.log(isFormDataInvalid({ a: "" }));
// console.log(isFormDataInvalid({ a: null }));
// console.log(isFormDataInvalid({ a: undefined }));
// console.log(isFormDataInvalid({ a: 1 }));
// console.log(isFormDataInvalid({ a: true }));
// console.log(isFormDataInvalid({ a: "a" }));
// console.log(isFormDataInvalid({ a: [] }));
// console.log(isFormDataInvalid({ a: [1] }));
// console.log(isFormDataInvalid({ a: [0] }));
// console.log(isFormDataInvalid({ a: [false] }));
console.log(isFormDataInvalid({ a: [true] }));
