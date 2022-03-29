import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifts";



export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{

        getGift(category)
        .then( imgs => {

                setState({
                    data:imgs,
                    loading:false
                });
           
        });

    },[category])

    return state;// el state aqui es la data {data:[], y el estado que es true loading:true}
}
