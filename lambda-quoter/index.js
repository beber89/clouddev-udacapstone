// implemented in js at the beginning then write it in golang

const lst = [
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
    ]

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(lst[Math.floor(Math.random() * lst.length)] ),
    };
    return response;
};
