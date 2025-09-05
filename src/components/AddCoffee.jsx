import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        //send data to the db use post
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee added a Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log('coffee after get the server', data);
                // form.reset()
            })
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-6'>
                <h2 className='text-6xl'>Add Coffee </h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="PhotoURL" />
                </fieldset>
                <button className="btn btn-block">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;