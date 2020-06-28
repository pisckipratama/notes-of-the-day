const url = "http://localhost:8000/api/v1/notes";

Vue.config.productionTip = false
const truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + ' ';
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(' '));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + '...';
  }
  return str;
};

const vm = new Vue({
  el: '#app',
  data: {
    message: "woy",
    results: []
  },
  mounted() {
    axios.get(url).then(response => {
      let theData = response.data.data.map(item => {
        item.bodyTruncated = truncate(item.body, 50);
        item.url = `${url}/${item._id}`;
        return item;
      });
      this.results = response.data.data;
    })
  }
});

// const vm2 = new Vue({
//   el: '#app2',
//   data: {
//     results: []
//   },
//   mounted() {
//     axios.get(url)
//   }
// })