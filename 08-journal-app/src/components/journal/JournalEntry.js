import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture'
        //este style en react debe se run objeto que debe contener toda la informacion que el estilod ebe tener
        style={
            {
                backgroundSize: "cover",
                backgroundImage:"url(https://imagenes.elpais.com/resizer/zSZm_hUEWWPEBeb3pu5QGAOvsrc=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/DRAYNSYDWW7XD6RUJ3VTTN3RGA.jpg)"
            }
        }
        >

        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>un nuevo dia</p>
            <p className='journal__entry-content'> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>

    </div>
  )
}
