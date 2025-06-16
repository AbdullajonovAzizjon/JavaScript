function salom(ism) {
    console.log(`Nima gap, ${ism}. Men ${this.kim}.`);
  }
  
  const kontekst = { kim: "Ali" };
  
  salom.call(kontekst, "Azizjon");