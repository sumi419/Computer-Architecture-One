/**
 * RAM access
 */
class RAM {
  constructor(size) {
    this.mem = new Array(size);
    this.mem.fill(0);
  }

  /**
   * Write (store) MDR value at address MAR
   */
  write(MAR, MDR) {
    // !!! IMPLEMENT ME
    // write the value in the MDR to the address MARr
    //MAR location to save it (address)
    //MAR is index in our array
    //MDR something to save at location
    this.mem[MAR] = MDR;
  }

  /**
   * Read (load) MDR value from address MAR
   *
   * @returns MDR
   */
  read(MAR) {
    // !!! IMPLEMENT ME
    // Read the value in address MAR and return it
    // MAR is just the index number for spot in mem
    // return this.mem[MAR] gives the value at that spot
    return this.mem[MAR];
  }
}

module.exports = RAM;
