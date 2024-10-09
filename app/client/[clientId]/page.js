export default function ClientId({ params }) {
   return (
     <div>
       <h1>ClientId page</h1>
       <p>{params.clientId}</p>
     </div>
   );
 }
 

 export async function generateStaticParams() {
   const clients = [{ clientId: '1' }, { clientId: '2' }, { clientId: '3' }];
 
   return clients.map(client => ({
     clientId: client.clientId,
   }));
 }
 