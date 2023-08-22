import { useEffect, useState } from 'react'
import Photo from '../components/Photo'

const Galeria = () => {

    const [ photos, setPhotos ] = useState([]);

    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                // console.log(data);
                setPhotos(data);
            });

    }, [photos]);


    return(
        <>
            <h2>Pagina galeria</h2>

            {
                photos.map((item) => (
                    <Photo 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        // thumb={item.url} 
                    />
                ))
            }
        </>
    );

}

export default Galeria;