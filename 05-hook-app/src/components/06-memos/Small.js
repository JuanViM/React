import React,{memo} from 'react';

export const Small = memo(({value}) => {

    console.log("entrando en small");
  return (
    <small>{value}</small>
  )
}
)