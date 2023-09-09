import express from 'express';
import { json, urlencoded } from 'body-parser';
import multer, { memoryStorage } from 'multer';

const app = express();
const port = process.env.PORT || 8001;

app.use(json());
app.use(urlencoded({ extended: true }));

const storage = memoryStorage(); // In-memory storage for file uploads
const upload = multer({ storage: storage });

// Simulated database for storing user data and document metadata
const users = [];
const documents = [];

app.post('/upload-document', upload.single('document'), (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const document = {
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    };
    documents.push(document);

    res.status(200).json({ message: 'Document uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/approve-account', (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.isApproved = true;

    res.status(200).json({ message: 'Account approved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
