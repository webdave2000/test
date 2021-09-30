module.exports = [
    {
        pair: 'vigeos',
        api_url: 'https://api.newdex.io/v1/price?symbol=vig111111111-vig-eos',
        json_path: '$.data.price',
        modifier: (raw_value) =>{
            return raw_value*100000000;
        },
        error_handler : (res) =>{
            if(res.code !== 200){
                return res.msg;
            }
        }
    },
    /*{
    pair: 'boxeos',
        api_url: 'https://api.newdex.io/v1/price?symbol=token.defi-box-eos',
        json_path: '$.data.price',
        modifier: (raw_value) =>{
            return raw_value*1000000;
        },
        error_handler : (res) =>{
            if(res.code !== 200){
                return res.msg;
            }
        }
    },*/
    {
        pair: 'eosusdt',
        api_url: 'https://api.binance.com/api/v1/ticker/price?symbol=EOSUSDT',
        json_path: '$.price',
        modifier: (raw_value) =>{
            return raw_value*10000;
        },
        error_handler : (res) =>{
            if(res.code){
                return res.msg;
            }
        }
    },
    {
         pair: 'eosusd',
         api_url: 'https://api.pro.coinbase.com/products/EOS-USD/ticker',
         json_path: '$.price',
         modifier: (raw_value) =>{
             return raw_value*10000;
         },
         error_handler : (res) =>{
             if(res.message){
                 return res.message;
             }
         }
     },

    {
        pair: 'eosvigor',
        api_url: 'https://api.newdex.io/v1/price?symbol=eosio.token-eos-vigor',
        json_path: '$.data.price',
        modifier: (raw_value) =>{
            return raw_value * 10000;
        },
        error_handler : (res) =>{
            if(res[0] == "error"){
                return res.join(', ');
            }
        }
    },
    {
        pair: 'iqeos',
        api_url: 'https://www.mxc.ceo/open/api/v1/data/ticker?market=iq_eos',
        json_path: '$.data.last',
        modifier: (raw_value) =>{
            return raw_value*1000000;
        },
        error_handler : (res) =>{
            if(res.code !== 200){
                return res.msg;
            }
        }
    },
    {
        pair: 'ethusd',
        api_url: 'https://api.bitfinex.com/v1/pubticker/ethusd',
        json_path: '$.last_price',
        modifier: (raw_value) => {
            return raw_value*1e4;
        },
        error_handler : (res) =>{
            return res.message
        }
    },
    {
        pair: 'btcusd',
        api_url: 'https://api.bitfinex.com/v1/pubticker/btcusd',
        json_path: '$.last_price',
        modifier: (raw_value) => {
            return raw_value*1e4;
        },
        error_handler : (res) =>{
            return res.message
        }
    }
];

