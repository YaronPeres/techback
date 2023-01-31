const fs = require("fs");

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
  if (!file) {
    return res.status(404).json({
      status: "fail",
      Message: "invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      file,
    },
  });
};

exports.reateFile = (req, res) => {
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
  if (req.params.id * 1 > files.length) {
    return res.status(404).json({
      status: "Fail",
      Message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      file: "<updated files>",
    },
  });
};

exports.deleteFile = (req, res) => {
  if (req.params.id * 1 > files.length) {
    return res.status(404).json({
      status: "Fail",
      Message: "Invalid id",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
