class APIFilters {
  constructor(query, queryParams) {
    this.query = query;
    this.queryStr = queryParams;
  }

  search() {
    const keyword = this.queryStr.get("keyword")
      ? {
          name: {
            $regex: this.queryStr.get("keyword"),
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = {};
    for (const [key, value] of this.queryStr.entries()) {
      queryCopy[key] = value;
    }

    const removeFields = ["keyword", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);
    console.log(queryCopy);

    let output = {}
    let prop = {}

    for(let key in queryCopy) {
      console.log('key:', key);
      if (!key.match(/\b(gt|gte|lt|lte)/)) {
        output[key] = queryCopy[key];
      } else {
        prop = key.split("[")[0];
        console.log('prop:', prop);
        let operator = key.match(/\[(.*)\]/)[1];
        console.log('operator:', operator);

        if(!output[prop]) {
          output[prop] = {};
        }
        output[prop][`$${operator}`] = Number(queryCopy[key]);
      }
    }
    console.log('output:', output);
    //{price: {$gte: 100, $lte: 200}}

    this.query = this.query.find(output);
    return this;
  }

  pagination(resPerPage) {
      const currentPage = Number(this.queryStr.get("page")) || 1;
      const skip = resPerPage * (currentPage - 1);

      this.query = this.query.limit(resPerPage).skip(skip);
      return this;
  }
}

export default APIFilters;
