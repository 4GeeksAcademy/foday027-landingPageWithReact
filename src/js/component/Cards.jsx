import React from 'react';
import Card from './Card.jsx';
const arr = [{ img: "https://images.unsplash.com/photo-1716724854567-9ec995836d19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Car', description: "Some quick example text to build on the card title and make up the bulk of the card's content" }, { img: 'https://plus.unsplash.com/premium_photo-1695559212601-f799f6cc0f8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Lightning', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis hic" }, { img: "https://images.unsplash.com/photo-1717511140035-d5981b3d17c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Forest', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis hic" }, { img: 'https://images.unsplash.com/photo-1712025853995-d59634cf286e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D', title: 'Glas Cup', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis hic" }];
export const Cards = () => {
    return (
        <div className='container-fluid'>


            <div className=' one mb-5 bg-tertiary '>
                <h1>A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut odio dolore accusamus perferendis, earum nisi saepe quod minima quae reiciendis repudiandae autem magni similique! Amet vel eligendi voluptatibus adipisci.</p>
                <button className='btn btn-primary mb-2' type='submit'>Call to action!</button>
            </div>



            <div className='two row'>
                {arr.map(item => {
                    return (
                        <Card item={item} />
                    )
                })}
            </div>

        </div>
    );
}

export default Card;