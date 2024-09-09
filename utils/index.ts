
export async function fetchCars(){
    const headers ={
        'X-RapidAPI-Key' :'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
		'X-RapidAPI-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const Response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
        {
            headers: headers,
        
        });

        const result = await Response.json();
        return result;
}

export const calculateCarRent = (city_mpg:number,year:number) => {

    const basePricePerDay =50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;


    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
