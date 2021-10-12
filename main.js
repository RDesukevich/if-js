function TransformationDate(date) {
    date = date.split('-')
    let date1 = date[0]
    date[0] = date[2]
    date[2] = date1
    return date.join('.')
}

console.log(TransformationDate('1993-01-28'))

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const SearchInfo = searchItem => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].city === searchItem || data[i].country === searchItem || data[i].hotel === searchItem) {
            console.log(data[i])
        }
    }
    return data
}
console.log(SearchInfo('Germany'))