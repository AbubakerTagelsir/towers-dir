const memoryCache = require('memory-cache');

// response will be fetched from the cache if exist unless provide 
// forceloading flag in the body it will fetch the data again

const useCache = (duration) => {
    return (req,res,next) => {
        const {forceLoading} = req.body;
        let key = '__TLAPI__' + req.originalURL || req.url;
        let cacheBody = memoryCache.get(key);
        if(cacheBody && !forceLoading){
            return res.send(cacheBody);
        }
        res.sendResponse = res.send;
        res.send = (body) => {
            memoryCache.put(key, body, duration * 1000);
            res.sendResponse(body);
        };

        next();
    };
};

module.exports = useCache;