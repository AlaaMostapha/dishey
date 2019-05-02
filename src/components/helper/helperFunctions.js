 //func to get all data from json server and put in data array of state
 const axios = require('axios')
const url =`http://localhost:4005/pizza`;
export function getData (state) {
    axios
        .get(url)
        .then(json => {
            console.log(json.data)
            this.setState({data: json.data})
            this.count(this.page_size)
            this.setState({
                sliceData: this
                    .state
                    .data
                    .slice(0, 3)
            })
        })
        .catch(e => {
            console.error(e)
        })
}