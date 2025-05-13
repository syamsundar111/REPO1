const axios = require('axios');
module.exports = async (srv) => {
    srv.on('POST', 'ProductsServise', async req => {
        const response = await axios.get('https://services.odata.org/v2/northwind/northwind.svc/Products');
        // console.log(response.data.d.results);
        var tData = await SELECT.from(`DB_PRODUCTS`);
        console.log('Number of products in database:', tData.length);
        if (response && response.data && response.data.d && response.data.d.results && response.data.d.results.length > 0) {
            var oProdect = {
                "ProductID" : String(response.data.d.results[tData.length].ProductID),
                "ProductName" : response.data.d.results[tData.length].ProductName,
                "QuantityPerUnit" : response.data.d.results[tData.length].QuantityPerUnit
            }
            await INSERT.into("DB_PRODUCTS").entries(oProdect);
        }
    })
}