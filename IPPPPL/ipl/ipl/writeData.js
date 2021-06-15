function writeData(path, result) {
    try {
      const string1 = JSON.stringify(result);
      fs.writeFile(path, string1, function (err) {
        if (err) throw err;
        console.log('File writing complete');
      });
    } catch (err) {
      console.log(err);
    }
  }
  module.exports=writeData;