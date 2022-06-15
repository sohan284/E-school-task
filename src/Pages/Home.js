import React from 'react';

const Home = ({ pokmon,search }) => {
    const { name, url } = pokmon;
    if(name.includes(search)){
        return (
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={url} alt="" /></figure>
                    <div class="card-body bg-[#dddddd] text-black">
                        <h2 class="card-title font-bold">{name}</h2>
                    </div>
    
                </div>
            </div>
        );
    }
    
};

export default Home;