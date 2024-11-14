import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenText } from "react-icons/pi";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import {BiShow} from 'react-icons/bi';
import {Link } from 'react-router-dom';
import BookModal from './BookModal';

const BookSingleCard = ({book}) => {

  const[modal,setModal] = useState(false);
  console.log(book);
  if (!book) {
    return <div>Error: Book not found</div>;  // Handle case where book is undefined
  }
  return(
    <div>
        <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='bg-red-300 rounded-lg px-4 py-1 absolute top-1 right-2'>
                {book.publishYear}
            </h2>
            <h4 className='my-5 text-gray-500'>{book._id}</h4>
            <div className='flex items-center justify-start gap-x-2'>
                <PiBookOpenText className='text-2xl bg-red-300'/>
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex items-center justify-start gap-x-2'>
              <BiUserCircle className='text-red-500 text-2xl '/>
              <h2 className='my-1'>{book.author}</h2>
            </div>
            <div className='flex items-center justify-between gap-x-2 mt-4 p-4 '>
              <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer" onClick = {() => setModal(true)}/>
              <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-800  hover:text-black'/>
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl  text-yellow-600 hover:text-black'/>
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl  text-red-600 hover:text-black'/>
              </Link>
              {
                modal && (
                <BookModal book={book} onClose = {() => setModal(false)}/>
                )
              }
            </div>
        </div>
      
    </div>
  );
};

export default BookSingleCard;