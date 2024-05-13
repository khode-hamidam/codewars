function isValid(formula){
    const firstRule=!(formula.includes(1) && formula.includes(2));
      const secondRule=!(formula.includes(3) && formula.includes(4));
      const thiredRule=(formula.includes(5) === formula.includes(6));
      const fourRule=(formula.includes(7) || formula.includes(8));
    return firstRule&&secondRule&&thiredRule&&fourRule;
  }