import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
   const {_id, name, quantity, price, taste, details, category, photo} = useLoaderData();

    const handleUpdateCoffee = e =>{
        
        e.preventDefault()
        const form = e.target;
        const formData = new Object(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee);

        //send to the db to update it
        

    }


    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-6'>
                <h2 className='text-6xl'>Update Coffee </h2>
                
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" defaultValue={name} placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity'defaultValue={quantity} className="input w-full" placeholder="quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price'defaultValue={price} className="input w-full" placeholder="price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste'defaultValue={taste} className="input w-full" placeholder="Taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Category</label>
                        <input type="text" name='category'defaultValue={category} className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details'defaultValue={details} className="input w-full" placeholder="Coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" name='photo'defaultValue={photo} className="input w-full" placeholder="PhotoURL" />
                </fieldset>
                <button className="btn btn-block">Update Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;