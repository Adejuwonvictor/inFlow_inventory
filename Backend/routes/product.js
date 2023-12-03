const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.post('/upload', upload.single('image'), (req, res) => {
  const image = req.file;
  if (!image) {
    return res.status(400).send('No image uploaded');
  }

  const imageData = image.buffer.toString('base64');
  console.log('Image data:', imageData);

  // Send the image data to the backend
  // ...

  res.send('Image uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
