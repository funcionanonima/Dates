import React, {useState} from 'react';

function Date({date, index, deleteDate}){
    return(
        <div className="date">            
            <h3>Mascota: {date.pet}</h3>
            <p>Dueño: {date.owner}
            Fecha: {date.date}
            Hora: {date.hour}   
            </p>
            <button
                onClick={() => deleteDate(index)}
            >Eliminar</button>         
        </div>
    )
}

export default Date