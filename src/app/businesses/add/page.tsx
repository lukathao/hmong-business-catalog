import React, { FormEvent } from 'react'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    console.log(JSON.stringify(data));
}

const addBusiness = () => {
  return (
    <div>
        {/* <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="business_name">Business Name</label>
                <input 
                    id="business_name" 
                    name="business_name"
                    type="text"
                    placeholder="Your business name"
                    required
                />
                <label htmlFor="business_owner">Owner</label>
                <input 
                    id="business_owner" 
                    name="business_owner"
                    type="text"
                    placeholder="Owner"
                    required
                />
                <label htmlFor="business_id">Business Identification Number</label>
                <input 
                    id="business_id" 
                    name="business_id"
                    type="text"
                    placeholder="Business ID"
                    required
                />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form> */}
    </div>
  )
}

export default addBusiness