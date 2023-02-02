const fs = require("fs");

// middleware for id checking

exports.checkID = (req, res, next, val) => {
  console.log(`File id is: ${val}`);
  if (req.params.id * 1 > files.length) {
    return res.status(404).json({
      status: "Fail",
      Message: "Invalid id",
    });
  }
  next();
};
// middleware for creating a new file making sure the user is inserting the info
exports.checkBody = (req, res, next, val) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: "Fail",
      message: "missing name or price",
    });
  }
  next();
};

exports.getAllFiles = (req, res) => {
  res.status(200).json({
    status: "success",
    results: files.length,
    data: {
      files,
    },
  });
};

exports.getFile = (req, res) => {
  const id = req.params.id * 1;
  const file = files.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      file,
    },
  });
};

exports.createFile = (req, res) => {
  const newId = files[files.length - 1].id + 1;
  const newFile = object.assign({ id: newId }, req.body);

  files.push(newFile);
  fs.writeFile(`${__dirname}/`, JSON.stringify(files), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        files: newFile,
      },
    });
  });
};
exports.updateFile = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      file: "<updated files>",
    },
  });
};

exports.deleteFile = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
