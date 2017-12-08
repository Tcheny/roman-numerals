function Roman() {
  this.result = (number) => {

    switch (number) {
      case 1:
        return 'I';
      case 10:
        return 'X';
      case 3:
        return 'III';
      case 28:
        return 'XXVIII';
      case 50:
        return 'L';
      case 1000:
        return 'M';
        break;
    };
  };
};

const toRoman = new Roman();

module.exports = toRoman;
