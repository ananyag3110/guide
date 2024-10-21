import { promises as fs } from 'fs';
import path from 'path';

import Content from './components/content'; // Import Content component

interface Video {
  id: number;
  Title: string;
  Description: string;
  Link: string;
  Category: string;
}

export default async function Home() {
  // Fetch the JSON data
  const filePath = path.join(process.cwd(), 'app/data/output.json');
  const file = await fs.readFile(filePath, 'utf8');
  const data: Video[] = JSON.parse(file);

  return (
    
      <Content videos={data} />
    
  );
}
