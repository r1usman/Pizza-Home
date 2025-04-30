import { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Loader from '../../ui/Loader';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMenu() {
      setIsLoading(true); // Start loading
      setError(''); // Reset error

      try {
        const API_URL = 'https://react-fast-pizza-api.onrender.com/api';
        const res = await fetch(`${API_URL}/menu`);

        if (!res.ok) throw new Error('Failed getting menu');

        const { data } = await res.json();
        setMenu(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Always stop loading
      }
    }

    fetchMenu();
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
