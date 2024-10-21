import { promises as fs } from 'fs';
import path from 'path';

import Content from './components/content'; // Import your Content component


interface Video {
  id: number;
  Title: string;
  Description: string;
  Link: string;
  Category: string;
}

// Define the component itself as an async function to fetch the data
export default async function Home() {
  // Read the JSON file during server-side rendering
  const filePath = path.join(process.cwd(), 'app/data/output.json');
  const file = await fs.readFile(filePath, 'utf8');
  const data: Video[] = JSON.parse(file);

  return (
  <Content videos={data} />
 );
}
