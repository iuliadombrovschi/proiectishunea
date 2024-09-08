
export async function fetchCars(){
    const headers ={
        'X-RapidAPI-Key' :'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
		'X-RapidAPI-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const Response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model-corrola',
        {
            headers: headers,
        
        });

        const result = await Response.json();
        return result;
}