import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const cart = useSelector(getCart);
  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidPhone(formData.phone))
      console.error(
        'Please give us your correct phone number. We might need it to contact you.'
      );
    if (!formData.customer || !formData.phone || !formData.address) {
      console.error('Please fill in all fields');
      return;
    }
    formData.cart = cart;
    console.log('formData', formData);
  }
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            value={formData.customer}
            type="text"
            name="customer"
            onChange={handleChange}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              onChange={handleChange}
              value={formData.phone}
              name="phone"
            />
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              value={formData.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button type="primary">Order now</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
