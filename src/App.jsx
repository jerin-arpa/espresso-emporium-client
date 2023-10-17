import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold text-center my-5'>Expresso Emporium</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
