import React from 'react';
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from 'react-icons/fa';


const Create = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async data => {
    console.log(data)
    reset()
  };
  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">

          {/* Title */}

          <input type="text" placeholder="Title"
            className="input input-bordered w-full max-w-xs"
            {...register("title", {
              required: {
                value: true,
                message: 'Title is required'
              }
            })} />

          <label className="label">
            <span className="label-text-alt">
              {errors?.title?.type === 'required' && <p className='text-red-600'>{errors.title.message}</p>}
              {/* {errors?.mail?.type === 'pattern' && <p className='text-red-600'>{errors.mail.message}</p>} */}
            </span>
          </label>


          {/* description */}

          <textarea type="text" placeholder="Description"
            className="textarea textarea-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: 'Description is required'
              }
            })} />

          <label className="label">
            <span className="label-text-alt">
              {errors?.description?.type === 'required' && <p className='text-red-600'>{errors.description.message}</p>}
              {/* {errors?.mail?.type === 'pattern' && <p className='text-red-600'>{errors.mail.message}</p>} */}
            </span>
          </label>

          {/* description */}

          <input type="date" placeholder="Date"
            className="input input-bordered w-full max-w-xs"
            {...register("date", {
              required: {
                value: true,
                message: 'Date is required'
              }
            })} />

          <label className="label">
            <span className="label-text-alt">
              {errors?.date?.type === 'required' && <p className='text-red-600'>{errors.date.message}</p>}
              {/* {errors?.mail?.type === 'pattern' && <p className='text-red-600'>{errors.mail.message}</p>} */}
            </span>
          </label>

        </div>
        <div>
          <button className="btn btn-dark w-full max-w-xs" type='submit'><FaCloudUploadAlt /><span> Upload</span></button>
        </div>
      </form>
    </div>
  );
};

export default Create;