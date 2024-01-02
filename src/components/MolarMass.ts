// Define a dictionary to store atomic masses of elements
const atomicMasses: { [element: string]: number } = {
    H: 1.008,
    He: 4.0026,
    Li: 6.94,
    Be: 9.0122,
    B: 10.81,
    C: 12.01,
    N: 14.01,
    O: 16.00,
    F: 19.00,
    Ne: 20.18,
    // Add more elements and their atomic masses here...
  };
  
  function getMolarMass(compound: string): number {
    const stack: { element: string; count: number }[] = [];
    let currentElement = '';
    let currentCount = '';
  
    for (let i = 0; i < compound.length; i++) {
      const char = compound[i];
  
      if (char === '(') {
        // Push current element and count onto the stack and reset
        if (currentElement) {
          stack.push({ element: currentElement, count: currentCount ? parseInt(currentCount) : 1 });
        }
        currentElement = '';
        currentCount = '';
      } else if (char === ')') {
        // Pop from the stack and multiply current element count
        const multiplier = currentCount ? parseInt(currentCount) : 1;
        currentElement = '';
        currentCount = '';
        const subgroup = stack.pop();
        if (subgroup) {
          currentElement = subgroup.element;
          currentCount = (subgroup.count * multiplier).toString();
        }
      } else if (/[0-9]/.test(char)) {
        // Found a digit (part of the element count)
        currentCount += char;
      } else {
        // Found a letter (part of the element symbol)
        currentElement += char;
      }
    }
  
    // Add the molar mass of the last element (if any)
    if (currentElement) {
      stack.push({ element: currentElement, count: currentCount ? parseInt(currentCount) : 1 });
    }
  
    // Calculate the total molar mass
    let molarMass = 0;
    for (const item of stack) {
      molarMass += atomicMasses[item.element] * item.count;
    }
  
    return molarMass;
  }
  
  // Test the function
  const compound = "H2O(NaCl)2";
  const molarMass = getMolarMass(compound);
  console.log(`Molar mass of ${compound} is ${molarMass.toFixed(2)} g/mol`);
  