import Link from 'next/link';

export default async function Home() {
 
 const url = await fetch("https://simple-books-api.glitch.me/books");
 const res = await url.json()
 console.log(res); 
 return ( 
   <main className='bg-indigo-400 text-8xl text-center font-bold h-screen w-full'>
    <h1>Books API</h1>
<div className='bg-green-400 text-center text-5xl font-bold py-6 px-6 m-10 rounded-full border-4 border-green-900 box-border shadow-lg'>
  {res.map((item: any) => 
  (
  <div>
    <Link href={`${item.id}`}>{item.name}</Link>
  
    </div>))}</div>

    </main>
  );
}
