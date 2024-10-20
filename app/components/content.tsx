import {promises as fs} from 'fs';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

export default async function Home(){
  const file= await fs.readFile(process.cwd()+'/app/data/output.json','utf8');
  const data= JSON.parse(file);
  return(
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Video Library</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((Video: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; content: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; Link: string | undefined; }) => (
          <div key={Video.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{Video.title}</h2>
            <p className="text-gray-600 mb-4">{Video.content}</p>
            <iframe
              className="w-full h-64 rounded-lg"
              src={Video.Link}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}