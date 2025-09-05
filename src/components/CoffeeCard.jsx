import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, quantity, photo } = coffee

    const handleCoffeeDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                // start delete in db after confirmation 
                fetch(`http://localhost:5000/coffees/${coffee._id}`, {
                    method: 'DELETE',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(coffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: " Coffee deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });

    }



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="coffee" />
                </figure>
                <div className="flex justify-around items-center w-full">
                    <div className='w-full'>
                        <h2>{name}</h2>
                        <p>Price:{price} </p>
                        <p>Quantity:{quantity}</p>
                    </div>
                    <div className="card-actions justify-end w-full pr-6">
                        <div className="join join-vertical space-y-4">
                            <Link to={`/coffeeDetails/${coffee._id}`} className="btn join-item">view</Link>
                            <Link to={`/updateCoffee/${coffee._id}`}
                             className="btn join-item">Edit</Link>

                            <button onClick={() => handleCoffeeDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;