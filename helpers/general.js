exports.returnObj = (status , statusCode , data) => {
    return returnObj = {
            status:status,
            statusCode:statusCode,
            data:data? data : []
    }
};