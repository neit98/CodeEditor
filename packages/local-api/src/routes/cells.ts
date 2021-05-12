import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    /**
     * Make sure the cell storage file exists
     * If it does not exist, add in a default list of cells
     * Read the file
     * Parse a list of cells out of it
     * Send a list of cells back to browser
     */

    try {
      const result = await fs.readFile(fullPath, { encoding: 'utf8' });

      res.send(JSON.parse(result));
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(fullPath, '[]', 'utf-8');
        res.send([]);
      } else {
        throw error;
      }
    }
  });

  router.post('/cells', async (req, res) => {
    /**
     * Take the list of cells from the request object
     * Serialize them
     * Write the cells into the file
     */
    const { cells }: { cells: Cell[] } = req.body;
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });

  return router;
};
