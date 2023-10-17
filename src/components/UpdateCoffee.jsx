import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, supplier, category, taste, quantity, details, photo } = coffee;



    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, supplier, category, quantity, taste, details, photo };
        console.log(updatedCoffee);


        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            });
    }




    return (
        <div>
            <div className="hero container mx-auto">
                <div className="w-full">
                    <form onSubmit={handleUpdateCoffee} className="bg-gray-100 p-10 rounded-xl m-10">
                        <h2 className="text-2xl font-bold text-center mb-5">Update {name} Coffee</h2>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Name" name="name" defaultValue={name} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Supplier" name="supplier" defaultValue={supplier} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Category" name="category" defaultValue={category} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" placeholder="Available Quantity" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Taste" name="taste" defaultValue={taste} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Details" name="details" defaultValue={details} className="input input-bordered" required />
                                </div>
                            </div>
                        </div>


                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter Photo URL" name="photo" defaultValue={photo} className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" value="Update Coffee" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;