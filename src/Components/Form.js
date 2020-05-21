import React, {useState} from 'react';

function Form({makeDate}) {

    const initialState = {
        pet:'',
        owner:'',
        date:'',
        hour:''
    }

    const [date, setDate] = useState(initialState)

    // cualquier cambio va al state
    const handleChange = e => {
        setDate({
            ...date, 
            [e.target.name] : e.target.value
        })
    }

    // envio de formulario, usa método desde otra clase
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(date)
        makeDate(date)

        setDate(initialState)
    }
    
    return(
            <div className="form-container">
                <h2 className="form-title">
                    Formulario para citas
                </h2>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="">
                        <label className="">
                            Mascota
                        </label>
                        <div className="">
                            <input 
                                className="l"
                                name="pet"
                                placeholder="Mascota" 
                                type="text"
                                onChange={handleChange}
                                value={date.pet}
                            />
                        </div>
                    </div>

                    <div className="">
                        <label className="">
                            Propietario Mascota
                        </label>
                        <div className="">
                            <input 
                                className=""
                                name="owner"
                                placeholder="Propietario Mascota" 
                                type="text"
                                onChange={handleChange}
                                value={date.owner}    
                            />
                        </div>
                    </div>

                    <div className="">

                        <label className="">
                            Fecha de reserva
                        </label>
                        <div className="">
                            <input 
                                className=""
                                name="date"
                                placeholder="Date" 
                                type="date"
                                onChange={handleChange}
                                value={date.date}
                            />
                        </div>
                    </div>

                    <div className="">                            

                        <label className="">
                            Hora de reserva
                        </label>
                        <div className="0">
                            <input 
                                className=""
                                name="hour"
                                placeholder="Hour" 
                                type="time"
                                onChange={handleChange}
                                value={date.hour}
                            />
                        </div>
                        
                    </div>

                    <input type="submit"
                        className=""                            
                    />

                </form>
            </div>
    
    );
}

export default Form;


