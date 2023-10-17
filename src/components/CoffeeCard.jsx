import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const CoffeeCard = ({ coffee }) => {
    const { name, supplier, category, taste, quantity, photo } = coffee;

    return (
        <div>
            <div className='bg-gray-50 flex justify-between p-5 rounded-xl gap-5'>
                <img src={photo} alt="" />
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-2xl font-bold mb-3'>{name}</h2>
                        <p className='text-lg font-bold'>{supplier}</p>
                        <p className='text-lg font-bold'>{category}</p>
                        <p className='text-lg font-bold'>{taste}</p>
                        <p className='text-lg font-bold'>{quantity}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn text-2xl bg-yellow-600 text-white">
                            <AiFillEye></AiFillEye>
                        </button>
                        <button className="btn text-2xl bg-black text-white">
                            <BsFillPencilFill></BsFillPencilFill>
                        </button>
                        <button className="btn text-2xl bg-red-500 text-white">
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
};

export default CoffeeCard;