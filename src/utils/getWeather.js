import Jsonp from 'jsonp'


export default function getWeather() {
    return new Promise((resolve, reject) => {
        const url = 'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=IPwdx1ntu4muxci11k056HxRyEq7dtbx'
        Jsonp(url,{param: 'callback'},(err, res) =>{
            if(err) {
                console.log(err)
            } else {
                resolve(res)
            }
        })
    })
}